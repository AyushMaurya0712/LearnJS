// shoping 
function calculateTotalPrice(var1 , var2 , ...num){
    return num ; 
}

console.log(calculateTotalPrice(20 , 200 , 100 , 300)) ; 


function handle(anyObject){                      // like any object we can work with array by using getArray 
    console.log(`${anyObject.username} , welcome to disney. The ticket price is ${anyObject.price}`) ; 
}

handle({
    username : "aman" , 
    price : 800 , 
})