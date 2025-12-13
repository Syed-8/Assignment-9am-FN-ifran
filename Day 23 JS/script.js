// Task 1
const book = {
    title:"your fault",
    author:"mercedes ron",
    year: 2023
};

console.log("title:", book.title);
console.log("author:", book.author);
console.log("year:", book.year);

// Task 2

const book = {
    title:"your fault",
    author:"mercedes ron",
    year: 2023

getInfo: function() {
    console.log('${this.title} by ${this.author} published in (${this.year})');
}
};

book.getInfo();

// Task 3

Book object
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925
};

Destructuring
const { title, author } = book;

console.log(title); 
console.log(author);

// Task 4
 
class Mobile {
    constructor (brand, price) {
        this.brand = brand;
        this.price = price;
    }

getInfo() {
    return `${this.brand} costs ${this.price}`;
} 
}
const mobile1 = new Mobile("Apple:", 49500);
const mobile2 = new Mobile("Samsung:", 76500);

console.log(mobile1.getInfo());
console.log(mobile2.getInfo());

// Task 5

class Mobile {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
}
getInfo() {
    return `${this.brand} costs $${this.price}`;
}

discount(){
    this.price = this.price - (this.price * 0.10);
    return 'discount applied New price :$${this.price}'
}
}
const mobile1 = new Mobile("Apple", 49500);
console.log(mobile1.getInfo());
console.log(mobile1.discount());    
console.log(mobile1.getInfo());

//  Task 6

class user{
    constructor (name,email){
    this.name = name;
    this.email = email;
}
login(){
    return `${this.name} has logged in with email: ${this.email}`;
}
}
const user1 = new user("syed", "syed@345.com");
const user2 = new user("ahmed", "ahmed@765.com");

console.log(user1.login());
console.log(user2.login());   

// Task 7

class BankAccount {
    constructor(owner, balance = 0){
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount){
        if (amount > 0){
            this.balance += amount;
            return `Deposited $${amount}. New balance is $${this.balance}.`;
        } else {
            return 'Deposit amount must be positive.';
        }
    }

    withdraw(amount){
        if (amount > this.balance){
         return "insufficient funds.";
        }else  if (amount<= 0) {
            return 'withdraw amount must be positive.';
        }else {
            this.balance -= amount;
            return `Withdrew $${amount}. New balance is $${this.balance}.`;
        }   
    }
    getBalance(){
        return `Current balance is $${this.balance}`;
    }
}
    const account1 = new BankAccount("irfan", 1000);

    console.log(account1.getBalance());
    console.log(account1.deposit(500));
    console.log(account1.withdraw(200));
    console.log(account1.withdraw(2000));

// Task 9

const products = [
  { name: "Laptop", price: 800, category: "Electronics" },
  { name: "Phone", price: 600, category: "Electronics" },
  { name: "Shoes", price: 120, category: "Fashion" },
  { name: "Book", price: 20, category: "Education" }
];

for (const { name, price, category } of products) {
  console.log(`${name} (${category}) costs $${price}`);
}

// Task 10

