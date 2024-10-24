let date = new Date() ; 
// console.log(date.toDateString()) ; 
// console.log(date.toISOString()) ; 
// console.log(date.toLocaleDateString()) ; 
// console.log(date.toLocaleString()) ; 
// console.log(date.toJSON()) ; 

// let myDate1 = new Date(2023, 0 , 12) ;          // year , month , date , month starts from 0 ; 
// console.log(myDate1.toLocaleString()) ; 
// console.log(myDate1.toString()) ; 
// let myDate2 = new Date(2023 , 1 , 23 , 4 ,5 , 38 ) ; 
// console.log(myDate2.toLocaleString()) ; 
let myDate3 = new Date("1-04-2023");            // month , date , year 
console.log(myDate3.toString()) ; 


let myTimeStamp = Date.now() ;                 // used where very high precision of time is required , gives ms - competition 
console.log(myTimeStamp) ; 
console.log(myDate3.getTime()) ; 
console.log(Math.floor(Date.now()/ 1000)) ;    // get seconds 

console.log(myDate3.getDay()) ; 

myDate3.toLocaleString('default' , {
    weekday : "long" , 
})
