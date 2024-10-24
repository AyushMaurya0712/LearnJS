let number = undefined ; 
let convertedIntoNumber = Number(number) ; 
console.log(typeof convertedIntoNumber) ; 
console.log(convertedIntoNumber) ; 

// "123ab"  =>  NaN  = not a number
// null  =>  0 
// undefined => NaN  
// "23"  => 23 

let str = 234 ; 
let convertedIntoString = String(str) ; 
console.log(convertedIntoString) ; 
console.log(typeof convertedIntoString) ; 

// null is type = object 
// rest all is same 

let bool = -1 ;
let convertedIntoBoolean = Boolean(bool) ; 
console.log(convertedIntoBoolean) ; 

// undfined , null , ""  => false 
// negative number = true 
// 0 as false 