// de structuring 
const obj = {
    name : "aman" , 
    class : 3 , 
    LevelOfIntelligence : 8 , 
}

const {LevelOfIntelligence : iq  } = obj ; 
// console.log(LevelOfIntelligence) ; 
console.log(iq) ; 

// whenever we call an api it returns a json file 
// {
//     "persons" : "8" , 
//     "batch " : "Btech" , 
// }