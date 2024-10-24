// const user = new Object() ;         // singleton object
// console.log(user) ; 

const user = {} ; 
user.id = 123 ; 
user.name = "aman" ; 

console.log(user) ; 

// nested objects 
const user1 = {
    name : {
        firstName : "aman" , 
        lastName : "kumar" , 
    }
}
console.log(user1.name.firstName) ; 

// combining of objects 

let obj1 = {1 : 'a' , 2 : 'b'} ;
const obj2 = {3 : 'a' , 4 : 'b'} ;
const obj3 = {5 : 'a' , 6 : 'b'} ;

const obj = Object.assign({} , obj1 , obj2 , obj3) ;   // all of the goes into {} 
// const obj = {...obj1 , ...obj2 , ...obj3} ; 
//const obj = {obj1 , obj2 , obj3} ; 
console.log(obj) ; 

// keys , values , entries 
console.log(Object.keys(obj)) ; 
console.log(Object.values(obj)) ; 
console.log(Object.entries(obj)) ; 

console.log(obj.hasOwnProperty(8)) ; 



