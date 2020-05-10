const fs= require("fs");
//to know all the file system(fs) function and module
//console.log(fs);

fs.readFile(__dirname+"/hello.txt","utf8",(err,data)=>{
    if(err) throw err;
    console.log(data);
})