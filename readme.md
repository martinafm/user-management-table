# User Management Table with Advanced Filtering

This project is a React application that displays a user management table, fetching user data from the JSONPlaceholder API. It allows users to filter the table based on specific columns (name, username, email, and phone) with real-time updates. The project uses **Redux Toolkit** to manage application state and **TypeScript** for type safety. Additionally, **Tailwind CSS** is used for styling, providing a clean and responsive user interface.

**Redux Toolkit** Playground - explanation

In this project, **Redux Toolkit** was used primarily because it was a requirement of the recruitment task, but it's not necessarily the best fit for that project with relatively simple state management. In smaller projects, such as this one, state could easily be managed with React's built-in state hooks (useState, useReducer, useContext) or Context API. However, since Redux Toolkit was a requirement, I approached this as an opportunity to practice state management techniques while keeping in mind that it might not be the most efficient solution for this specific case.

## Live Demo

- View live: https://martinafm-user-management-table-one.vercel.app

## Features

- **User Management Table**: The table displays user information fetched from the JSONPlaceholder API, including `name`, `username`, `email`, and `phone`.
- **Advanced Filtering**: Search input field allow real-time filtering of the table, dynamically updating results based on user input.
- **State Management with Redux Toolkit**: The entire state of the application, including user data and filter input, is managed using Redux Toolkit, enabling predictable state transitions.
- **TypeScript**: Type safety to reduce runtime errors and improve development efficiency.
- **Tailwind CSS for Styling**: The project is styled using Tailwind CSS, creating a responsive and user-friendly interface.

## Technologies Used

- **React**: For building the user interface and handling component logic.
- **Redux Toolkit**: For state management, providing a streamlined approach to managing the application's state.
- **TypeScript**: Enforcing static types and reducing potential runtime errors.
- **Tailwind CSS**: For styling and creating a clean, responsive UI.
- **JSONPlaceholder API**: Mock API used to fetch user data.

## Setup and Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/martinafm/user-management-table.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Visit the application in your browser at `http://localhost:3000`.

## Challenges

The most challenging aspect of this project for me was handling the state management using **Redux Toolkit**. Integrating TypeScript with Redux also posed additional challenges, as it required careful attention to type definitions and action payloads.

This project was created as a recruitment task.
