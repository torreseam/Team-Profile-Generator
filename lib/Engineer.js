const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.title= "Engineer";
        this.github = github;
    }
    getName = () => {
        return this.name
    }
    getRole = () => {
        return this.title
    }
    getGithub = () =>{
        return this.github
    }
}
module.exports = Engineer;