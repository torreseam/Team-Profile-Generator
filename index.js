const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
// const render = require("./")

const render = require("./lib/htmlRenderer");
const output_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(output_DIR, "team.html");
console.log(Manager)

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
        console.log(answer)
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
            choices: ["Engineer", "Intern", "Employee", "I don't want to add any more team members"]
        },
    ]).then(function (answer) {
        if (answer.teamMemberType === "Intern") {
            InternPrompt();
        }
        else if (answer.teamMemberType === "Engineer") {
            EngineerPrompt();
        }
        else if (answer.teamMemberType === "Employee") {
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
            name: "name",
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
// const EmployeePrompt = () => {
//     return inquirer.prompt([
//         {
//             type: "input",
//             name: "engName",
//             message: "What is the employeee name?"
//         },
//         {
//             type: "input",
//             name: "engId",
//             message: "What is the employee id?"
//         },
//         {
//             type: "input",
//             name: "engEmail",
//             message: "What is the employee email?"
//         },
//         {
//             type: "input",
//             name: "managerOfficeNo",
//             message: "What is the employee telephone number?"
//         },
//     ]).then(function (answer) {
//         const addEmployee = new Employee(answer.engName, answer.engId, answer.engEmail, answer.engGithub)
//         // console.log(addEmployee)
//         newEmp.push(addEmployee)
//         chooseMemberType();
//     })
// }

function finishPrompt() {
    console.log("Page created! Check out html in output directory to see it!")
}

function renderHTML() {
    // fs.writeFile(outpu, render(newEmp),"utf8", err => {
    fs.writeFile(outputPath, render(newEmp), function ( err, data) {
        if (err) throw new Error(err);
        console.log("Page created! Check out html in output directory to see it!")
        });
}

startPrompt();