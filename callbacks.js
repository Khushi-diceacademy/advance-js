// // console.log("heyyy");
// // console.log(bye);
// // console.log("heeeeey")

// // async vs sync callbacks single threaded language

// // DOM
// // Async code

// // console.log("hyeee");
// // setTimeout(()=>{
// //     console.log("goodbye")
// // },2000)
// // console.log("yesss")

// // blocking code
// // non-blocking code

// // console.log("line one");

// // setTimeout(() => {
// //   console.log("line two");
// //   // it has fired the callback function
// // });
// // console.log("line three");

// // setInterval(()=>{
// //     console.log("chala")
// // },1000)

// // hello(goodbye);

// function hello(callback) {
//   console.log("hello");
//   callback();
// }
// function goodbye() {
//   console.log("goodbye");
// }
// // setTimeout(function () {
// //   console.log("time goes on");
// // }, 3000);
// function heaven(hell) {
//   console.log("Good Soul");
//   hell();
// }
// heaven(function hell() {
//   console.log("Bad Soul");
// });

// // sum(displayconsole,1,2)

// // function sum(callbackfunc,x,y){
// //     let result = x+y;
// //     callbackfunc(result);
// // }
// // function displayconsole(result){
// //     console.log('answer is',result);
// // }
// // sum(displayconsole, 10, 20);
// // function sum(callbackfunc, x, y) {
// //   let result = x + y;
// //   callbackfunc(result);
// // }
// // function displayconsole(result) {
// //   console.log("answer is result =", result);
// // }

// function processArray(arr, callbackthefunc) {
//   for (let i = 0; i < arr.length; i++) {
//     callbackthefunc(arr[i]);
//   }
// }
// function displaythedata(item) {
//   console.log("processing item list", item);
// }
// let items = [1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 8, 9, 10];
// processArray(items, displaythedata);



// function chef(foodReadyCallback) {
//   console.log("Chef: I'm cooking dinner...");
//   setTimeout(() => {
//     console.log("Chef: Dinner is ready!");
//     foodReadyCallback(); // Calling the callback function
  // }, 2000);
// }

// function eat() {
//   console.log("You: Eating the dinner now!");
// }

// // Pass the `eat` function as a callback to `chef`
// chef(eat);
