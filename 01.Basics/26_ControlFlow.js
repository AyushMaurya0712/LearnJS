// taught if , else if , switch 

// ------------------- truly falsi -------------

// flasy = 0 , false , -0 , 0n , null , undefined , Nan 

// truely =   "0" , " " , [] , {}  , "false" , function()[] 

const obj = {} ; 
if(Object.keys(obj).length == 0){
    console.log("object is empty ") ; 
}


// Nullising collesing operator ?? 
let var1 = 3 ?? 10 ; 
let var2 = null ?? 2 ; 
let var3 = undefined ?? 20 ; 
console.log(var1) ; 
console.log(var2) ; 
console.log(var3) ; 

// ternary operator 
// condition ? true value : false value 
9 < 10 ? console.log("single digit") : console.log("not single digit") ; 
