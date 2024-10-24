const heroPower = {
    name : "flash" , 
    power : "speed" , 

    display : function(){
        console.log(`${this.name} has a power of ${this.power}`) ; 
    }
}

Object.prototype.print = function (){
    console.log("Property inserted in object") ; 
}

heroPower.print() ; 

// array , string , function -> objects -> null 
// so is this property also applicalbe for arrays and functions 

const arr = [1 , 3 , 4, 5]  ; 
arr.print() ; 

// applying some property on array , lets see whether it is accessible from objects as well 
Array.prototype.hello = function (){
    console.log("Property inserted in arrays ") ; 
}

arr.hello() ; 
// heroPower.hello() ;     // generates and error as hello is not accessible for objects 

