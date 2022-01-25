const {createServer} = require("http");
createServer(
    (request, response) => {
        response.writeHead(200, {"Content-Type":"text/plain"});
        //register data events
        request.on("data", chuckOfData =>{
            response.write(chuckOfData.toString().toUpperCase());
        });
        //register end event
        request.on("end", () => response.end());
    }
).listen(8000);