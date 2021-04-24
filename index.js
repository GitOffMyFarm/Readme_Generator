//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Generate = require('./utils/generateMarkdown');
//Questions to be prompted for later
const questions = [
{type:'input', message:'Project Title', name:'title'}, 
{type:'input', message:'Project Description', name:'description'}, 
{type:'input', message:'Installation Instructions', name:'installation'}, 
{type:'input', message:'Informaton on Projcet Usage', name:'usage'}, 
{type:'input', message:'Guidelines on Contributing to This Project', name:'contributing'}, 
{type:'input', message:'Test Instructions', name:'test'},
{type:'input', message:'Your Github Username', name:'github'},
{type: 'input', message:'Your Email', name:'email'},
{type: 'list', message:'Your License', name: 'license', choices: ['MIT License', 'GNU GPL v3', 'Apache License 2.0', 'Mozilla Public License 2.0', 'IBM Public License']}
];
//Writes new README file and adds it current folder
function writeToFile(fileName, data) {
    fs.writeFile(
        `${fileName}.md`, Generate.generateMarkdown(data),
(err) => err ? console.error(err) : console.log('Response Recorded!')
        )
}

//Function to initialize app
function init() {
        inquirer
  .prompt(questions)
  .then(data => {
    writeToFile('README', data);
  })
}

// Function call to initialize app
init();