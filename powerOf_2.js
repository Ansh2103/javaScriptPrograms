var readline = require('readline');
var rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout
    }   
);
var number
rl.question("Please,Enter any number to find power of 2: ", function(answer){
 number = answer
 powerOf2();
 rl.close();
});

powerOf2 =  function()
   {
        for(var i=0;i<=number;i++)
        {
            console.log(i);
            for(var j=1;j<=i;j++)
            {
               var k=k*2;
            }
            console.log('power of 2 : \t\t\t'+ k);
            k=1;
        }
    }
    
    
