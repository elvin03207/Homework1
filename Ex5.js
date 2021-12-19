function filling_file(pathToFile, givenString) {
    const fs = require("fs");

    fs.writeFile(pathToFile, givenString, function (err) {
        if (err) return console.log(err);
        
    });


    fs.readFile(pathToFile, (error, data) => {
        if (error) {
            throw error;
        }
        if (data.toString().indexOf(givenString) !== -1) {
            console.log(data.toString() + "  --- checked");
    }


    });
}


filling_file(__dirname + '\\text.text', "i am hungry");