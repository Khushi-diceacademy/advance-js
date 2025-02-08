// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("some task is performing")
//   }, 1000)
//   resolve()
// })

// promiseOne
//   .then(() => {
//     console.log("Promise Consumed")
//   })


// const promiseTwo = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve({ username: "khushi", age: 22, email: "khushi123@gmail.com" })
//   }, 2000)
// })
// promiseTwo
//   .then((details)=> {
//     console.log(details)
//     console.log(`Hey! these are the username: ${details.username}, age: ${details.age}, email: ${details.email}`);

//   })


// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = false;
//     if (error === true) {
//       resolve({ username: "khushi", position: "developer" })
//     }
//     else {
//       reject('Error:Something went wrong ')
//     }
//   }, 1500)
// })
// promiseFour
// .then((user)=>{
//   console.log(user)
// })
// .catch((error)=>{
//   console.log(error)
// })
// .finally(()=>{
//   console.log("Everything is fine")
// })
// console.log("hey")



// Fetch API => ye kisi aur url ya api ka data ko bulane ya fetch karne ke liye istemal hota h 


// fetch('https://randomuser.me/api/')
// .then((raw)=>{
//  return raw.json()
// })
// .then((result)=>{
//   console.log('data is fetched',result)
// })
// .catch((err)=>{
//   console.error("something is very wrong",err)
// })

// function fetchtheDate(){
//   const Urls = [
//     'https://jsonplaceholder.typicode.com/posts',
//     'https://randomuser.me/api/',
//     'https://dog.ceo/api/breeds/image/random',
//     'https://api.thecatapi.com/v1/images/search',
//     'https://api.adviceslip.com/advice'
//   ];
// Urls.forEach((urls)=>{
//   fetch(urls)
//   .then(res=>res.json())
//   .then((result)=>{
//     console.log(result)
//   })
//   .catch((err)=>{
//     console.log(err)
//   })
// })
// }
// fetchtheDate()


// -----------------------------------------------------------




