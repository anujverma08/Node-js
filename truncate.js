var fs =require("fs");
var buf = new Buffer(1024);

console.log("GOing to open an existing file");
fs.open('input.txt','r+',function(err,fd){
    if(err){
        return console.error(err);
    }

    console.log("File opend successfully!");
    console.log("going to truncate the file after 10 bytes");

    //Truncate the opened file
    fs.truncate(fd,10,function(err){
        if(err){
            console.log(err);
        }
        console.log("File truncated successfully");
        console.log("GOing to read the same file");

        fs.read(fd,buf,0,buf.length,0,function(err,bytes){
            if(err){
                console.log(err);

            }

            //Print only read bytes to avoid junk.
            if(bytes > 0){
                console.log(buf.slice(0,bytes).toString())
            }

            fs.close(fd,function(err){
                if(err){
                    console.log(err);
                }
                console.log("File closed successfully");
            });

        });
    });
});