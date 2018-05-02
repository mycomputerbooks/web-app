var fs = require('fs');
var https = require('https'); //node modules
// fs.writeFile(a, b, c) a = file location, b= what is within the file, c = call back function
//__dirname - look in current folder
fs.writeFile(__dirname + "/index.html", "<h1>HTML is great</h1>", function(error) {
    if (error) {
        return console.log(error);
    } else {
        return console.log("Congrats");
    }
});

var myPhotoLocation = 'https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg';

https.get(myPhotoLocation, function(response) {
    response.pipe(fs.createWriteStream(__dirname + "/mydog.jpg"));
});