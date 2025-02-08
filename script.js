// hello(goodbye)

// function hello(callback) {
//     console.log("hello")
//     callback()
// }
// function goodbye() {
//   console.log("goodbye")
// }

// sum(displayConsole,1,2)

// function sum(callback, x, y) {
//   let result = x + y;
//   callback(result)
// }
// function displayConsole(result){
//   console.log(result);
// }

// console.log('requesting data from server');
// function fetchdatafromServer(callback){
//   setTimeout(()=>{
//     let data = 'server se data aya';
//     callback(data)
//   },2000)
// }
// function processdata(data){
//   console.log("processing data",data)

// }
// fetchdatafromServer(processdata)

// function processArray(arr,callback){
//   for(let i =0;i<arr.length;i++){
//     callback(arr[i]);
//   }
// }
// function printItem(item){
//   console.log('Processing item',item)
// }
// let items = [1,2,3,4,5,6,7];
// processArray(items,printItem)

/*
function fetchUserData(userId, callback) {
    console.log(`Fetching data for user ${userId}...`);
    
    setTimeout(() => {
        const userData = {
            id: userId,
            name: "Khushi",
            email: "khushi@example.com"
        };
        callback(userData);
    }, 2000); // Simulates a delay of 2 seconds
}

function displayUserData(user) {
    console.log(`User ID: ${user.id}`);
    console.log(`User Name: ${user.name}`);
    console.log(`User Email: ${user.email}`);
}

fetchUserData(1, displayUserData);
*/

/*
function calculate(a, b, callback) {
    let result = a + b;
    callback(result);
}

function multiply(result, callback) {
    let finalResult = result * 2;
    callback(finalResult);
}

function displayResult(finalResult) {
    console.log("Final Result: " + finalResult);
}

calculate(5, 10, (sum) => {
    multiply(sum, displayResult);
});

*/

// let btn = document.querySelector("#btn");
// let task = document.querySelector("#main");

// btn.addEventListener("click", function () {
//   let a1 = Math.floor(Math.random() * 255);
//   let a2 = Math.floor(Math.random() * 255);
//   let a3 = Math.floor(Math.random() * 255);
//   let b1 = Math.floor(Math.random() * 255);
//   let b2 = Math.floor(Math.random() * 255);
//   let b3 = Math.floor(Math.random() * 255);
//   task.style.background = `linear-gradient(to right, rgb(${a1},${a2},${a3}),rgb(${b1},${b2},${b3}))`
// });
