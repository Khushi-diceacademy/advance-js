// console.log("hello");
// setTimeout(()=>{
//     console.log("goodbye!");
// })
// console.log('muje bhi de do');
// function hello(callback) {
//     console.log("hellloooo")
//     callback()
// }
// console.log("yess")
// function goodbye(){
//     console.log("goodbye")
// }
// hello(goodbye)

// function dish(callback, x, y) {
//   console.log("panner ki sabji bana do or achi si banana");
//   let result = x + y;
//   callback(result);
// }
// function serve() {
//   console.log("serving the dish");
// }
// dish(serve, 2, 3);

// function addTheNumber(callback, x, y) {
//   let result = x + y;
//   callback(result);
// //   console.log("kese ho ji");
// }
// function displayTheResult(params){
//     console.log("the sum of two",params)
// }
// addTheNumber(displayTheResult,5,6)
// addTheNumber(displayTheResult,15,16)

// function arrthefunc(callbackthefunc, arr) {
//   for (let i = 0; i < arr.length; i++) {
//     callbackthefunc(arr[i])
//   }
// }
// function displaythelist(items){
//     console.log('the element are',items)
// }
// let item = [1,2,35,566,7,7]
// arrthefunc(displaythelist,item)

// async function fetchtheData() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   let data = await response.json();
//   console.log(data);
// }
// fetchtheData();

// console.log("heyyy");
// setTimeout(() => {
//   console.log("byeee");
// //   callback fired
// });
// console.log("go went gone")

// async function Taskone() {
//   console.log("task one process");
//   return "Task 1 done";
// }
// async function Tasktwo() {
//   console.log("task two process");
//   return "Task 2 done";
// }
// async function runAllTask() {
// //   await Taskone();
// //   await Tasktwo();
//   const results = await Promise.all([Taskone(),Tasktwo()])
//   console.log(results)
//   console.log("all done");
// }

// runAllTask();

// function abcd() {
//   var a = 10;
// }
// // abcd();
// console.log(a)

// var age = 200;
// if(true){
//   var age =20;
//   console.log(age)
// }
// console.log(age)
