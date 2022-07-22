const inquirer = require("inquirer")
const fs = require("fs")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")


const init = () => [
    inquirer.prompt([
        {

            name: "managerName",
            message: "What is your team manager name?",
            type: "input"

        },
        {

            name: "managerID",
            message: "What is your employee ID?",
            type: "input"

        },
        {

            name: "managerEmail",
            message: "What is your email?",
            type: "input"

        },
        {

            name: "managerOfficeNum",
            message: "What is your office number?",
            type: "input"

        }


        
]).then(ans => {
    const manager = new Manager(ans.managerName, ans.managerID, ans.managerEmail, ans.managerOfficeNum)
    console.log(manager)

})


]
init();