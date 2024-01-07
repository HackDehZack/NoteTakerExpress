# Note Taker Express README/DOCUMENTATION

## Table of Contents

- [Introduction](#introduction)
- [Architecture](#architecture)
- [Components](#components)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Deployment](#deployment)
- [Live Demo](#live-demo)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Note Taker Express project is a web application developed using Express.js. It provides users with the ability to create, view, and delete notes. This documentation provides a comprehensive overview of the project, including its architecture, installation instructions, usage guidelines, and more.

## Architecture

The Note Taker Express application follows a client-server architecture, with the client-side implemented using HTML, CSS, and JavaScript, and the server-side implemented using Express.js. The application utilizes a RESTful API to handle HTTP requests and responses.

## Components

The Note Taker Express application consists of the following main components:

1. `server.js`: This file serves as the entry point for the server-side code. It sets up the Express.js server and defines the routes for handling HTTP requests.

2. `public` folder: This folder contains the client-side code, including HTML templates, CSS stylesheets, and JavaScript files.

3. `db.json`: This file serves as the database for storing notes. It is a JSON file that stores an array of note objects.

## Installation

To install and run the Note Taker Express application locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd notetakerexpress`
3. Install the dependencies: `npm install`
4. Start the application: `npm start`

## Usage

Once the application is running locally, you can access it in your web browser at [http://localhost:3000](http://localhost:3000). The main page displays a list of existing notes on the left side and a form for creating new notes on the right side.

- To create a new note, enter a title and text for the note in the respective input fields, and click the "Save" button.
- To view a note, click on its title in the list. The note will be displayed in the main area.
- To delete a note, click the "Delete" button next to the note in the list.

## Technologies

The Note Taker Express application utilizes the following technologies:

- Express.js: A web application framework for Node.js.
- Bootstrap: A popular CSS framework for building responsive and mobile-first websites.
- Font Awesome: A library of icons for web projects.
- UUID: A package for generating unique IDs.

## Deployment

The Note Taker Express application is deployed live using Heroku. You can access the live version of the application at 
(https://notetakerexpressheroku-5dafa878ab1f.herokuapp.com/).

## Live Demo

To see a live demonstration of the Note Taker Express application, click below. The video showcases the features and functionality of the application.


[Untitled_ Jan 6, 2024 8_42 PM.webm](https://github.com/HackDehZack/NoteTakerExpress/assets/140559436/d4ecea42-ff4a-41b9-8d24-df99a65802e4)


## Contributing

Contributions to the Note Taker Express project are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License]
