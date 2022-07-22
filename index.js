const inquirer = require("inquirer")
const fs = require("fs")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const genHtml = require("./util/generateHtml")
const team = []

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
    team.push(manager)
    userOptions()
    

})


]

const userOptions = () => [
    inquirer.prompt([
        {

            name: "roleChoice",
            message: "Pick a role.",
            type: "list",
            choices: ["Engineer", "Intern","Generate team page"]

        }
        


        
]).then(ans => {
    if (ans.roleChoice === "Engineer") {
        console.log(ans.roleChoice);
        newEngineer()
        
    } else if(ans.roleChoice === "Intern") {
        console.log(ans.roleChoice)
        newIntern()
        
    } else {
        console.log(ans.roleChoice)
        fs.writeFile("index.html", genHtml, err => {
            if(err){
                console.error("error")
            }
        })
    }

})


]

const newEngineer = () => [
    inquirer.prompt([
        {

            name: "engineerName",
            message: "What is your engineer's name?",
            type: "input"

        },
        {

            name: "engineerID",
            message: "What is your employee ID?",
            type: "input"

        },
        {

            name: "engineerEmail",
            message: "What is your email?",
            type: "input"

        },
        {

            name: "git",
            message: "What is your github username?",
            type: "input"

        }


        
]).then(ans => {
    const engineer = new Engineer(ans.engineerName, ans.engineerID, ans.engineerEmail, ans.git)
    team.push(engineer)
    userOptions()

})


]

const newIntern = () => [
    inquirer.prompt([
        {

            name: "internName",
            message: "What is your intern's name?",
            type: "input"

        },
        {

            name: "internID",
            message: "What is your intern ID?",
            type: "input"

        },
        {

            name: "internEmail",
            message: "What is your email?",
            type: "input"

        },
        {

            name: "school",
            message: "What school did you attend?",
            type: "input"

        }


        
]).then(ans => {
    const intern = new Intern(ans.internName, ans.internID, ans.internEmail, ans.school)
    team.push(intern)
    userOptions()

})


]













init();