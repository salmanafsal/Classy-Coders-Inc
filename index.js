const { Employee } = require("./classes/Employee")
const { Manager } = require("./classes/Manager")
const { SalesPerson } = require("./classes/SalesPerson")
const { SoftwareEngineer } = require("./classes/SoftwareEngineer")

// Run and debug your code here

const jenna = new Manager("Jenna", "Head of Engineers", 120, "Software Engineering", 10);
const programmer = new SoftwareEngineer("Becca", "Senior Software Engineer", 100, ["JavaScript", "Java", "Python"]);
const malik = new SalesPerson("Malik", "Enterprise Sale Associate", 900, ["Vine", "MySpace", "Shutterfly"])

let data = Employee.getEmployees(); // [ Manager { }, SoftwareEngineer { }, SalesPerson { }]
let sal = Employee.getTotalSalary(); // 310000

console.log(data, sal);
module.exports = {
    Employee,
    Manager,
    SalesPerson,
    SoftwareEngineer
}
