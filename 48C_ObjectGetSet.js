const user = {
    _name : "chai" , 
    _price : 20 , 

    get  name(){
        return this._name.toUpperCase() ; 
    },
    set name(value){
        this._holla = value ;  //_name
    }
}

const obj = Object.create(user) ; 
obj.name("aman") ; 
console.log(obj.name) ; 
