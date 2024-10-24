let arr = [12 , 3 , 5 , 6 , 7 , 9] ; 
let arr2 = new Array(1 , 3 , 5 ,7 , 9) ; 
// console.log(arr) ; 
// console.log(arr2) ; 

arr.push(30) ;           // pushes element in the last of arr 
console.log(arr) ; 
arr.pop() ; 
console.log(arr) ; 

arr.unshift(10) ;        // pushes element in the beginnning of arr 
console.log(arr) ; 
arr.shift() ; 
console.log(arr) ; 

console.log(arr.includes(2)) ;  // boolean return type 
console.log(arr.indexOf(2)) ;  // -1 if not present 

let arrToString = arr.join() ;       // convert to string with commas seperated elements 
console.log(arrToString) ; 
console.log(typeof arrToString) ; 

// SLICE vs SPLICE 
console.log(`Orginal Array : ${arr}`) ; 
let arrSlice = arr.slice(1 , 3) ;                 // last index is not included and original remains uneffected
console.log(`After slice : ${arr}`) ; 
console.log(arrSlice) ; 

let arrSplice = arr.splice(1 , 3) ; 
console.log(`After using splice ${arr}`) ;  // orginal array is altered , last index is included 
console.log(arrSplice) ; 


