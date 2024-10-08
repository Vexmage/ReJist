# ReJist

ReJist is a simple To-Do list application built using React and Redux for state management. This app allows users to add, toggle, delete tasks, and add a detailed "Jist" (description) for each to-do item. The state is managed via Redux, and Bootstrap is used for styling.

## Features

- Add new to-do items: Quickly add tasks to your to-do list.
- Mark to-dos as complete or incomplete: Easily toggle the completion status of each task.
- Delete to-dos: Remove tasks from the list when no longer needed.
- Jist feature:
    Each to-do item can have a detailed "Jist" (description) that provides more context about the task.
    Users can click the "Show Jist" button to view the detailed description.
    The "Edit Jist" button allows users to modify the description.
- Due dates for tasks: Optionally assign a due date to each task. Tasks with a past due date are marked as "Overdue."
- Manual sorting by due date: Use the "Sort by Due Date" button to rearrange tasks by their due date.
- Simple and responsive UI built with Bootstrap.

## Project Setup

To get started with this project, follow these steps:

### 1. **Clone the Repository**

First, clone the repository to your local machine:

```bash
git clone <your-repository-url>
cd ReJist

### 2. **Install Dependencies**

Run the following command to install all the necessary dependencies, including React, Redux, React-Redux, Redux Thunk, Bootstrap, and any other required packages:

bash

npm install

### 3. **Start the Development Server**

Once dependencies are installed, start the local development server with:

bash

npm start

This will launch the app on http://localhost:3000. Open the browser and go to this URL to view and interact with the app.

### 4. **Build for Production**

To create an optimized production build of the app, run the following command:

bash

npm run build

This will generate a build folder with all the necessary assets to deploy the app.

### 5. **Running Tests**

If you have tests for your app, run them using:

bash

npm run test

## Project Structure

    /src: The main directory containing the app's source code.
        /actions: Contains Redux action creators for managing the to-do state.
        /components: Contains React components like AddTodo, TodoList, and TodoItem.
        /reducers: Contains the Redux reducers for handling the application state.
        /store: Contains the Redux store configuration.
        /index.js: The entry point for the React app.
        /index.css: Custom CSS for styling the app.

## Dependencies

    React: A JavaScript library for building user interfaces.
    Redux: A predictable state container for JavaScript apps.
    React-Redux: Official bindings for React and Redux.
    Redux Thunk: Middleware for Redux to handle async actions.
    Bootstrap: A CSS framework for responsive design.

## Custom Styling

In addition to Bootstrap, custom styles are added in src/index.css. Feel free to modify the CSS file to further customize the look and feel of the app.
Notes

    Make sure you have npm and Node.js installed to run the project.
    If you encounter any issues during setup or development, check for any errors in the terminal or browser console.

## License

This project is licensed under the MIT License.
