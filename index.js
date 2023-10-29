const fs = require('fs')
const inquirer = require('inquirer')
// import Shapes class from shapes.js
const Shapes = require('Shapes')
function init() {
const questions = [
    {
    type: 'input',
    message: 'Input logo text up to 3 characters.',
    name: 'text'
    },
    {
        type: 'input',
        message: 'Input text color.',
        name: 'colorText'
    },
    {
        type: 'input',
        message: 'Select a background shape.',
        choices: [
            "Square",
            "Triangle",
            "Cricle"
        ],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'Input shape color.',
        name: 'colorShape'
    },
];
inquirer.prompt(questions).then((answers) => {

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
`;
const filePath = 'index.html';
fs.writeFile(filePath, htmlContent, (err) => {
(err) ? console.error('Error writing to HTML file:', err) : console.log('HTML file has been written successfully.')
})
})
}

init();