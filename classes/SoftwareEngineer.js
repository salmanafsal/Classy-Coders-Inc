const {Employee} = require('./Employee');
class SoftwareEngineer extends Employee{

#programmingLanguages=[];

constructor(name, position, salary, programminglanguages)
{
super(name,position,salary);
    for (let i=0;i<programminglanguages.length;i++)
    {
        this.#programmingLanguages.push(programminglanguages[i]);

    }

}
getProgrammingLanguages()
{
return this.#programmingLanguages;
}
setProgrammingLanguages(language)
{
  this.#programmingLanguages.push(language);  
}
    
}

module.exports = {
    SoftwareEngineer,
}