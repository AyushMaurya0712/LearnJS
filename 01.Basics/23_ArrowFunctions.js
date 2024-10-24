const obj = {
    username : "aman" , 
    age : 21 , 

    welcome : function(){
        console.log(`${this.username} , welcome to adda`) ; 
        console.log(this) ; 
    }
}

console.log(obj.welcome()) ; 
// console.log(obj) ; 

console.log(this) ;      // output = {} ; 

// lets see for functions 
function welcome(){
    console.log("Here1") ; 
    let name = "aman" ; 
    console.log(this) ;            // gives some output 
    console.log(this.name) ;   // undefined 
}
welcome() ; 


// -------------------  ARROW FUNCTIONS -----------------------------
const hello = () => {
    let name = "ratan" ; 
    console.log(`Arrow Function`) ;
    console.log(this) ;                  // {} 
    console.log(this.username) ;         // undefined
}
hello() ; 

// other ways of its declaration 
const f1 = (num1 , num2) => {            // when ever we use {} with arrow fn , we need to use return 
    return num1 + num2  ; 
}
console.log(f1(1 , 2)) ; 

const f2 = (num1 , num2) => num1 + num2 ;           // it is automatically returned 
console.log(f2(3,4)) ; 

const f3 = (num1 , num2) => ({username : "ratan"})  // returning an object 
console.log(f3(7,8)) ;  


