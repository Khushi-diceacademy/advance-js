// // exception handling to create our own error and handles our own errors


// // try,catch, finally and throw


// // compile time error - > esi error jo hume c ompile karte time hi pata chal jaye we can say syntax error is comes under compile time error


// // Runtime error -> esi error jo hume run karte time pata lagti h usye runtime error bolte h 




// // practice add and undefined variable with 1 

// // exception handling - esa concept jisme hum errors ko handle karte h or deal karte h usye hum exception handling kehete h sabse important we can also create our own errors try and catch 


// try{
//   console.log("this is a try block");
//   let result = 10;
//   console.log(result.toUpperCase());


// }
// catch(err){
//   console.log(err.message);
//   console.log(err.name)

// }


// try {
//   var hello=1
//   console.log(hello);
// } catch (err) {
//   console.log(err.name);
//   console.log(err.message);
// }

// // console.log(5+10);

// // take a variable and add 1 to it and try it and catch it by printing message 

// try {
//   let age = 17;
//   if (age < 18) {
//     throw new Error("You must be 18 or older to enter.");
//   }
//   console.log("Access granted.");
// } catch (error) {
//   console.log("Error:", error.message);  // Output: You must be 18 or older to enter.
// }


// // throw
// // try {
// //   var n = prompt("enter a string");
// //   if (n === "khushi") {
// //     throw {
// //       name :"is a robot"
// //     }
// //   }
// // } catch (err) {
// //   // console.log(err.message);
// //   console.log(err);


// // }
// // divide a number with 0 and create your own error that something is invalid


// // try {
// //   var n = prompt("enter a string");
// //   if (n === "khushi") {
// //     throw new Error("is a robot")
// //   }
// // } catch (err) {
// //   // console.log(err.message);
// //   console.log(err);


// // }



// // finally

// try {
//   var num = 1;
//   console.log("before");
//   console.log(num);
//   // console.log("after");
// }
// catch (err) {
//   console.log(err.name);
//   console.log(err.message);
// } finally {
//   console.log("after");

// }

// --------------------
// try {
//   console.log(x);
// } catch (err) {
//   throw new Error("phele x is value toh define kar de ")
// }
// try {
//   let x = y + 1;
// } catch (err) {
//   console.log(err);

// }

// -----------throw 404
// let errcode = 404;
// if(errcode === 404){
//   throw new Error("server not found")
// }





// // -----------------------------practice time -----------------------

// // create a custom error if the user write the age in negative throw the error
// // Q: Write a function that divides two numbers and throws an error if the divisor is zero.
// // Explain the finally block and provide an example of its use.
// // What is the difference between throw and return statements?
// // Write a try-catch block to handle errors asynchronously using async/await.
// // throw a error after 2 sec of the page reloading


// // try {
// //   let age = -4;
// //   if (age < 0) {
// //     throw new Error("age is not able to take in negative value");
// //   }
// //   else {
// //     console.log("its okay");
// //   }
// // } catch (err) {
// //   console.log(err.message);

// // }
// // console.log("jeeeyyy");

// // Q: Write a function that divides two numbers and throws an error if the divisor is zero.

// // function abcd(a, b) {
// //   if (b === 0) {
// //     throw new Error("this is not valid way")
// //   }
// //   return a/b;
// // }
// // try {
// //   console.log(abcd(10, 0));

// // } catch (err) {
// //   console.log(err.message);

// // }
// // finally{
// //   console.log("heyyyy");

// // }

// // throw a error after 2 sec of the page reloading
// // try {
// //   setTimeout(() => {
// //     throw new Error("error h boss")
// //   }, 2000)
// // }catch(err) {
// //   console.log(err.message);

// // }

// // if(!res.ok){

// // }


// // async function datamagvyajaye() {
// //   const res = await fetch('https://randomuser.me/a/');
// //   try {
// //     if (!res.ok) {
// //       throw new Error("api is not okay it has a fever")
// //     }
// //     const data = await res.json();
// //     console.log(data);

// //   } catch (err) {
// //     console.log(err.message);

// //   }
// // }
// // datamagvyajaye()

// const datafetch = async (url) => {
//   const res = await fetch(url);
//   try {
//     if (!res.ok) {
//       throw new Error("api is not okay it has a fever")
//     }
//     const data = await res.json();
//     console.log(data);

//   } catch (err) {
//     console.log(err.message);
//   }
// }
// const apiurl = 'https://randomuser.me/api/'
// const anourl = 'https://official-joke-api.appspot.com/random_joke'
// const advice = ' https://api.adviceslip.com/advice'
// datafetch(apiurl)
// datafetch(anourl)
// datafetch(advice)


