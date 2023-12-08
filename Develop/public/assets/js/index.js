// Declare variables
let noteForm;
let noteTitle;
let noteText;
let saveNoteBtn;
let newNoteBtn;
let noteList;

// Check if the current page is '/notes'
if (window.location.pathname === '/notes') {
  // Assign elements to variables
  noteForm = document.querySelector('.note-form');
  noteTitle = document.querySelector('.note-title');
  noteText = document.querySelector('.note-textarea');
  saveNoteBtn = document.querySelector('.save-note');
  newNoteBtn = document.querySelector('.new-note');
  clearBtn = document.querySelector('.clear-btn');
  noteList = document.querySelectorAll('.list-container .list-group');
}

// Function to show an element
const show = (elem) => {
  elem.style.display = 'inline';
};

// Function to hide an element
const hide = (elem) => {
  elem.style.display = 'none';
};

// Variable to store the active note
let activeNote = {};

// Function to fetch notes from the server
const getNotes = () =>
  fetch('/api/notes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

// Function to save a note to the server
const saveNote = (note) =>
  fetch('/api/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  });

// Function to delete a note from the server
const deleteNote = (id) =>
  fetch(`/api/notes/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });

// Function to render the active note
const renderActiveNote = () => {
  hide(saveNoteBtn);
  hide(clearBtn);

  if (activeNote.id) {
    show(newNoteBtn);
    noteTitle.setAttribute('readonly', true);
    noteText.setAttribute('readonly', true);
    noteTitle.value = activeNote.title;
    noteText.value = activeNote.text;
  } else {
    hide(newNoteBtn);
    noteTitle.removeAttribute('readonly');
    noteText.removeAttribute('readonly');
    noteTitle.value = '';
    noteText.value = '';
  }
};

// Function to handle saving a note
const handleNoteSave = () => {
  const newNote = {
    title: noteTitle.value,
    text: noteText.value
  };
  saveNote(newNote).then(() => {
    getAndRenderNotes();
    renderActiveNote();
  });
};

// Function to delete a note
const handleNoteDelete = (e) => {
  e.stopPropagation();

  const note = e.target;
  const noteId = JSON.parse(note.parentElement.getAttribute('data-note')).id;

  if (activeNote.id === noteId) {
    activeNote = {};
  }

  deleteNote(noteId).then(() => {
    getAndRenderNotes();
    renderActiveNote();
  });
};

// Function to view a note
const handleNoteView = (e) => {
  e.preventDefault();
  activeNote = JSON.parse(e.target.parentElement.getAttribute('data-note'));
  renderActiveNote();
};

// Function to handle creating a new note
const handleNewNoteView = (e) => {
  activeNote = {};
  show(clearBtn);
  renderActiveNote();
};

// Function to render buttons based on form state
const handleRenderBtns = () => {
  show(clearBtn);
  if (!noteTitle.value.trim() && !noteText.value.trim()) {
    hide(clearBtn);
  } else if (!noteTitle.value.trim() || !noteText.value.trim()) {
    hide(saveNoteBtn);
  } else {
    show(saveNoteBtn);
  }
};

// Function to render the list of note titles
const renderNoteList = async (notes) => {
  let jsonNotes = await notes.json();
  if (window.location.pathname === '/notes') {
    noteList.forEach((el) => (el.innerHTML = ''));
  }

  let noteListItems = [];

  // Function to create a list item element
  const createLi = (text, delBtn = true) => {
    const liEl = document.createElement('li');
    liEl.classList.add('list-group-item');

    const spanEl = document.createElement('span');
    spanEl.classList.add('list-item-title');
    spanEl.innerText = text;
    spanEl.addEventListener('click', handleNoteView);

    liEl.append(spanEl);

    if (delBtn) {
      const delBtnEl = document.createElement('i');
      delBtnEl.classList.add(
        'fas',
        'fa-trash-alt',
        'float-right',
        'text-danger',
        'delete-note'
      );
      delBtnEl.addEventListener('click', handleNoteDelete);

      liEl.append(delBtnEl);
    }

    return liEl;
  };

  if (jsonNotes.length === 0) {
    noteListItems.push(createLi('No saved Notes', false));
  }

  jsonNotes.forEach((note) => {
    const li = createLi(note.title);
    li.dataset.note = JSON.stringify(note);

    noteListItems.push(li);
  });

  if (window.location.pathname === '/notes') {
    noteListItems.forEach((note) => noteList[0].append(note));
  }
};

// Gets notes from the db and renders them to the sidebar
const getAndRenderNotes = () => getNotes().then(renderNoteList);

if (window.location.pathname === '/notes') {
  saveNoteBtn.addEventListener('click', handleNoteSave);
  newNoteBtn.addEventListener('click', handleNewNoteView);
  clearBtn.addEventListener('click', renderActiveNote);
  noteForm.addEventListener('input', handleRenderBtns);
}

getAndRenderNotes();
