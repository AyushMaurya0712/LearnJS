/* 
OOPS 
- constructor 
- prototype 
- classes 
- instance 

4 Pillars 
abstraction 
incapsulation 
inheretance 
polymorphism 



*/


const user = {
    username : "aman " , 
    age : 24 , 

    getDetails : function(){
        console.log(this.username) ; 
        console.log(this) ; 
    }
}

console.log(user.age) ; 
user.getDetails() ; 


function userDetails(name , age , iq){
    this.name = name ; 
    this.age = 2* age ; 
    this.iq = iq ; 
     
    return this ; 
}

const user1 = new userDetails("aman" , 22 , 3) ; 
const user2 = new userDetails("saurabh" , 35 , 8) ; 
console.log(user1) ; 
console.log(user2) ; 


/*
1) new - an empty object is created 
2) constructor is called due to new keyword 
3) this gets insered into empty object , ie , methods and functions 
4) 
*/