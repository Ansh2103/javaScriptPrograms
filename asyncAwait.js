async function shubh(){
    console.log('inside shubh function');
    const response = await fetch('fecebookMessages.txt');
    console.log('before response');
    const users = await response.json();
    console.log('user resolved')
    return data;

   
}
console.log('before calling shubh')
let a = shubh();
console.log('After callling harry')
console.log(a);
a.then(data => console.log(data));
console.log('Last line of this js file');


