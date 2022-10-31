"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Invoice {
    constructor(invoice_id, invoice_type, amount) {
        this.invoice_id = invoice_id;
        this.invoice_type = invoice_type;
        this.amount = amount;
    }
}
class Utility extends Invoice {
    constructor(invoice_id, invoice_type, amount, utility_extension) {
        super(invoice_id, invoice_type, amount);
        this.utility_extension = utility_extension;
    }
}
class Electricity extends Invoice {
    constructor(invoice_id, invoice_type, amount, electrical_extension) {
        super(invoice_id, invoice_type, amount);
        this.electrical_extension = electrical_extension;
    }
}
const invoice1 = new Invoice(1, "Electricity", 100);
const invoice2 = new Invoice(2, "Utility", 200);
console.log(invoice1, invoice2);
const electricity1 = new Electricity(invoice1.invoice_id, invoice1.invoice_type, invoice1.amount, true);
const electricity2 = new Electricity(invoice2.invoice_id, invoice2.invoice_type, invoice2.amount, true);
console.log(electricity1, electricity2);
let invoices = [];
invoices.push(invoice1);
invoices.push(invoice2);
const bill1 = {
    amount: 5000,
    setBilling: (amount) => {
        console.log(amount);
    },
    getBilling: () => {
        return 333;
    },
};
console.log("Bill Interface Object==>", bill1);
class Bills {
    constructor(amount) {
        this.amount = amount;
    }
    setBilling(amount) {
        this.amount = amount;
    }
    getBilling() {
        return 1;
    }
}
const bill2 = new Bills(5533);
console.log("get Bill ==>", bill2.getBilling());
console.log("Bill Interface Object2 ==>", bill2);
class BMW {
    display() {
        console.log("This is a BMW Interface Implementation");
    }
}
new BMW().display();
