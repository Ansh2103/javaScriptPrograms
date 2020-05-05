const readline= require('readline');

const   rl = readline.createInterface(
    {
        input : process.stdin,
        output : process.stdout
    }
);

rl.question('please enter your user name : ', (userName)=>{
    if(userName.length >= 3){
        console.log('Hello '+userName);
    }
    else{
        console.log('userName must have at least of three words and more')
    }
    rl.close();
});