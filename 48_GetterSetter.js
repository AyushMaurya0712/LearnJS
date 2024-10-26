class user{
    constructor(breed , name ){
        this.breed = breed ; 
        this.name = name ;
    }

    get breed(){
        return this._breed ; 
    }

    set breed(value){
        this._breed = value ; 
    }

    get name(){
        return this._name ; 
    }

    set name(value){
        this._name = value ; 
    }
}

const obj = new user("pamerain" , "bruno") ;
console.log(obj.name) ; 