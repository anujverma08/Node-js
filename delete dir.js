var fs = require("fs");

console.log("going to delete directory /tmp");

fs.rmdir("/tmp",function(err){
    if(err){
        return console.error(err);
    }
    console.log("Going to read directory /tmp");
    fs.readdir("/tmp/",function(err,files){
        if (err){
            return console.error(err);
        }
       files.forEach(function(file){
            console.log(file);
        });
    });
});