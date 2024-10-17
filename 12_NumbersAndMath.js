let num1 = 123 ; 

let num2 =  new Number(123123.89) ;          // here we can use the function of number class 
console.log(num2) ; 

console.log(num2.toString()) ; 
console.log(num2.toFixed(2)) ;     // sets digit after decimal place 
console.log(num2.toPrecision(4)) ;  
console.log(num2.toLocaleString('en-IN')) ;  // adds commas based on indian system 
console.log(Number.MAX_SAFE_INTEGER) ; 
console.log(Number.MAX_VALUE) ;
console.log(Number.POSITIVE_INFINITY) ;  


//********************Math Functions *****************************
// floor , ceil , round , random , max , min 
console.log(Math.max(2 , 4 , 5 , 6 , 1)) ; 

let min = 12 ; 
let max = 29 ; 
console.log(Math.floor((Math.random() * (max - min + 1)) + min)) ; 
