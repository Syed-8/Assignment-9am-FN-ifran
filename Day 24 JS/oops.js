// Task 1
class product {
    constructor (name, price)  {
    this.name=name;
    this.price=price;
    }

discountedPrice(discountprecent) {
    return this.price - (this.price * discountprecent/ 100);
}
}

const Product = new product("Laptop", 76200);

console.log("product Name:", product.name);
console.log("discount Price:", product.discountedPrice(10));

// Task 2
const user = {
    login:function () {
        console.log("User logged in");
    },

    logout:function () {
        console.log("User logged out");
    }   
}
user.login();
user.logout();

//Task 3
 class student{
    constructor(name,age,course){
        this.name=name;
        this.age=age;
        this.course=course;
    }

    display(){
        console.log("Name:",this.name);
        console.log("Age:",this.age);
        console.log("Course:",this.course);
    }
 }

    const s1=new student("John",22,"MERN");
    const s2=new student("Doe",24,"MERN");
    const s3=new student("Smith",23,"MERN");

    s1.display();
    s2.display();
    s3.display();   
    
//Task 4
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    
 displayInfo() {
        console.log("Employee Name:", this.name);
        console.log("Employee Salary:", this.salary);
    }
 }
    const emp1=new Employee("Alice",60000);
    const emp2=new Employee("Bob",55000);

    emp1.displayInfo();
    emp2.displayInfo();

 // Task 5
  class Employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
    }
    displayInfo(){
        console.log("Employee Name:",this.name);
        console.log("Employee Salary:",this.salary);
    }
  }
  class Manager extends Employee{
    constructor(name,salary,department){
        super (name,salary);
        this.department=department;
    }

    displayInfo(){
        super.displayInfo();
        console.log("Department:",this.department);
    }
}
    const mgr1 = new Manager ("Anto", 80000, "Sales");

    mgr1.displayInfo();