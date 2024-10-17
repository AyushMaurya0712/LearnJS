let str = "aman" ; 
console.log("my name is " + str + " .") ; 

// do it as shown below 

console.log(`My name is ${str} . `) ; 

let string = new String('panamera') ; 

console.log(string.toUpperCase()) ; 
console.log(string.__proto__) ; 
console.log(string.charAt(3)); 
console.log(string.substring(0 , 4)) ; 
console.log(string.slice(-7 , 5)) ; 

let strTrim = "   ayush " ; 
console.log(strTrim.trim()) ; 
console.log(strTrim.trimEnd()) ; 

let str2 = "aman-ratan-falcan" ; 
let names = str2.split('-') ; 
console.log(names) ; 
console.log(str2.replace('-' , " ")) ; 
