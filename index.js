const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user

inquirer
    .prompt([
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Enter a description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "Enter a description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "What does the user need to install to use the application?",
    name: "install",
  },
  {
    type: "list",
    message: "Which license applies to your project?",
    name: "license",
    choices: [
      "The MIT License",
      "Apache 2.0",
      "Boost",
      "BSD 2-Clause License",
      "BSD 3-Clause License",
      "Eclipse Public License 1.0",
      "The Hippocratic License 2.1",
      "The Hippocratic License 3.0",
      "IBM Public License Version 1.0",
      "ISC License (ISC)",
      "Mozilla Public License 2.0",
      "The Perl License"
    ],
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "Provide the link to your GitHub profile.",
    name: "github",
  },
])

// function to write README file
.then((response) => {

    console.log(response.title)

    const usersInfo = `
# Project Title: ${response.title}

## Project Description: ${response.description}

## Table of Contents: 
- [Installation](#Installation)
- [Usage](#Usage)
- [Licensing](#Licensing)
- [Contributions](#How_to_Contribute)
- [Tests](#Testing)
- [Questions](#Questions)

## Installation

To install the necessary dependencies, run the following command:
${response.install}

## Usage

You can run this application using command node index.js

## License

This application is under license of ${response.license}

## Contributing to this Repo

In order to contribute, please fork and create a pull request.

## Testing

To test, run the following command:


## Questions

If you have any questions about the repo, open an issue or contact me directly at ${response.email}. You can find more of my work at [${response.github}]
`;

    fs.writeFile('README.md', usersInfo, (err) =>
        err ? console.error(err) : console.log('User\'s info logged!')
    )
});

// function writeToFile(fileName, data) {}

// // function to initialize program
// function init() {}

// // function call to initialize program
// init();
