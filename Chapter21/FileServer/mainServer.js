const {createServer} = require("http");

//adding urlPath
const {parse} = require("url");
const {resolve, sep} = require("path");

//adding Get Method
const {createReadStream} = require("fs");
const {stat, readdir} = require("fs").promises;
const mime = require("mime");

//adding Delete Method
const {rmdir, unlink} = require("fs").promises;

//adding PUT method
const {createWriteStream} = require("fs");

const methods = Object.create(null);
const baseDirectory = process.cwd(); //get the current working dir

//adding PUT method
function pipeStream(from, to){
    return new Promise(
        (resolve, reject) => {
            from.on("error", reject);
            to.on("error", reject);
            to.on("finish", resolve);
            from.pipe(to);
        }
    )
}


async function notAllowed(request){
    return {
        status: 405,
        body: `Method ${request.method} not allowed.`
    };
}

function urlPath(url){
    let {pathname} = parse(url);
    let path = resolve(decodeURIComponent(pathname).slice(1));

    if(path != baseDirectory && !path.startsWith(baseDirectory + sep)){
        throw {status: 403, body: "Nope, Forbidden"};
    }
    return path;
}


//adding PutMethod
methods.PUT = async function(request){
    let path = urlPath(request.url);
    await pipeStream(request, createWriteStream(path));
    return {status: 204};
}

//adding Get Method
methods.GET = async function(request){
    let path = urlPath(request.url);
    let stats;
    try{
        stats = await stat(path);
    } catch(error){
        if(error.code != "ENOENT") throw error;
        else return {status: 404, body: "File not found. Sorry"};
    }

    if(stats.isDirectory()){
        return {
            body: (await readdir(path).join("\n"))
        };
    } else {
        return {
            body: createReadStream(path),
            type: mime.getType(path)
        };
    }
}

methods.DELETE = async function(request){
    let path = urlPath(request.url);
    let stats;
    try {
        stats = await stat(path);
    } catch(error){
        if(error.code != "ENOENT") throw error;
        else return {status: 204};
    }

    if(stats.isDirectory()) await rmdir(path); //remove the directory
    else await unlink(path); //remove the file
    return {status: 204};
}




createServer(
    (request, response) => {
        let handler = methods[request.method] || notAllowed;
        handler(request)
            .catch(
                error => {
                    if(error.status != null) return error;
                    return {body: String(error), status: 500};
                }
            )
            .then(
                
                ({body, status = 200, type = "text/plain"}) => {
                        response.writeHead(status, {"Content-Type": type});

                        if(body && body.pipe) body.pipe(response);
                        else response.end(body);
                }
            );
    }
).listen(8000);



