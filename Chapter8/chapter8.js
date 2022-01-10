console.log("\n-----Use Strict----\n");

function canYouSeeTheIssue(){
    //"use strict";
    for (counter = 0; counter < 10; counter++){
        console.log("Hello i am happy");
    }
}

canYouSeeTheIssue();