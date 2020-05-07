const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('please enter the amount : ',(amount)=> {
      
    money = Number(amount);
      

const i=0; 
const total = 0;

const notes = [1000,500,100,50,10,5,2,1];

var money;

function calculate(money,notes)
var rem;

if(money == 0){
    return -1;
}
else{
        if(money>= notes[i])
        {
            var calNotes = money/notes[i];
            rem = money % notes[i];
            money= rem;
            total +=calNotes;
            console.log(notes[i]+'notes---->'+calNotes);
        }
        i++;
        return calculate(money,notes);
}

      console.log(calculate(money,notes));
     console.log("Total Number of Notes are :"+total);
     
     rl.close();

});