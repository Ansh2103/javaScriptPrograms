var readline = require('readline');
var rl = readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
)
var number
var k=1;
var harmonic = 0.0;
rl.question("Please enter the number :  ", function(answer)
{
number = answer;
harmonicNumber();
rl.close;
});

harmonicNumber = function()
{
    if(number!=0){
        for(var i=1;i<=number;i++){
        harmonic =  harmonic + (1/i);
       
        }
        console.log('The nth harmonic number is: ' +harmonic);
    }
    else{
        console.log('INVALID');
    }
}