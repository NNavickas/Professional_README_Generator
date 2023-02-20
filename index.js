const fs = require("fs");
const inquirer = require("inquirer");
const {
  generateBadges,
  generateMarkdown,
} = require("./utils/generateMarkdown");

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
      message:
        "What does the user need to install to use the application? (use the backticks to present properly)",
      name: "install",
    },
    {
      type: "input",
      message:
        "How does a user start your app? (use the backticks to present properly)",
      name: "usage",
    },
    {
      type: "list",
      message: "Which license applies to your project?",
      name: "license",
      choices: [
        "The MIT License",
        "Apache 2.0",
        "Boost 1.0",
        "BSD 2-Clause License",
        "BSD 3-Clause License",
        "Eclipse Public License 1.0",
        "The Hippocratic License 2.1",
        "The Hippocratic License 3.0",
        "IBM Public License Version 1.0",
        "ISC License (ISC)",
        "Mozilla Public License 2.0",
        "The Perl License",
      ],
    },
    {
      type: "input",
      message:
        "What should the user run in order to test the application? (use the backticks to present properly)",
      name: "testIt",
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
    const badgeMarkdown = generateBadges(response.license);
    const usersInfo = generateMarkdown(response, badgeMarkdown);

    const markdown = `${usersInfo}`;

    fs.writeFile("GENERATEDREADME.md", markdown, (err) =>
      err ? console.error(err) : console.log("Your README has been generated")
    );
  });
