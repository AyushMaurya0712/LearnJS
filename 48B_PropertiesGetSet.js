function user(email , password){
    this._email = email ;
    this._password = password ; 

    Object.defineProperty(this , "email" , {
        get : function (){
            return this._email.toUpperCase() ; 
        } ,
        set : function(value){
            this._email = value ; 
        },
    })

    Object.defineProperty(this , "password" , {
        get : function(){
            return this._password.toUpperCase() ; 
        },
        set : function(value){
            this._password = value ; 
        },
    })
}

const obj = new user("harsh@random.com" , "xsw") ; 
console.log(obj.email) ; 
console.log(obj.email("harsh@opera.ac.in" , "zaq")) ; 
console.log(obj.email) ; 