
var data= true;
var promise = new promise(function(resolve,reject){
    if(data)
     resolve('success');

    else
    reject('error');

});

promise.then(function(msg){
console.log(msg);
},

function(err){
    console.log(err);
});

