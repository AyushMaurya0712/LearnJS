function f1() {
    let name = "aman"; 
    function f2(){
        console.log(name) ; 
    }

    f2() ; 
}

// f2() ;  cant do this 
f1() ; 

// two types of fuction declaration 

console.log(addOne(2)) ;
function addOne(num){
    return num + 1 ; 
}

// console.log(addTwo(3)) ;      // here comes the problem , cant access previously 
let addTwo = function(num){
    return num + 2 ; 
}