var async = require('async')
var readFile = require('./asyncWaterfallForReadingFile')
var fileOne = 'faceBookMessages.txt'
var fileTwo = 'faceBookNotification.txt'
function checkAndReadFile(){
async.parallel({
Task1: function(callback){
var data = readFile(fileOne);
data.then((info)=>{
callback(null, info)
})
},
Task2: function(callback){
var data = readFile(fileTwo);
data.then((info)=>{
callback(null, info)
})
}
}, function(err, result){
if(err){
throw err
}
else{
console.log(result);
}
})
}

checkAndReadFile();