function show(){
    console.log('show function calling');
};

function display(callback){
    console.log('display function calling');
    callback();
}

display(show);
//show()