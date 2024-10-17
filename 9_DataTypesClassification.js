// boardly two categories : primitive and non primitive 

// primitive 7 types : bigInt , Number , Boolean , null , String , Symbol , undefined 

const num1 = -23 ; 
const num2 = 23.45 ;  
const num3 = 3242342348999998n ; 
console.log(typeof num1) ; 
console.log(typeof num2) ; 
console.log(typeof num3) ; 

const var4 = null ; 
const var5 = false ; 
console.log(typeof var4) ;    // object 
console.log(typeof var5) ; 

const var6 = Symbol(123) ; 
const var7 = Symbol(123) ; 
console.log(var6) ; 
console.log(var7) ; 
console.log(typeof var6) ;    // symbol 
console.log(var6 == var7) ;  



// non primitive : arrays , objects and functions 
const arr = [1 , 3, 4 ]  ;
let obj = {
    name : "aman" ,
    age : 21 ,
}

let myFunc = function(){
    console.log("hey guys") ; 
}

console.log(typeof arr) ;       // object 
console.log(typeof obj) ;       // object 
console.log(typeof myFunc) ;    // function








