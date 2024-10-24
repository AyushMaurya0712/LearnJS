function holla(username){
    this.username = username ; 
}

function parent(name , email , gender) {
    holla.call(this , name) ; 
    this.email = email ; 
    this.gender = gender ; 
}

const ans = new parent("aman" , "aman@chutiya.com" , "male") ; 
console.log(ans) ; 