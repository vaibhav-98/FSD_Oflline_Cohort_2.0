// A function that return a fun or takes other as arguments --> HOF

// example 1 : 

const powerTo = (n) => { // n = 3
    console.log("this is powerTo fun", n);
    
    return n **2 // 3 * 3 = 9
}

function powerCube (powerTo, n) {
     console.log("this is powerCube fun", powerTo,n);
    return powerTo(n) * n // 9 * 3 = 27

}
console.log(powerCube(powerTo,3));



// example 2 : 


const higherOrderFunction = (n) => {

   const funOne = m => {

     const funTow = p => {
        console.log("this is funTow", p);
        
        return m + n + p;  // 2 + 3 + 5 = 10
     }
     return funTow
   }

   return funOne
}

console.log(higherOrderFunction(2)(3)(5));



/* 
  MAP
  Filter
  reduce 
  forEach
  
*/