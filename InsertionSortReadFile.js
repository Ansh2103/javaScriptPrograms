var file = require('fileOfNumber.txt')
var insertion = require('./InsertionSort1')
const fs = require('fs')

function readForSort(){
     fs.exists(file, function(exist){
         if(exist){
             fs.stat(file, function(err, statCheck){
                 if(statCheck.isFile()){
                     fs.readFile(file, function(err, data){
                         if(err){
                             throw err
                         }
                         else{
                             const arrayData = data.toString().split(",");
                             const numberArray = arrayData.map(Number);
                             insertion(numberArray, function(sortedData){
                                 console.log(sortedData);
                             })
                         }
                     })
                 }
             })
         }
     })
    }
 readForSort();