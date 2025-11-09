/*
  A function is a block of code designed  to perform a particular task
  Js function are first-class-citizen
*/

//=================================== 1 =============================


// function sqr(x) { // x --> parameter
//    // console.log(x*x);
//    let c = x*x
//     return c

// }
//  let a = sqr(9)  // 9 --> argument
//  console.log(a);
 


// ================= function without a parameter and return ==============

// function hello() {
//     console.log("hey himanshu");
   
// }
// hello()



//========== Anonymus function =====================================

// let b = function () {
//     console.log("vaibhav");  
// }

// b()



// ====================== function Expression ===============================//
 
//  var b = function xyz() {
//     console.log("b is called");
//     console.log("xyz is called");  
// }
//b()
//xyz()



// =============== IIFE & self invoking function ==============

// (function(x) {
//     console.log(x*x);
    
// })(5);


//======================== fun with unlimited no of  parameters================//

// function sum() { // parameter
//     let sum = 0 ;
//     for(var i = 0 ; i< arguments.length; i++) {
//         sum += arguments[i]
        
//     }
//     return sum
// }
// let result = sum(1,2,3,4,5,10,20,30) // arguments
// console.log(result);
