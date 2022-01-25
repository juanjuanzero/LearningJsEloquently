const {request} = require("http");
request(
    {
        hostname: "localhost",
        port: 8000,
        method: "POST"
    },
    response => {
        response.on("data", chunkOfData =>{
            process.stdout.write(chunkOfData.toString());
        });
    }
).end("Hello Server");