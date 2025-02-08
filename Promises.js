// // // // callback hell

// // // // tea making

// // // boilingWater(()=>{
// // //   sugarisAdded(()=>{
// // //     Addtealeaves(()=>{
// // //       served()
// // //     })
// // //   })
// // // })

// // // function boilingWater(callback) {
// // //   console.log("the water is boiling");
// // //   setTimeout(() => {
// // //     console.log("water is boiled");
// // //     callback()
// // //   }, 1000);
// // // }

// // // function sugarisAdded(callback){
// // //   console.log("the sugar is added")
// // //   setTimeout(()=>{
// // //     console.log("sugar is dissolved");
// // //     callback()
// // //   },2000)
// // // }
// // // function Addtealeaves(callback){
// // //   console.log("tealeaves is added");
// // //   setTimeout(()=>{
// // //     console.log("tea leaves are brewed");
// // //     callback()
// // //   },3000)
// // // }
// // // function served(){
// // // console.log("served the tea 🍵 enjoy it")
// // // }

// // // fetch

// // fetch("https://randomuser.me/api/")
// //   .then((raw) => {
// //     return raw.json();
// //   })
// //   .then((result) => {
// //     console.log(result);
// //   })
// //   .catch(() => {
// //     console.log("Error: something went wrong");
// //   });
// // console.log("hey");

// // // 6 api

// // function FetchTheAPI() {
// //   const URLS = [
// //     "https://jsonplaceholder.typicode.com/posts",
// //     "https://randomuser.me/api/",
// //     "https://dog.ceo/api/breeds/image/random",
// //     "https://api.thecatapi.com/v1/images/search",
// //     "https://api.adviceslip.com/advice",
// //   ];
// //   URLS.forEach((url) => {
// //     fetch(url)
// //       .then((raw) => {
// //         return raw.json();
// //       })
// //       .then((result) => {
// //         console.log(result);
// //       })
// //       .catch(() => {
// //         console.log("something is wrong");
// //       });
// //   });
// // }
// // FetchTheAPI();

// // Promises
// // let ekpromise = new Promise(function(resolve,reject){
// //   setTimeout(()=>{
// //     console.log("task taking time")
// //     resolve()
// //   },1400)
// // })
// // ekpromise.then(()=>{
// //   console.log("chal gya ho gya tera kaam")
// // })

// // new Promise(function(resolve,reject){
// //   setTimeout(()=>{
// //     console.log("task taking time")
// //     resolve()
// //   },1400)
// // })
// // .then(()=>{
// //   console.log("runnnnn")
// // })

// // let twopromise = new Promise(function (resolve, reject) {
// //   setTimeout(() => {
// //     console.log("here is the data of a user");
// //     resolve({ username: "khushi", age: 22, isdeveloper: true });
// //   }, 2000);
// // });

// // twopromise.then((detail) => {
// //   console.log(detail)
// //   // console.log(`the information the user is ${detail.username} ,${detail.age} and ${detail.isdeveloper}`);

// // })

// // let promisethree = new Promise(function (resolve, reject) {
// //   setTimeout(() => {
// //     let error = true;
// //     if (error === false) {
// //       console.log("this is resolved without any error");
// //       resolve({ username: "khushi", age: 22, isdeveloper: true });
// //     }
// //     else{
// //       console.log("Error:something went wrong");
// //       reject("404 error")
// //     }
// //   });
// // });
// // promisethree.then((user)=>{
// //   console.log(user)
// // })
// // .then(()=>{
// //   console.log("promise run successfully")
// // })
// // .catch((err)=>{
// //   console.log(err)
// // })
// // .finally(()=>{
// //   console.log("promise khtam hua")
// // })

// // axios('https://randomuser.me/api/').then((result)=>console.log(result.data.results[0]))
// // .catch(()=>console.log('error something went wrong'))

// // DRY -> Don't repeat yourself

// // make letter ->>>api promises

// // let letter = new Promise(function (resolve, reject) {
// //   fetch("https://randomuser.me/api/")
// //     .then((raw) => raw.json())
// //     .then((result) => {
// //       console.log(result.results[0]);
// //       if(result.results[0].gender === 'female'){
// //         resolve();
// //       }
// //       else{
// //         reject()
// //       }
// //     });
// // });
// // letter
// //   .then(() => {
// //     console.log("green : gender is female");
// //   })
// //   .catch(()=> {
// //     console.log("red : gender is male ");
// //   });

// // implicit function one parameter ()
// // const Promiseone = new Promise(function (resolve, reject) {
// //   let number = 2;
// //   console.log("these are the operations")
// //   resolve(number);
// // });
// // Promiseone.then((num) => num * 3)
// //   .then((elem) => elem + 5)
// //   .then((eve) => eve - 1)
// //   .then((final) => {
// //     console.log("result is given", final);
// //   })

// //   .catch(() => {
// //     console.log("error");
// //   });

// // 3 settime out promise 1000,2000,3000

// const promise1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("First Promise resolved");
//   }, 1000);
// });
// const promise2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Second Promise resolved");
//   }, 2000);
// });
// const promise3 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("third  Promise resolved");
//   }, 3000);
// });
// Promise.all([promise1,promise2,promise3]).then((results)=>{
//     console.log(results)
// })

// async function fetchData() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   const data = await response.json();
//   console.log(data);
// }

// fetchData();
