console.log("\n--------Callbacks----------\n");

setTimeout(() => console.log("Hello there, timer ended"), 500);

console.log("\n--------Promises----------\n");



let five = Promise.resolve(5);
five.then(value => console.log(`Here it is: ${value}`));

console.log("\n--------Promises & Failures----------\n");

let prom1 = new Promise((_ , reject) => reject(new Error("Failure")))
    .then(value => console.log("Handler 1"))
    .catch(reason => {
        console.log("Caught failure " + reason);
        return "catch's return";
    })
    .then(value => console.log(value,"Handler 2"));

console.log("\n--------Promises & Failures 2----------\n");

let prom2 = new Promise((resolve, reject) => {
    console.log("hello, this is the initial resolution");

    resolve(); //successfully complete the task
}).then(() => {
    throw new Error("failed, oops");
    console.log("never logged because error was thrown before me.");
}).catch(
    () => {
        console.error("hello from catch block");
    }
).then(
    () => { console.log("say this no matter what");}
);


console.log("\n--------Generators----------\n");
function* powers(n){
    for(let current = n;; current *= n){
        yield current;
    }
}
//looking over since the Generator returns an iterator
for(let power of powers(3)){
    if(power > 50) break;
    console.log(power);
}


console.log("\n--------Event Loop----------\n");

let start = Date.now();
setTimeout(() => {
    console.log("Timeout ran at", Date.now() - start)
}, 20);

while (Date.now() < start + 50){}
console.log("Here we are at the end", Date.now() - start);

