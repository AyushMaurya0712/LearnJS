// operators like    >   <   <=   >=   ==  != 

console.log("2" > 2) ; 
console.log("02" >= 2) ; 

console.log(null > 0) ; 
console.log(null == 0) ; 
console.log(null >= 0) ; 

// this occurs because null is converted to int with < and > operations while with == it is simply compared without any conversion 

// ===   compares the values as well as data type 
console.log("2" == 2) ; 
console.log("2" === 2) ; 