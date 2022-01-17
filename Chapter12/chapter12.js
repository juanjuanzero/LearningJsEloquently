function parseExpression(programLogic){
    programLogic = skipSpace(programLogic);
    let match, expression;
    if(match = /^"([^"]*)"/.exec(programLogic)){
        //console.log("found string");
        expression = {
            type: "value", 
            value: match[1]
        };
    }else if(match = /^\d+\b/.exec(programLogic)){
        //console.log("found number");
        expression = {
            type: "value",
            value: Number(match[0])
        };
    }else if(match = /^[^\s(),#"]+/.exec(programLogic)){
        //console.log("found id");
        expression = {
            type: "word",
            name: match[0]
        };
    }else{
        throw new SyntaxError("Unexpected syntax: " + programLogic);
    }

    return parseApply(expression, programLogic.slice(match[0].length));
}

function skipSpace(string){
    let first = string.search(/\S/);
    if(first == -1) return "";
    return string.slice(first);
}

function parseApply(expression, programLogic){
    programLogic = skipSpace(programLogic);

    //if there is no remaining open parenthesis..
    if(programLogic[0] != "("){
        return {expression: expression, rest: programLogic};
    }

    //there is an apply expression, we need to parse it
    programLogic = skipSpace(programLogic.slice(1));
    expression = {
        type: "apply",
        operator: expression,
        args: []
    };
    //read everything inside the paren until you reach the closing paren
    while(programLogic[0] != ")"){
        //parse an expression and add it to the arg array
        let arg = parseExpression(programLogic);
        expression.args.push(arg.expression);

        programLogic = skipSpace(arg.rest);

        if(programLogic[0] == ","){
            //if there is more skip a space
            programLogic = skipSpace(programLogic.slice(1));
        } else if(programLogic[0] != ")"){
            throw new SyntaxError("Expected ',' or ')'");
        }
    }
    //move the reader one char over
    return parseApply(expression, programLogic.slice(1));
}

function parse(programLogic){
    let {expression, rest} = parseExpression(programLogic);
    if(skipSpace(rest).length > 0){
        throw new SyntaxError("Unexpected text after program");
    }
    return expression;
}

console.log(parse("+(a, 10)"));

const specialForms = Object.create(null);

function evaluate(expression, scope){
    if(expression.type == "value"){
        //if its just a value then return the value
        return expression.value;
    }else if(expression.type == "word"){
        //if its a binding, then we check if its in scope
        if(expression.name in scope){
            return scope[expression.name];
        } else{
            //if not return an error
            throw new ReferenceError(`Undefined binding: ${expression.name}`);
        }
    }else if(expression.type == "apply"){
        let {operator, args} = expression;
        //check if the apply cation hasa word and it in the specialForms
        if(operator.type == "word" && operator.name in specialForms){
            //if it is get the function and pass in the arg expression with the scope. this is for expressions like if, do, while etc...
            return specialForms[operator.name](expression.args, scope);
        }else {
            let op = evaluate(operator, scope);
            //then it is a function
            if(typeof op == "function"){
                //we verify that it is and map the arguments can call it.
                return op(...args.map(arg => evaluate(arg, scope)));
            } else{
                throw new TypeError("Appying a non-function");
            }
        }
    }
}

specialForms.if = (args, scope) => {
    if(args.length != 3){
        throw new SyntaxError("Wrong number of args to if");
    }else if(evaluate(args[0], scope) !== false){
        return evaluate(args[1], scope);
    }else{
        return evaluate(args[2], scope);
    }
};

specialForms.while = (args, scope) => {
    if (args.length != 2) {
        throw new SyntaxError("wrong number of args to while");
    }

    while (evaluate(args[0], scope) !== false){
        evaluate(args[1], scope);
    }

    return false;
};

specialForms.do = (args, scope) => {
    let value = false;
    for (let arg of args){
        value = evaluate(arg, scope);
    }
    return value;
};

specialForms.define = (args, scope) => {
    if(args.length != 2 || args[0].type != "word"){
        throw new SyntaxError("Wrong use of define, sorry not sorry!");
    }
    let value = evaluate(args[1], scope);
    scope[args[0].name] = value;
    return value;
}

console.log("\n-----------The Environment-----------\n");

const topScope = Object.create(null);

topScope.true = true;
topScope.false = false;

let prog = parse(`if(true, false, true)`);
console.log(evaluate(prog, topScope)); //false

for(let op of ["+", "-", "*", "/", "==", "<", ">"]){
    topScope[op] = Function("a, b", `return a ${op} b;`);
}

topScope.print = value => {
    console.log(value);
    return value;
};

function run(program){
    return evaluate(parse(program), Object.create(topScope));
}

run(`
    do(
        define(total, 0),
        define(count, 1),
        while(
            <(count, 11),
            do(
                define(
                    total,
                    +(total, count)
                ),
                define(
                    count,
                    +(count, 1)
                )
            )
        ),
        print(total),
        print(count)
    )
`);


console.log("\n-----------Functions-----------\n");

specialForms.fun = (args, scope) => {
    if(!args.length){
        //the last argument is expected to be the body.
        throw new SyntaxError("Functions need a body");
    }
    //get the body, the last arguement.
    let body = args[args.length - 1];
    //get all of the arguments and make sure they are words.
    let params = args.slice(0, args.length - 1).map(expression => {
        if(expression.type != "word"){
            throw new SyntaxError("Parameter names must be words");
        } return expression.name;
    });

    return function(){
        //check the number of arguments and see if they match
        if(arguments.length != params.length){
            throw new TypeError("Wrong number of arguments");
        }

        //create a scope, and positionaly "bind" the parameters with the argument values.
        let localScope = Object.create(scope);
        for(let i = 0; i < arguments.length; i++){
            localScope[params[i]] = arguments[i];
        }

        //call evaluate on the function to execute it with the arguments.
        return evaluate(body, localScope);
    };
};

run(
    `do(
        define(
            plusTwo,
            fun(a, +(a, 2))
        ),
        print(
            plusTwo(2)
        )
    )`
);