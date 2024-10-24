// class user {
//     constructor(username , password , email){
//         this.username = username ;
//         this.password = password ; 
//         this.email = email ; 
//     }

//     encryptPassword () {
//         return `${this.password}holla` ; 
//     }

//     getEmail(){
//         return this.email ; 
//     }
// }

// const obj1 = new user("aman" , "chutiya" , "aman@chutiya.com") ; 
// console.log(obj1.encryptPassword()) ; 

// do it without using the classes ; 
const user = function(username , password , email ){
    this.username = username ; 
    this.password = password ; 
    this.email  = email ; 
}

user.prototype.encryptPassword = function(){
    return `${this.password}holla` ; 
}

user.prototype.getEmail = function(){
    return this.email ; 
}

const obj = new user("aman" , "harami" , "aman@chutiya.com") ; 
console.log(obj.encryptPassword()) ; 

