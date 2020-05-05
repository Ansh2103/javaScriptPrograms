const readline = require ('readline');

const rl = readline.createInterface({
        input: process.stdin,
        output:process.stdout
    });

    var harmonic =0;

    rl.question('enter the number',(number)=>{

   if (number!=0){

        for(let i = 1;i<=number;i++){
        harmonic += (1/i);
   }
     console.log(harmonic);
  }
     else
         console.log();
     
});