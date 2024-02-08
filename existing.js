// var fs = require("fs");
// var buf  =Buffer.alloc(1024);

// console.log('input.txt','r+',function(err,fd){
//     if(err){
//         return console.error(err);
//     }
//     console.log("File opened successfully!");
//     console.log("Going to read the file");

//     fs.read(fd,buf.length,0,function(err,bytes){
//         if(err){
//             console.log(err);
//         }
//         console.log(bytes + "bytes read");
//         // print only to read bytes to avoid junk
//         if(bytes > 0){
//             console.log(buf.slice(0,bytes).toString());
//         }
//         fs.close(fd,function(err){
//             if(err){
//                 console.log(err);
//             }
//             console.log("File closed successfully");
//         })
//     })
// })


var fs = require("fs");
var buf = Buffer.alloc(1024);

// Open the file
fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }

    console.log("File opened successfully!");
    console.log("Going to read the file");

    // Read from the file
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
        if (err) {
            console.log(err);
        }

        console.log(bytes + " bytes read");

        // Print only the read bytes to avoid junk
        if (bytes > 0) {
            console.log(buf.slice(0, bytes).toString());
        }

        // Close the file
        fs.close(fd, function(err) {
            if (err) {
                console.log(err);
            }
            console.log("File closed successfully");
        });
    });
});
