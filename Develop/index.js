// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
// const { type } = require('os');

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: "What is the title of the project?",
        },
        {
            type: 'input',
            name: 'description',
            message: "Provide a short description of the project:",
        },
        {
            type: 'input',
            name: 'installation',
            message: "What are the steps to install the project?",
        },
        {
            type: 'input',
            name: 'usage',
            message: "Provide instructions and examples of use:",
        },
        {
            type: 'input',
            name: 'credits',
            message: "List your collaborators:",
        },
        {
            type: 'input',
            name: 'tests',
            message: "Add instructions for testing:",
        },
        {
            type: 'list',
            name: 'license',
            message: "Choose a license:",
            choices: ["none", "MIT"]
        },
        {
            type: 'input',
            name: 'name',
            message: "What is your name?",
        },
        {
            type: 'input',
            name: 'GitHub-username',
            message: "Enter your GitHub username:",
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email:',
        },
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing file 🫤', err);
        } else {
            console.log('File created succesfully! 😊');
        }
    });
}


// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const markdownContent = generateMarkdown(answers);
        writeToFile('README.md', markdownContent);
    });
}



// Function call to initialize app
init();
