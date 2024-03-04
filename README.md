SVG Logo Generator License: MIT
Description
The purpose of this SVG logo generator application is to allow developers to easily create their own personalized logos to use in their professional portfolio. This is a command-line application that takes in user input using the Inquirer package and creates a SVG file using the fs (file system) module from node.js. The repository also contains a test file with three unit tests, which are tested using Jest.

Table of Contents
Installation

Usage

License

Contributing

Tests

Questions

Walk-through video

Installation
To use this application, install node.js and the Inquirer package. To test this application, install Jest.

Usage
To use this SVG logo generator, open your integrated terminal, navigate to the directory where the code is stored, and invoke the application by running "node index.js". When the prompts appear, type in your initials, desired text color, and desired logo color and press the enter key. To select a shape, use the up and down arrow keys to navigate through the choices and press the enter key when your desired shape choice is highlighted. Once you have responded to all of the prompts, a confirmation message will be logged to the terminal and your new logo.svg will appear in your directory. To view your new logo, click and drag the logo.svg file and drop it into a browser page.

License
This application is covered under an MIT license

Contributing
N/A

Tests
The tests for this repository can be found in the shapes.test.js file located in the lib folder. There are three tests, one for each shape, that check that the shapes' render methods execute correctly. To run the tests, use 'npm run test' in the terminal.

Questions
Feel free to reach out to me with any additional questions!

GitHub: elisestankus

Walk-through video
Click here to view a walk-through video of the application.
