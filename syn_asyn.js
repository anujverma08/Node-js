var fs = require("fs");
//Asynchronous read
fs.readFile('input.txt',function(err,data0){
    if(err)
    {
        return console.error(err);

    }
    console.log("Asynchronous read : " + data.toString());
} );

var data = fs.readFileSync("input.txt");
console.log("Synchorous read : "+ data.toString());
console.log("Program Ended");