console.log("\n-----Use Strict----\n");

function canYouSeeTheIssue(){
    //"use strict";
    for (counter = 0; counter < 10; counter++){
        console.log("Hello i am happy");
    }
}

canYouSeeTheIssue();

console.log("\n-----Debugging----\n");

function numberToString(n, base = 10){
    let result = "", sign = "";
    if (n < 0){
        sign = "-";
        n = -n;
    }

    do{
        result = String(n % base) + result;
        //console.log(n);
        n /= base;
    } while(n > 0);
    return sign + result;
}

//console.log(numberToString(13, 10));


function numberToStringFixed(n, base = 10){
    let result = "", sign = "";
    if (n < 0){
        sign = "-";
        n = -n;
    }

    do{
        result = String(n % base) + result;
        n = Math.floor(n / base);
        console.log(n);
    } while(n > 0);
    return sign + result;
}

console.log(numberToStringFixed(13, 10));
console.log(numberToStringFixed(130, 10));