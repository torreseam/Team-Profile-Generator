const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// const writeHTML = require('./lib/generateHTML');
// const { writeFile, copyFile } = require('./utils/generate-site.js');

newEmp = [];

const startPrompt = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is your manager's name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is your manager's id?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is your manager's email?"
        },
        {
            type: "input",
            name: "managerOfficeNo",
            message: "What is your manager's office number?"
        },
    ]).then(function (answer) {
        const addManager = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.managerOfficeNo)
        // console.log(addManager)
        newEmp.push(addManager)
        // console.log(newEmp)
        chooseMemberType();
    })
}
const chooseMemberType = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "teamMemberType",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        },
    ]).then(function (answer) {
        if (answer.teamMemberType === "Intern") {
            InternPrompt();
        }
        else if (answer.teamMemberType === "Engineer") {
            EngineerPrompt();
        }
        else if (answer.teamMemberType === "I don't want to add any more team members") {
            renderHTML();
        }
    })
}

const InternPrompt = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "intName",
            message: "What is your intern's name?"
        },
        {
            type: "input",
            name: "intId",
            message: "What is your intern's id?"
        },
        {
            type: "input",
            name: "intEmail",
            message: "What is your intern's email?"
        },
        {
            type: "input",
            name: "intSchool",
            message: "Where does your intern attend school?"
        },
    ]).then(function (answer) {
        const addIntern = new Intern(answer.intName, answer.intId, answer.intEmail, answer.intSchool)
        // console.log(addIntern)
        newEmp.push(addIntern)
        // console.log(newEmp)
        chooseMemberType();
    })
}

const EngineerPrompt = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "engName",
            message: "What is your engineer's name?"
        },
        {
            type: "input",
            name: "engId",
            message: "What is your engineer's id?"
        },
        {
            type: "input",
            name: "engEmail",
            message: "What is your engineer's email?"
        },
        {
            type: "input",
            name: "engGithub",
            message: "What is your engineer's Github username?"
        },
    ]).then(function (answer) {
        const addEngineer = new Engineer(answer.engName, answer.engId, answer.engEmail, answer.engGithub)
        // console.log(addEngineer)
        newEmp.push(addEngineer)
        chooseMemberType();
    })
}

function renderHTML() {
    fs.writeFile(outputPath, render(newEmp), function (err, data) {
        if (err) {
            console.error(err)
            return
        }
    })
}

startPrompt();

