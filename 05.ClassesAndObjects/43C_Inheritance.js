const obj1 = {
    name : "aman" , 
}

const obj2 = {
    age : 21 , 
}

const obj3 = {
    gender : "male" , 
    __proto__ : obj1 , 
    details : function (){
        console.log(this) ; 
    }
}

console.log(obj3.name) ; 
console.log(obj3.details()) ; 

// modern syntax 
Object.setPrototypeOf(obj3 , obj2) ; 
// obj3.__proto__ = obj2 ; 
console.log(obj3.age) ; 


// true length 
String.prototype.trueLength = function(){
    console.log(this) ; 
    console.log(`Length of ${this} is ${this.trim().length}`) ; 
}
"aman    ".trueLength() ; 

