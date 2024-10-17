// stack(primitive) ; and ; heap(non primitive) ; 

let num1 = 23 ;
let num2 = num1 ;
num1 = 2 ; 
console.log(num1) ; 
console.log(num2) ; 

let myFunc = {
    name : "aman" ,
    age : 22 , 
}

myFuncCopy = myFunc ; 
myFunc.name = "ratan" ; 
console.log(myFunc.name) ; 
console.log(myFuncCopy.name) ;     

// in heap only one memory is present add every var point at the same location 


