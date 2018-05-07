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

var i = 0;
fs.readFile('testFile.txt', function(err, data) {
    if(err) throw err;

    fs.appendFile(__dirname + "/index.html", "\r\n", function (error) {
        if (error) {
            return console.log(error);
        } else {
            return console.log("Congrats 1st line");
        }
    });
    var array = data.toString().split("\n");
    for(i in array) {

        fs.appendFile(__dirname + "/index.html", array[i] += "\r\n", function (error) {
            if (error) {
                return console.log(error);
            } else {
                return console.log("Congrats");
            }
        });


        console.log(array[i]);

    }
});

