// types of declaration 

// object.create 
// singleton 

// object literals 

let sym = Symbol(123) ; 

const user = {
    name : "aman" , 
    id : 20225021 , 
    email : "ayush@email.com" , 
    [sym] : "Math " ,                // how to declare symbol in objects 
    "my age" : 23  ,                    // the key is automatically converted into string 


}

console.log(user.name) ; 
console.log(user["id"]) ; 
console.log(user["my age"]) ; 
// console.log(user.my age) ;          // cant be accessed like this , 


user.greetings = function(){
    console.log(`Hello , ${this.name}`) ; 
}
console.log(user.greetings()) ; 

