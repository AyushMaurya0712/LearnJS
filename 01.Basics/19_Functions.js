function welcomeMessage(username = "san"){
    if(!username){
        console.log(`Please enter a user name`); 
        return ;
    }
    console.log(`${username} , welcome to disney land`) ; 
}

welcomeMessage() ; 
welcomeMessage("aman") ; 
                    

