// // // // class MobilePhone {
// // // //   #batteryLevel = 100;
// // // //   constructor(brand, model) {
// // // //     this.brand = brand;
// // // //     this.model = model;
// // // //   }
// // // //   usePhone(hours) {
// // // //     if (hours > 0 && this.#batteryLevel > 0) {
// // // //       this.#batteryLevel = this.#batteryLevel - hours * 10;
// // // //       //1 hour -> 10%
// // // //       console.log(`${this.brand} ${this.model} used for ${hours} hours`);
// // // //     } else {
// // // //       console.log(`Invalid usage or battery drained`);
// // // //     }
// // // //     this.#batteryStatus();
// // // //     this.#phoneLook()
// // // //   }
// // // //   #batteryStatus() {
// // // //     console.log(`Battery level is ${this.#batteryLevel}%`);
// // // //   }
// // // //   #phoneLook(){
// // // //     console.log('Its is black in backside and with matte finish')
// // // //   }
// // // // }
// // // // const phoneone = new MobilePhone('samsung','galaxy J7');
// // // // phoneone.usePhone(3)

// // // // // Real-Life Example: A Coffee Machine
// // // // // Imagine a coffee machine. You press a button to get coffee, but you don’t need to know how the machine works inside (heating water, mixing coffee, etc.). The machine hides its internal processes (encapsulation) and only gives you coffee when you interact with it using its buttons

// // // function CreateUser(name, surname, age) {
// // //   const user = {
// // //     name,
// // //     surname,
// // //     age,
// // //     start() {
// // //       return `${this.name} ${this.surname} and age is ${this.age}`;
// // //     },
// // //   };
// // //   return user;
// // // }
// // // let user1 = CreateUser("khushi", "gupta", 22);
// // // let user2 = CreateUser("ram", "mishra", 24);
// // // console.log(user1.start());
// // // // console.log(user2.start());

// // // let arr = [1, 2, 4, 4, 5, 5, 6];
// // // let arr1 = arr.map((item) =>{
// // //   return item*9
// // // });
// // // console.log(arr1)

// // // function func(name,surname,age){
// // //   this.name = name;
// // //   this.age = age;
// // //   this.surname = surname;
// // //   this.sayhello() =  function(){
// // //     console.log(`hello ${this.name} ${this.surname} and the age is ${this.age} `)
// // //   }
// // // }

// // class Person {
// //   constructor(name, age, surname) {
// //     this.naam = name;
// //     this.umar = age;
// //     this.surname = surname;
// //   }
// //   displayinfo() {
// //     console.log(`the name is ${this.naam} and age is ${this.umar}`);
// //   }

// //   personinfo() {
// //     console.log(`the person  is ${this.surname}`);
// //   }
// // }

// // const person1 = new Person("khushi", 34);
// // const person2 = new Person("khushi", 33, "isah");
// // person1.displayinfo();
// // person2.personinfo();

// // // 1. make a class of car pass constructor make, model and year and displayDetails
// // // 2.you're building a Library Management System, and you want to manage books using classes.
// // // expected output
// // // Title: The Alchemist
// // // Author: Paulo Coelho
// // // Genre: Fiction
// // // Title: JavaScript: The Good Parts
// // // Author: Douglas Crockford
// // // Genre: Programming

// // class Books {
// //   constructor(title, author, genre) {
// //     this.title = title;
// //     this.author = author;
// //     this.genre = genre;
// //   }

// //   displayinfobook() {
// //     console.log(
// //       `Title: ${this.title} , Author: ${this.author} and  Genre : ${this.genre}`
// //     );
// //   }
// // }

// // const book1 = new Books(" The Alchemist", " Paulo Coelho", "Fiction");
// // book1.displayinfobook();

// // class Car {
// //   constructor(make, model, year) {
// //     this.model = model;
// //     this.year = year;
// //     this.make = make;
// //   }
// //   info() {
// //     console.log(`this car model is ${this.model} and year is ${this.year } and make in ${this.make}`);

// //   }

// // }

// // class Person{
// //     constructor(name,age){
// //         this.name = name;
// //         this.age = age;
// //     }

// //     info(){
// //         console.log("these are the details")
// //     }
// // }

// // class Student extends Person{
// //     constructor(name,age,rollno){
// //         super(name,age)
// //         this.rollno = rollno
// //     }

// //     displayinfo(){
// //         console.log(`the name is ${this.name} and the age is ${this.age} and the roll no is ${this.rollno}`)
// //     }
// // }

// // const person1 = new Student("harshit",25,"45A");
// // person1.displayinfo()
// // person1.info()

// // greatgrandparent -> gold property ,grandparent ->  parent -> child
// // class Car {
// //   constructor(brand, model) {
// //     this.brand = brand;
// //     this.model = model;
// //   }
// //   drive() {
// //     console.log(`${this.brand} and ${this.model}`);
// //   }
// //   #startengine() {
// //     console.log("start engine");
// //   }

// //   info(){
// //     this.#startengine()
// //   }
// // }
// // const car1 = new Car("BMW","GT")
// // car1.drive()
// // car1.info()

// // class Phonepe {
// //     constructor(user) {
// //       this.user = user;
// //     }
// //     #authentication(){
// //       console.log("checking the user");
// //       return true;
// //     }
// //     #processPayment(amount){
// //       console.log(`Processing payment of ${amount}...`);
// //     }
// //     #logTansaction(amount){
// //       console.log(`Transaction of ${amount} logged.`);
// //     }

// //     makePayment(amount){
// //       if(this.#authentication()){
// //         this.#processPayment(amount);
// //         this.#logTansaction(amount);
// //         console.log('Payment successful');
// //       }
// //       else {
// //         console.log('Authentication failed');
// //       }
// //     }
// //   }
// //   const newuser = new Phonepe("riya")
// //   newuser.makePayment(5000)

// // localstorage

// // localStorage.setItem("username","john")

// // let user = localStorage.getItem("username");
// // console.log(user);

// // localStorage.removeItem("username")

// // sessionStorage.setItem("email","kg830@gmail.com")

// class Person {
//     doAction() {
//       console.log("he/she is doing something");
//     }
//   }
//   class Teacher extends Person {
//     doAction() {
//       console.log('Teacher is teaching');

//     }
//   }
//   class Doctor extends Person {
//     doAction() {
//       console.log('Doctor is treating patients');

//     }
//   }
//   class Developer extends Person {
//     doAction() {
//       console.log('Developer towards tech');

//     }
//   }

//   let person = [new Teacher(), new Doctor(), new Developer(), new Person()];
//   person.forEach((elem)=>{
//     elem.doAction()
//   })

class MobilePhone {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.batteryLevel = 100;
    // private key
  }
  usePhone(hours) {
    if (hours > 0 && this.batteryLevel > 0) {

      this.batteryLevel -= hours*10;
      console.log(`${this.brand} ${this.model} used for ${hours} hours`);
    }
    else{
      console.log("invalid usage or battery drained ")
    }
    this.#batteryStatus()
  }
  #batteryStatus(){
    console.log(`Batter level is ${this.batteryLevel}%`)
  }
}
const myPhone = new MobilePhone('Samsung', 'Galaxy S21');
myPhone.usePhone(5.8); 