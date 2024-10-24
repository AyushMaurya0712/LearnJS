// since forEach functions dont return any value hence need to filter arises 
const arr = [1 ,2 , 3 , 4 , 5 , 6 , 7, 8 ] ; 
const arr2 = arr.filter( (num) => {
    return num > 4 ; 
})
console.log(arr2) ; 

// method 2 of doing it 
const arr3 = [] ; 
arr.forEach((num) => {
    if(num > 4){
        arr3.push(num) ; 
    }
})
console.log(arr3) ; 

// --------------------- MAP AND FILTER ------------------
const arr4 = arr.map((num) => num * 10 ) ;      // filter - like true and false , map - return whatever value you want 
console.log(arr4) ; 

// ------------------- reduce fnc --------------------
const price = [ 200 , 999 , 234 ,  150] ; 
let total1 = price.reduce(function (acc , curr){      // simple fnc
    return acc + curr ; 
}, 0) 
console.log(total1) ; 


let total2 = price.reduce((acc , curr) => (curr + acc) , 0) ; 
console.log(total2) ; 

