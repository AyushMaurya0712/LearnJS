// 1 : for of 
let arr = [1, 3 , 5 , 8 , 10  , -1] ; 
for(const value of arr){
    console.log(`${value}`) ;  
}

// 2 : maps
const mp = new Map() ; 
mp.set(1 , "China") ; 
mp.set(2 , "India") ; 
mp.set(3 , "USA") ; 

for(const [key , values] of mp){
    console.log(`${key} - ${values}`) ; 
}

// objects 
const obj = {
    name : "aman" , 
    age : 22 , 
    mobile : 689475321 , 
}

// for(const [key , value] of obj){
//     console.log(key + " - " + value) ;               // cant be accessed like this - object 
// }

for(const key in obj){
    console.log(`${key} - ${obj[key]}`) ; 
}

// can we use for in  for arrays ? 
for(const values in arr){
    console.log(values + " - " + arr[values]) ;               // YES - BUT GIVES INDEX 
}