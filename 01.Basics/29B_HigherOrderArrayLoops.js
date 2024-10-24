// for each loop 
const arr = [ 2 , 4 , 6 , 8  , 10 ] ; 
arr.forEach(function (num) {
    console.log(num / 2) ; 
})

arr.forEach( (num) => {
    console.log("_ " + num + 1) ; 
})

function poorNumber(num){
    console.log(`Poor number ${num}`) ; 
}

arr.forEach(poorNumber) ; 

arr.forEach( (num , index , arr) => {
    console.log(`${num} , ${index} , ${arr}`) ; 
})

// similarly we can use for each with array of objects 
// [{} , {}  , {} ]          o r    [[]  , [] , [] ] 

const arrObj  = [{name : "aman"} , {name : "shashank"} , {name : "rohan"}] ; 
arrObj.forEach( (item) => {
    console.log(`Welcome , ${item.name}`) ; 
})