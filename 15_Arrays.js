// how to combine different arrays 
let arr1 = [1 , 3 ,5 ] ; 
let arr2 = [6 , 8 , 10] ; 
// arr1.push(arr2) ;                    // push add it as arrays 
// console.log(arr1) ; 
let resArr2 = arr1.concat(arr2) ; 
console.log(resArr2) ; 

// use spread to get elements 
let arrSpread = [...arr1 , ...arr2] ; 
console.log(arrSpread) ; 

// use of flat 
let arr3 = [1 , 2 , [2, 3 ,5] , [5 , 6 , 6 ,[2 ,3 ]]] ; 
let arrFlat = arr3.flat(Infinity) ;       // can write number inside to which we need to flat the array 
console.log(arr3) ; 
console.log(arrFlat) ; 


console.log(Array.isArray("aman")) ; 
console.log(Array.from("aman")) ; 
console.log(Array.from({name : "aman"})) ;     // important 

let num1 = 10 ; 
let num2 = 20 ; 
let num3 = 30 ; 
console.log(Array.of(num1 , num2 , num3)) ;        // read more about from  , is , and of 















