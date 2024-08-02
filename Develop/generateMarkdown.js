// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case 'MIT':
            return 'https://img.shields.io/badge/license-MIT-blue';
        case 'none':
            return '';
        default: 
            return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case 'MIT':
            return '[License: MIT]https://opensource.org/license/MIT';
        case 'none':
            return '';
        default:
            return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'none') {
        return '';
    } else {
        return `## License
                This project is licensed under the ${license} license.
                For more details, see ${renderLicenseLink(license)}.`;
    }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

${renderLicenseBadge(data.license) ? `![License](${renderLicenseBadge(data.license)})` : ''}

## Description
    ${data.description}

## Table of Contents
-[Description](#description)

-[Installation](#installation)

-[Usage](#usage)

-[Credits](#credits)

-[Tests](#tets)

-[Contact](#contact)



## Installation
${data.installation}

## Usage

${data.usage}

## Credits

${data.credit}

## Tests

${data.tests}

## Contact

[${data['GitHub-username']}](https://github.com/${data['GitHub-username']})
Email ${data.name} at ${data.email}
`;
}

module.exports = generateMarkdown;

