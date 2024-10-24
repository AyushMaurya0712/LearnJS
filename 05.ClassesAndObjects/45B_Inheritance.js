class user{
    constructor(username ){
        this.username = username ; 
    }

    isLogged(){
        console.log(`${this.username} , has logged successfully.`) ; 
    }
}

class Teacher extends user {
    constructor(username , email , age) {
        super(username) ; 
        this.email = email ;
        this.age = age ; 
    }

    printAge() { 
        console.log(`${this.age} years old `) ; 
    }
}

const obj = new Teacher("antariksha" , "ant@stars.com" , 21) ; 
obj.isLogged() ; 
console.log(obj.username) ; 

console.log(obj === Teacher) ; 
console.log(obj === user) ; 
console.log(obj instanceof Teacher) ; 
console.log(obj instanceof user) ; 
