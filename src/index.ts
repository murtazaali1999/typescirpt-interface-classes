import { Car } from "./interface";

class Invoice {
  invoice_id: number;
  invoice_type: string;
  amount: number;

  constructor(invoice_id: number, invoice_type: string, amount: number) {
    this.invoice_id = invoice_id;
    this.invoice_type = invoice_type;
    this.amount = amount;
  }
}

class Utility extends Invoice {
  utility_extension: boolean;

  constructor(
    invoice_id: number,
    invoice_type: string,
    amount: number,
    utility_extension: boolean
  ) {
    super(invoice_id, invoice_type, amount);
    this.utility_extension = utility_extension;
  }
}

class Electricity extends Invoice {
  electrical_extension: boolean;

  constructor(
    invoice_id: number,
    invoice_type: string,
    amount: number,
    electrical_extension: boolean
  ) {
    super(invoice_id, invoice_type, amount);
    this.electrical_extension = electrical_extension;
  }
}

const invoice1: Invoice = new Invoice(1, "Electricity", 100);
const invoice2: Invoice = new Invoice(2, "Utility", 200);
console.log(invoice1, invoice2);

const electricity1: Electricity = new Electricity(
  invoice1.invoice_id,
  invoice1.invoice_type,
  invoice1.amount,
  true
);

const electricity2: Electricity = new Electricity(
  invoice2.invoice_id,
  invoice2.invoice_type,
  invoice2.amount,
  true
);
console.log(electricity1, electricity2);

let invoices: Invoice[] = [];
invoices.push(invoice1);
invoices.push(invoice2);

//Interfaces

interface Billing {
  amount: number;
  setBilling(amount: number): void;
  getBilling(): number;
}

const bill1: Billing = {
  amount: 5000,
  setBilling: (amount: number) => {
    console.log(amount);
  },
  getBilling: () => {
    return 333;
  },
};

console.log("Bill Interface Object==>", bill1);

class Bills implements Billing {
  amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }

  setBilling(amount: number) {
    this.amount = amount;
  }

  getBilling(): number {
    return 1;
  }
}

const bill2: Bills = new Bills(5533);
console.log("get Bill ==>", bill2.getBilling());

console.log("Bill Interface Object2 ==>", bill2);

class BMW implements Car {
  display(): void {
    console.log("This is a BMW Interface Implementation");
  }
}

new BMW().display();
