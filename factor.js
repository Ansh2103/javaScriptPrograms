var readline = require('readline');
var rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout
    }   
);
var number
rl.question("Please,Enter any number to find prime factor: ", function(answer){
 number = answer
 primeFactor();
 rl.close();
});

primeFactor =  function()
{
    if(number < 1){
        console.log('The Number you entered is invalid');
    }
    else
    {   
        for(var i= 1; i<= number/2;i++)
        {
            if(number%i === 0)
            {
                var flag=0;
                for(var j=2;j<i;j++)
                {
                    if(i%j===0)
                    {
                        flag =1;
                        break;
                    }
                }
                if(flag === 0)
                {
                    console.log(i);
                }
            }
        }
    }
    }