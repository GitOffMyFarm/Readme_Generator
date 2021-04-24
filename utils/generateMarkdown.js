//Function that returns a license badge based on which license is passed in, if there is no license it returns an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT License':
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'GNU GPL v3':
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'Apache License 2.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'Mozilla Public License 2.0':
      licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'IBM Public License':
      licenseBadge = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
      break;
    case 'None':
      licenseBadge = '';
      break;
    }

  return licenseBadge
};

//Function that returns the license link, if there is no license it returns an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT License':
      licenseLink = 'https://opensource.org/licenses/MIT';
      break;
    case 'GNU GPL v3':
      licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'Apache License 2.0':
      licenseLink = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'Mozilla Public License 2.0':
      licenseLink = 'https://opensource.org/licenses/MPL-2.0';
      break;
    case 'IBM Public License':
      licenseLink = 'https://opensource.org/licenses/IPL-1.0';
      break;
    case 'None':
      licenseLink = '';
      break;
    }

  return licenseLink
}

//Function that returns the license section of README, if there is no license it returns an empty string
function renderLicenseSection(license) {
  return `${renderLicenseBadge(license)}:${renderLicenseLink(license)}`
}

// Function that generates markdown for README
function generateMarkdown(data) {
  const {title, description, installation, usage, contributing, test, github, email, license} = data;
  return  `# ${title}


  ## Description
  
  ${description}
  
  ## Table of Contents
  -[License](#license)  
  -[Installation](#installation)  
  -[Usage](#usage)  
  -[Constributing Guidelines](#contributing)  
  -[Test Instructions](#tests)  
  -[Questions](#questions)  
  -[License](#license)  
  
  ##License

  ${renderLicenseSection(license)}

  ## Installation
  
  ${installation}
  
  
  ## Usage
  
  ${usage}
  
  ## Contributing Guidelines
  
  Here are some guidelines if you want to contribute to the project:
  
  ${contributing}
  
  ## Test Instructions
  
  ${test}
  
  ## Questions?
  
  [Find me on Github](https://github.com/${github})
  or Email me at ${email}
 `;
}
//exports functions
module.exports = {renderLicenseBadge, renderLicenseLink, renderLicenseSection, generateMarkdown};
