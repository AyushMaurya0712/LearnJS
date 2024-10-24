// immediately invoked function expression 


// named iife
(function hello(){
    console.log(`How you doing? `) ; 
})() ; 

((name) => {
    console.log(`How are you ${name} ?`) ; 
}) ("ayush") ; 