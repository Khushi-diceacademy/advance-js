/*

setTimeout(function () {
  console.log("time goes on");

}, 3000)
function heaven(hell){
  console.log("Good Soul");
  hell()
}
heaven(function hell(){
  console.log("Bad Soul");
  
})

*/




//-------------------------------------

/*
Deep  of Event listener

document.querySelector("button").addEventListener("click", function xyz() {
  console.log("button clicked");
  // call back and hit the anonymous function
})
*/

/*---------------------------------------------------
const calculator = (x, y, operation) => {
  return operation(x, y)
};

// method 1
const addition = calculator(10, 20, function (num1, num2) {
  return num1 + num2;
});
console.log(addition);

//method 2

const substraction = (x, y) => x - y
const result = calculator(8, 10, substraction);
console.log(result);

//method 3

function multiply(x,y){
  return x*y;
}
const mulresult = calculator(10,22,multiply);
console.log(mulresult);
 */



/*-----------------------------------------------
const myPromise = new Promise((resolve, reject) => {
  let success = false;
  // Asynchronous operation
  if (success) {
    resolve('Operation was successful');
  } else {
    reject('Operation failed');
  }
});

myPromise
  .then(result => {
    console.log('Success:', result);
  })
  .catch(error => {
    console.log('Error:', error);
  });
   */



// function fetchthedata() {
//   const urls = [
//     'https://jsonplaceholder.typicode.com/posts',
//     'https://randomuser.me/api/',
//     'https://dog.ceo/api/breeds/image/random',
//     'https://api.thecatapi.com/v1/images/search',
//     'https://api.adviceslip.com/advice'
//   ];
//   urls.forEach(url => {
//     fetch(url)
//       .then(res => res.json())
//       .then(data => console.log(`data from ${url}, data ${data}`)
//       )
//   })
// }
// fetchthedata()


// const myPromise = new Promise((resolve, reject) => {
//   let success = true;
//   // Asynchronous operation
//   if (success) {
//     resolve('Operation was successful');
//   } else {
//     reject('Operation failed');
//   }
// });

// myPromise
//   .then(result => {
//     console.log('Success:', result);
//   })
//   .catch(error => {
//     console.log('Error:', error);
//   });


function userinput(num, cbfn) {

  let n = prompt("enter number")
  cbfn();

}


function printcounting(num) {
  for (let i = 1; i <= num; i++) {
    console.log(i);

  }
}


function sum(num) {

  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;

  }

  return sum;



}

userinput(10, printcounting)