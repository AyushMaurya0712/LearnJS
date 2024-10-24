function multiply(num){
    return num * 2 ; 
}

multiply.power = 2 ; 
console.log(multiply(5)) ; 
console.log(multiply.power) ; 
// console.log(this) ; 



function user(name , bill , disPercent){
    this.name = name ; 
    this.bill = bill ;
    this.disPercent = disPercent ; 
}

user.prototype.discount = function(){
    console.log(this.bill * (100 - this.disPercent )) ; 
}

const chai = new  user("chai " , 40 , 10) ; 
const coffee = new user("coffee" , 20 , 5) ; 
console.log(chai.discount()) ; 
console.log(coffee.discount()) ; 