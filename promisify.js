const fs = require ('fs');
const util = requie('util');

const readFile = util.promisify(fs.readFile);

readFile('./index.js',utf8)
.then((text)=> {
    console.log(text);
})
.catch((err)=>{
    console.log('Error',err)
});