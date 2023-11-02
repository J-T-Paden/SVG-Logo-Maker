// import fs 
const fs = require('fs')
// import npm inquirer
const inquirer = require('inquirer')
// import shape classes
const {Square, Circle, Triangle} = require('./lib/shapes')
// function to initialize the app
function init() {
// create questions array using npm inquirer prompts
const questions = [
    {
    type: 'input',
    message: 'Input logo text up to 3 characters.',
    name: 'text',
    validate: (input) => {
// limit logo to 3 characters
if (input.length >3) {
    return "Must be 3 or less characters."
} else {
    return true
}
    }
    },
    {
        type: 'input',
        message: 'Input text color.',
        name: 'colorText'
    },
    {
        type: 'list',
        message: 'Select a background shape.',
        choices: [
            "Square",
            "Triangle",
            "Circle"
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
// set svgContent to empty string to be updated after running application
var svgContent = ' '
    if (answers.shape === 'Circle') {
        const circle = new Circle(answers.colorText, answers.text, answers.colorShape)
        svgContent = circle.renderStart() + circle.renderShape() + circle.renderText() + circle.renderEnd()
    }
    else if (answers.shape === 'Square') {
        const square = new Square(answers.colorText, answers.text, answers.colorShape)
        svgContent = square.renderStart() + square.renderShape() + square.renderText() + square.renderEnd()
    }
    else {
        const triangle = new Triangle(answers.colorText, answers.text, answers.colorShape)
        svgContent = triangle.renderStart() + triangle.renderShape() + triangle.renderText() + triangle.renderEnd()
    }

// create variable with path to SVG file
const filePath = 'logo.svg';
// use fs method writeFile to write to logo.svg using svgContent string for input
fs.writeFile(filePath, svgContent, (err) => {
// use ternary operator to create if else statement for writing error callback function
(err) ? console.error('Error writing to SVG file:', err) : console.log('SVG file has been written successfully.')
})
})
}
// calling initialize function
init();