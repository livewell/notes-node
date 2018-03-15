console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

var user = os.userInfo();
var filteredArray = _.uniq(['Kory', 'Kory', 'Ben' , 1 ,2 ,3]);
var res = notes.add(5,4);


console.log(res);
console.log("The answer is:", notes.add(6,3));
console.log(filteredArray);


// fs.appendFile("greetings.txt", 'Hello ' + user.username + "!" + `You are ${notes.age}.`, function(err){
//     if (err){
//         console.log('Error creating file.');
//     }
// });