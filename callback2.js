function show(val){
    return(val+5);
}

function display(callback){
    return callback(4);
}
console.log(display(show));