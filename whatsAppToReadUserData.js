var fs = require('fs');
const whatsAppNotification = 'whatsAppNotification.txt'
const whatsAppMessages = 'whatsAppMessages.txt'

fs.exists(whatsAppNotification,function(exist){
    if(exist){
        fs.stat(whatsAppNotification,function(err,statCheck){
            if(statCheck.isFile()){
                fs.readFile(whatsAppNotification,function(err,data){
                    if(err){
                        throw err
                    }
                    else{
                        console.log(data.toString());
                    }
                })
            }
        })
    }  
    else{
        throw 'file does not exist';
    }
})

fs.exists(whatsAppMessages,function(exist){
    if(exist){
        fs.stat(whatsAppMessages,function(err,statCheck){
            if(statCheck.isFile()){
                fs.readFile(whatsAppMessages,function(err,data){
                    if(err){
                        throw err
                    }
                    else{
                        console.log(data.toString());
                    }
                })
            }
        })
    }
    else{
        throw 'file do not exist'
    }
})