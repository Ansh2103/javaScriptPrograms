const readline= require('readline');

const  rl = readline.createInterface(
    {
        input : process.stdin,
        output : process.stdout
    }
);

rl.question('please enter the number : ', (number)=>{

for (var factor = 2; factor * factor <= number; factor++) {
   
    while (number % factor == 0) {
        console.log(factor + " ");
        number = number / factor;
    }
}

if (number > 1)
    console.log(number);
else
    console.log();

    number.close();

    rl.close();
}

);