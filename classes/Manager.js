const {Employee} = require('./Employee');
class Manager extends Employee {
    #employeesManaged= [];
    constructor(name, position, salary,department, managed)
    {
    super(name, position, salary);
    this.department = department;
    }

setEmployeesManaged(employee) {
    if (employee instanceof Employee) {
        this.#employeesManaged.push(employee);
    } else {
        throw new Error("Only instances of Employee can be managed.");
    }
}

getEmployeesManaged()
{

    return this.#employeesManaged;
}

    
}

module.exports = {
    Manager,
}