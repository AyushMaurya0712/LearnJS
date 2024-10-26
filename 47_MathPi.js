const discriptor = Object.getOwnPropertyDescriptor(Math , "PI") ; 
console.log(discriptor) ; 

const chai = {
    name : "masala chai" ,  
    price : "20 " , 
    place : "tapri" , 

    bill(){
        console.log(`Your bill is ${price}`) ; 
    }
}

console.log(Object.getOwnPropertyDescriptor(chai , "name")) ;

Object.defineProperty(chai , "name" , {
    // writable : false ,
    enumerable : false ,                 // value is not iterable 
})
// console.log(Object.getOwnPropertyDescriptor(chai , "name")) ; 

for (const [key , value] of Object.entries(chai)) {
    if(typeof value !== "function")
    console.log(`${key} : ${value}`) ; 
    
}
