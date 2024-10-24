class user {
    constructor(username){
        this.username = username ; 
    }

    isLogged(){
        console.log("yes") ; 
    }

    static getId(){
        return "123" ; 
    }
}

const obj = new user("name") ; 
// console.log(obj.getId()) ;     // cant be called 

class Teacher extends user {
    constructor(username , email){
        this.email = email ;  
        super(username) ; 
    }

    greet(){
        console.log("Good morning teacher") ; 
    }
}

const obj2 = new user("bruno" , "bruno@dogs.com") ; 
// console.log(obj2.getId()) ; 
obj2.isLogged() ; 