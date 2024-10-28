class Employee {
#salary;
#isHired = true;
static #allEmployees = [];
constructor(name, position, salary)
{
this.name = name;
this.position = position;
this.#salary = salary;
Employee.#allEmployees.push(this);

}

getSalary()
{
return this.#salary;

}

setSalary(amount)
{
this.#salary = amount;
    
}

getStatus()
{

    return this.#isHired;

}

setStatus(command)
{

    if(command==='hire')
    {
        this.#isHired = true;
    }
    else if (command === 'fire')
    {

        this.#isHired = false;
    }
    
}

static getEmployees()
{

    return Employee.#allEmployees;
}

static getTotalSalary()
{
    let sal=0;
    for (let i=0;i<Employee.#allEmployees.length;i++)
    {

        sal = sal+ Employee.#allEmployees[i].#salary;

    }

    return sal;
}

    
}

module.exports = {Employee};
