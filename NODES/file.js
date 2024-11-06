const fs = require('fs');

const myFile = './docs/blog1.txt';
// fs.readFile(myFile, (err,data) => {
//     if(err){
//         console.log("An error occurred: " + err);
//     }else{
//         console.log(data.toString());
//     }
// } );



//overwrite the files content

// fs.writeFile(myFile, 'Good Day!', (err) =>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('the file was created');
//     }

// });

fs.writeFile('./docs/blog2.txt', 'Good Day!', (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log('the file was created');
    }

});
//append the files content
// fs.appendFile(myFile, 'Bye Bye!', (err) =>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('the file was updated');
//     }

// });


fs.appendFile('./docs/blog2.txt', 'Bye Bye!', (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log('the file was updated');
    }

});