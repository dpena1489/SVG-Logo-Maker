const inquirer = require('inquirer')
const { Circle, Triangle, Square } = require('./utils/Shapes.js')
const { writeFile } = require("fs/promises");
const path = require("path")
function promptUser() {
    return inquirer.prompt([
        {
            type: "list",
            name: "shape",
            messsage: "select desired shape",
            choices: ["circle", "triangle", "square"]
        },
        {
            type: "input",
            name: "text",
            messsage: "Enter three characters",

        },
        {
            type: "input",
            name: "textColor",
            messsage: "Enter text color",

        },
        {
            type: "input",
            name: "shapeColor",
            messsage: "Enter shape color",

        },

    ])
}
function buildLogo() {
    promptUser().then(answers => {
        console.log(answers)
        var svg = ""
        switch (answers.shape) {
            case "triangle":
                //envoke triangle constroctor
                const triangle = new Triangle(answers.text, answers.textColor, answers.shapeColor)
                svg = triangle.render()+triangle.renderShape()+triangle.renderText()+triangle.renderEnd()
                break;
            case "circle":
                //envoke circle constroctor
                const circle = new Circle(answers.text, answers.textColor, answers.shapeColor)
                svg = circle.render()+circle.renderShape()+circle.renderText()+circle.renderEnd()
                break;
            case "square":
                //envoke square constroctor
                const square = new Square(answers.text, answers.textColor, answers.shapeColor)
                svg = square.render()+square.renderShape()+square.renderText()+square.renderEnd()
                break;
            default:
                break;
        }
        writeFile(path.join(__dirname, "/dist/","logo.svg"),svg)
    })
}
buildLogo()