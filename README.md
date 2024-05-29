# Code Challenge

This project is a React application created with TypeScript and Redux, using Redux Toolkit. It is a starting point for developing robust and scalable front-end applications.

## Installation

Ensure you have Node.js (version 14 or higher) and npm installed. If you need to update Node.js, it is recommended to use nvm (Node Version Manager).

1. Install `nvm` (Node Version Manager)

   ```sh
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
   source ~/.nvm/nvm.sh

2. Install Node.js using nvm

nvm install 16
nvm use 16

3. Clone this repository to your local machine using:
git clone https://github.com/erick1798/code_challenge.git
cd code_challenge

4. Install the necessary dependencies using npm:

npm install


5. Run the project :

npm start

----------------------STRUCTURE-----------------------

Folder Structure
The project structure is as follows:

code_challenge/
├── node_modules/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── app/
│ │ ├── store.ts
│ ├── features/
│ │ ├── example/
│ │ │ ├── exampleSlice.ts
│ ├── components/
│ ├── App.tsx
│ ├── index.tsx
│ └── ...
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md

public/: Contains the public assets of the project.
src/: Contains the source code of the project.
store/: Contains the Redux store configuration.
features/: Contains Redux slices for different features.
components/: Contains React components.
App.tsx: The main app component.
index.tsx: The entry point of the application.





