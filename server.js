const express = require('express');
const path = require('path');

const app = express();


const PORT = process.env.PORT || 3000;

// Serve the notes.html file
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
  });
  
  // Serve the index.html file for all other routes
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });