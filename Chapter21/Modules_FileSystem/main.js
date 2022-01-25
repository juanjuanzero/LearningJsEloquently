let {readFile} = require("fs");
readFile("file.txt", "utf-8", (error, text) => {
    if(error) throw error;
    console.log("Hey here are the file contents: ", text);
});