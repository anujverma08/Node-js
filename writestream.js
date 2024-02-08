var fs = require("fs");

var data = 'this is node.js class';

// create a writeable stream

var writer = fs.createWriteStream('test.txt');

// Write a data stream with encoding to be utf8

writer.write(data,'UTF8');

// mark the end of file

writer.end();

writer.on('error',function(err){
    console.error(err);
});
