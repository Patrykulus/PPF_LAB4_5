// Definicja klasy
class User {
    constructor(name){
        this.name = name;
    }

    sayHello(){
        return `${this.name} powiedz cześć!`;
    }
 }

 //wykorzystanie
 let user = new User("Patryk");
 console.log(user.sayHello());

 class Employee extends User {
     constructor(name, salary){
         //wywołanie konstruktora klasy User
         super(name);
         // dodanie nowej właściowści klasy
         this.salary= salary;
     }

     //nowa metoda klasy
     raiseSalary(){
         this.salary += 1000;
         return this.salary;
     }
 }

 //Wykorzystanie
 let employee= new Employee ("Jan", 1999);
 console.log(employee);
 employee.raiseSalary();
 console.log(employee);


