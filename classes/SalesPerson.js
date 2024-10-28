const {Employee} = require('./Employee');

class SalesPerson extends Employee {

    #totalSales;
    constructor(name, position, salary, clientslist)
    {

        super(name,position,salary);
        this.clients = clientslist;

        this.#totalSales = 0;

    }

    getSalesNumber()
    {
        return this.#totalSales;
    }

    makeSale(amount)
    {

        this.#totalSales = this.#totalSales + amount;
    }

    
}

module.exports = {
    SalesPerson,
}