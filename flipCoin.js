var readline = require('readline');
var rl = readline.createInterface({
 input: process.stdin,
 output:process.stdout
});

var number
rl.question("Enter the number(times) to flip the coin  :  ", function(answer)
{
    number = answer
coinFlip();
rl.close();
});

coinFlip = function()
{
    if(number>0)
    {
       var tail = 0;
       var head = 0;
       for(var i = 0; i < number; i++)
       {
          var toss = Math.random()
          console.log(toss);
          if(toss<0.5)
          {
             tail++;
          }
          else
          {
              head++;
          }
       }
       let tailPercentage = (tail/number)*100;
       let headPercentage = (head/number)*100;
       console.log('Coin is tossed : ' + number);
       console.log('Tail Percentage : ' + tailPercentage + '%');
       console.log('Head Percentage :  ' + headPercentage + '%');
    }
    else
    {
        console.log('INVALID,TRY AGAIN');
    }
}