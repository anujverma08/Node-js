 

 let data = JSON.stringify(student,null,2);

 FileSystem.writeFile('std.json',data,function(err){
   if (err)throw err;
   console.log('Data wriiten to file');

 });