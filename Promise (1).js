
// Promises - > promises shows the data is fetched in waiting or executed or just started we can say that the process in pending, fulfilled or rejected.Promise ke do events main hote h then and catch if data is received supposed it will show resolved or fulfilled  in place of waiting and (then) chalega aur agar data mein dikkat hui toh catch chalega and waiting ki jagah rejected show hoga.


// I don't have this value right now , but i will have it later
// var letter = new Promise(function (resolve, reject) {
//   // take a user if the user is male green button otherwise red button
//   fetch('https://randomuser.me/api/')
//     .then(raw => raw.json())
//     // .then(result => console.log(result))
//     .then(result => {
//       if (result.results[0].gender === 'female') resolve();
//       else reject();.

//     });
// });
// letter
//   .then(function () {
//     console.log("green");

//   })
//   .catch(function () {
//     console.log("red");

//   })


/*

I don't have this value right now , but i will have it later
var letter = new Promise(function (resolve, reject) {
  // take a user if the user is male green button otherwise red button
  fetch('https://randomuser.me/api/')
    .then(raw => raw.json())
    // .then(result => console.log(result))
    .then(result => {
      if (result.results[0].gender === 'female') resolve();
      else reject();

    });
});
letter
  .then(function () {
    console.log("green");

  })
  .catch(function () {
    console.log("red");

  })
     */

// const gitHub = "https://randomuser.me/api/";
// const user = fetch(gitHub)
// fetch function returns a promise which is pending when the user is executed it will get a promise object inside this user so, we can say that fetch returns us the promise



/*
const myPromise = new Promise((resolve, reject) => {
setTimeout(()=>{
  resolve("hello world");
},2000);
});
myPromise.then((message)=>{
  console.log(message);
  
})
.catch(()=>{
  console.log("this is a errror");
  
})
 */



// Q: Create a promise that rejects with an error message "Something went wrong!" if the input number is greater than 10.

/*
const Promise1 = new Promise((resolve, reject) => {
  const num = 15;
  if (num < 10) {
    resolve("Number is acceptable");
  }
  else {
    reject("something went wrong !");
  }
});

Promise1.then((message) => {
  console.log(message);

}).catch((error) => {
  console.log(error);

})
   */




/*Promise chaining
Q: Create a series of promises that perform the following steps sequentially:

Start with the number 2.
Multiply the number by 3.
Add 5 to the result.
Subtract 1 from the result.
Log the final result.
 */


// const Promise1 = new Promise((resolve, reject) => {
//   resolve(2);
// })
// Promise1.then((number) => {
//   // multiply my 3
//   return number * 3;
// })
// .then((result) => {
//   // Step 3: Add 5 to the result
//   return result + 5;
// })
// .then((elem) => {
//   // Step 4: Subtract 1 from the result
//   return elem - 1;
// })
// .then((finalResult) => {
//   // Step 5: Log the final result
//   console.log(finalResult); // Output: 10
// })
// .catch((error) => {
//   console.error(error);
// });
 



// const Promise1 = new Promise((resolve, reject) => {
//   const num = 8;
//   if (num < 10) {
//     resolve("Number is acceptable");
//   }
//   else {
//     reject("something went wrong !");
//   }
// });
// Promise1.then((message) => {
//   console.log(message);

// }).catch((error) => {
//   console.log(error);
// })



// const promise1 = new Promise((resolve) => {
//   setTimeout(() => {
//       resolve("First Promise resolved");
//   }, 1000);
// });

// const promise2 = new Promise((resolve) => {
//   setTimeout(() => {
//       resolve("Second Promise resolved");
//   }, 2000);
// });

// Promise.all([promise1, promise2]).then((results) => {
//   console.log(results); // Outputs: [ 'First Promise resolved', 'Second Promise resolved' ]
// });




// ----------------------------------------------------------------------------------------------

// Aysnc and Await javascript 
/*
"async and await make promises easier to write"

async makes a function return a Promise

await makes a function wait for a Promise
 */
// async function fetchData() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   const data = await response.json();
//   console.log(data);
// }

// fetchData();


// make any function and write any async code you want , when you write async then it will run or execute later if later line is depends on async line it will fail the code 

// await ka matlab agli line tab tak na chalao jab tak is line ka answer na nikal jaye
// lekin await kehta h bhai mere parent function ko asyc do varna m kaam ni karuga


// async function abcd(){
//   let a = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   a = await a.json();
// console.log(a);

// }
// abcd();


// In async and await we try to manage the error with the help of try and catch


/*
async function fetchData() {
  let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  let data = await response.json();
  return data;
}

fetchData()
.then(data => console.log(data));


// async keyword is used to async function that always returns the promise, and await keyword pause the execution until the promise resolves , making code look synchronous
 */




// How do you execute multiple async functions sequentially?
/*
async function task1() {
  console.log('Task 1');
  return 'Task 1 done';
}

async function task2() {
  console.log('Task 2');
  return 'Task 2 done';
}

async function runTasks() {
  await task1();
  await task2();
  console.log('All tasks done');
}

runTasks();
 */


// Parallel Execution with Promise.all()

/*
async function task1() {
  return 'Task 1 done';
}

async function task2() {
  return 'Task 2 done';
}

async function runTasksInParallel() {
  const results = await Promise.all([task1(), task2()]);
  console.log(results); // ['Task 1 done', 'Task 2 done']
}

runTasksInParallel();
 */


// async function task1() {
//   return 'Task 1 done';
// }

// async function task2() {
//   return 'Task 2 done';
// }

// async function runTasksInParallel() {
//   const results = await Promise.all([task1(), task2()]);
//   console.log(results); // ['Task 1 done', 'Task 2 done']
// }

// runTasksInParallel();


// Using await Inside Loops:

// async function processItems(elem) {
//   for (const item of elem) {
//     await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async task
//     console.log(item);
//   }
// }

// processItems(['A', 'B', 'C']); 


// =====================
// function test() {
//   // This will cause an error
//   const result = await fetch('https://randomuser.me/api/');  
// }

// Solution
// async function testAsync() {
//   const result = await fetch('https://randomuser.me/api/');
//   console.log(result);
  
// }

// testAsync();
// test()

