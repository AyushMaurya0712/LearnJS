const promiseOne = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Asyn 1 completed") ; 
        resolve() ; 
    }) ; 
}); 

promiseOne.then(function(){
    console.log("Promise 1 consumed") ; 
})


new Promise(function(resolve , reject){
    setTimeout(function (){
        console.log("Asyn 2 completed.") ; 
        resolve() ; 
    })
}).then(function(){
    console.log("Promise 2 consumed") ; 
})

// third 
new Promise(function(resolve , rejct){
    setTimeout(function(){
        resolve({name : "aman" , age : 25 , email : "aman@chutiya.com"}) ; 
    } , 1000) ; 
}).then(function(mess){
    console.log(mess) ; 
})

// FOUR 
const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        const error = true ; 
        if(error){
            reject("Error : cant open") ; 
        }
        else {
            resolve({name : "aman" , iq : 9}) ; 
        }
    } , 1000) ; 
}) ;
promiseFour.then(function(mess){
    console.log(mess.name) ; 
    return mess.name ; 
}).then(function (mess){
    console.log(`In 2 : ${mess}`) ; 
}).catch(function(mess){
    console.log(mess) ; 
})


// FIVE 
const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true ; 
        if(error){
            reject("Error in 5") ; 
        }
        else{
            resolve({language : "js" , status : 6}) ; 
        }
    } , 1000) ; 
}) ; 

async function promiseFiveFn(){
    try{
        const response = await promiseFive 
     console.log(response) ;
    } 
    catch(response){
        console.log(response) ; 
    }
}
promiseFiveFn() ; 


// SIX ; 
async function promiseSix(){
    try{
        const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
        console.log(response) ;
        const data = await response.json() ; 
        console.log(data) ; 
    }
    catch(error){
        console.log(error) ; 
    }
}
promiseSix() ; 


// seven 
fetch("https://catfact.ninja/fact")
.then(function(response){
    return response.json() ; 
})
.then((data) => {
    console.log(data) ; 
})
.catch((error) => {
    console.log(error) ; 
}) 






















