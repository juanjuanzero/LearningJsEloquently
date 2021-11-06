# Learning JS Eloquently
Hello, this are my learnings from reading [Eloquent JavaScript](https://eloquentjavascript.net/) and getting up and running with JS. I know some JS in the past, but its an area that i know i can improve in. So here we go!

# Getting Setup

## Working with Node.js
I'm also going to bring in node.js here in this project so that you can run the js for yourself in your machine. You can download node [here](https://nodejs.dev/download/). Install it on your machine if you dont already have it. 

 We'll be using Node.Js to run the code in this project. Once you have Node.js installed in your machine (i am using windows) you can just run a JavaScript file with the ```node``` command like:
 ```console
 node your-js-file.js
 ```
 
# Project Structure
If you have this code downloaded you can run the project files or just copy and past the files here. I'll be following the Chapter structure of Eloquent JS, with each file. I may skip a few chapters early on

# Chapter 1
> Everything is a bunch of bits

In computers everything consists of bits (1s and 0s) arranged together to make up a _value_.

Remember how your computer sometimes says 32 bit and 64 bit. And how games would sometimes be called 8 bit. That's how many 1s and 0s you have to represent a value. Like the number 13 is represented like in 8 bit.:

```
0   0   0   0   1   1   0   1
128 64  32  16  8   4   2   1
```
So in higher bits, you can represent more things with those 1s and 0s.

## Values
So computers work with bits, but to help humans like you and me, those bits are organized into chunks of data thats called are values. Those values vary by type.

## Operators
There are 3 kinds of operators that we will work with in JS. They are called Unary, Binary and Ternary. They are all named for the amount of values they _operate_ on. Some operators are symbols.

### Unary Operators
An example of an unary operator is ```typeof``` in javascript, which gives us the type of a value. 
### Binary Operators
Binary operators are ones we are familiar with in math:

Some equality operators:
- < less than
- <= less than or equal to
- \> greater than
- \>= greater than or equal to
- == equal to
- != not equal to 

Also some logical operators
- && and
- || or
- ! not
### Ternary Operators
This operator really just has one form, it always works on 3 values/parts to it. It has the form of a familiar if/else statement.

```
<condition> ? <return this part if condition is true> : <else return this part>;
```

## Automatic Conversions
JS does its best to be helpful, so it will most of the time try to do its best to read your mind. In this part we'll be using the _chapter1.js_ file in the Chapter1 folder of this repo. Here we have the following code:

```javascript
console.log(8*null)// 0

let fiveminus = "5" - 1;
console.log(fiveminus) //4
console.log(typeof fiveminus) //number

let fiveplus = "5" + 1;
console.log(fiveplus) //51
console.log(typeof fiveplus) //string

let fivename = "five" * 2;
console.log(fivename)// NaN
```
So here you see that the first call to console.log we get 0. The next few lines use a string for 5. When we subutract 1 from a string that "5" turns into a number and we get the result as a number which is the type of the value ```fiveminus```. 

Then with ```fiveplus``` we have the same string "5" but we add 1 to it and the result we get is "51" which is type of string. In this case JS is concatenating the string to get that result.

With ```fivename``` you we see that we get the result of NaN which means Not a number. Since JS does know what to do here.

These changes, are called type coersion, where one type gets coerced into becoming another type because JS is assuming what you are trying to do. Just something to watch for in JS.

# Chapter 2
> Express yourself!

One of the ways we express ourselves is through words. Words have meaning. When we want to express something we say a sentence. Sentence make up of fragments, like little expressions that have meaning (produces a value).

- JS Expression ~ A fragment of a sentense
- JS Statement ~ A full sentense. Most JS statements end with a ; (semicolon)
- A Program ~ A list of statements

Expressions always produce a value. And as we've seen the statements in Chapter 1 we were writting simple statments to declare variables with the word ```let``` (more on this soon).

## Bindings as value types
How does JS keep up with its internal state? To hold on to the values JS has _bindings_. Below the ```holdThis``` is a _variable_ that is _declared_ as the result of the _statement_ 5 * 5.

```javascript
let holdThis = 5 * 5;
```
Will holdThis always be 25? No, you can reassign holdThis to something else like:

```javascript
holdThis = "something else";
```
You can also assign multiple bindings using the ```let``` keyword once.

```javascript
let mood = "light";
console.log(mood); //light
mood = "dark"; //reassign
console.log(mood); //dark

//defining multiple bindings
let one = 1, two = 2;
console.log(one + two); // 3
```

Bindings are more like an arms, that holds on to a variable. It does not _contain_. It holds. This is a weird way of explaining but when we start talking about references then it will become useful.

As far as naming goes you shold use camelCase, and can only have _ (underscores) or $ (dollar signs)

There is another binding keyword ```const``` which is special from of binding that represents a constant. It always points to the same value. Don't use ```var``` since it can cause issues with a few operators.

I'm gonna skip the flow control sections since this is similar in alot of programming languages.

## Bindings as function type
Bindings exist within what is called an _environment_. When a program starts up, it contains bindings already. A function is a piece of program wrapped in a value. When you execute the function it is called invoking, calling or applying the function. Values given to functions are called _arguments_.

# Chapter 3: Functions
Functions in JS are the bread and butter of JS. We define a function using the function keyword () which will contain the parameters of the function and then the body of the function wrapped by {} which defines its _body_ and a ; at the end. The function below is called ```square```. This function takes the argument x and returns its square. 

>Of course here we are assuming that x will always be a number.

```javascript
const square = function(x){
    return x * x;
};

console.log(square(5)); // 25
```
## Function Declarations
Another way we could have declared a function is this

```javascript
console.log(square(5))//

function square(x){
    return x * x;
}
```
See how the call to console.log() occurs before the function, but function is declared after? How could this code possibly work? Well, when functions are decalred this way they are declared globaly and moved up to the top. Notice how the decalration did require a ; either. This makes code easier to read and group together when things get much larger.

## Arrow Functions
> Who shot at me??

A third notation of function is to use an arrow (=>) instead. The arrow comes after the list of parameters and before the body of the function. It needs a semicolon (;) at the end.

```javascript
const square = (x) => {
    return x *x ;
};
```
Its like saying (x) produces { return x *x; };

With this you can even put this in one line and if there is only one parameter name you dont have to use the () to enclose the parameters.

```javascript
const square = x => x *x ;
```

## Funtions as a value
A function binding is just a name that you call a specific peice of a program. More on this later, but you can reassing functions to the declaration, or pass it as a parameter in another function.

## Side Effects
Some functions produce a value while others do not which only results in what is called a _side effect_. Similar to how we take medicine to remove a headache, while theres a side effect of drowsiness.

## Bindings and scope
> an ocean of 1s and 0s, an ocean of words.

In JS bindings defined outside of a function or block (inside the {}) are available to the function. Each scope can look out into the _global_ scope where bindings are defined outside of any function or block.

Bindings declared inside of functions are local to that function only.

Like how pirates can see what is in their ship, but when they look out of their ship they only see other ships (other functions), or items (other bindings globaly available) floating.

When there are similarly named bindings in JS. You will use what is in the local scope first rather than the globaly declared one.

## The Call Stack
When you call a function, the computer has to remember the context from which the call happened. The place where this context is called is the _call stack_.

Everytime a function is called, the current context is stored on the top of the stack, when a function returns, the computer removes the top context from the stack and uses that context to continue execution.

## Optional Arguements
> As many arguements as you want...

JS is broad minded about the number of arguements you pass to a function. If you pass too many, the extra ones are ignored, if you pass too few, the missing parameters get assigned undefined.

You can set optional arguements by creating default values by writing an = to after a parameter.The power function below will in the first call will assign exponent as 2, whereas in the second call exponent will be 6.

```javascript
function power(base, exponent = 2){
    let result = 1;
    for(let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
}

console.log(power(4)) //16
console.log(power(2,6)) //64 
```

## Closure
Remember earlier that I mentioned that functions would be treated as value, and also a functions local bindings (bindings inside) are recreated everytime it is called? 

But after the function is called, do those local bindings inside the function disappear? Nah, they are still available... which we can take advantage of. So theres a reference to a specific instance of a local binding in an enclosing scope, a closure.

See this function below
```javascript
console.log("\nClosures\n");
function wrapValue(n){
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

console.log(wrap1()); //1
console.log(wrap2()); //2
```
So here the wrapValue function is declared, and takes in ```n```. Then the value of ```n``` is bound to the local binding called ```local```, then the function just returns an expression that returns local. 

As you can see when we call the functions ```wrap1``` and ```wrap2``` its like they are separate instances of a function binding.

Here's another example:

```javascript
function multiplier(factor){
    return number => number * factor;
}

let twice = multiplier(2);
let thrice = multiplier(3);
console.log(twice(5)); //5 * 2 = 10
console.log(thrice(5)); //5 * 3 = 15
```
a function bound to the name multiplier is takes in a parameter called ```factor```, when multiplier is called it returns an expression and its own environment with the local binding for ```factor```. The expression takes in one parameter which is called ```number``` and results in the product of ```number``` and ```factor```. 

So the expression ```number => number * factor``` is enclosed inside the multiplier function. Functions contain bth the code in their body and the environent in which they are created. So when ```twice``` and ```thrice``` are called, JS sees the environment in which it they were created which are independed of on another. 

When ```twice``` is created when ```multipler``` was called with a factor parameter bound to 2, and returns a function value bound to ```twice```. JS remembers this env. Therefore, when ```twice``` is called it remembers the factor parameter and multiplies the arguement by 2.

## Recursion
When a function calls its self, is a process called recursion. This is a popular way to solve dynamic programming challenges. Just be careful to set your boundary conditions so that you don't end up in an infinite loop.

## Writing Functions
When you write your functions, keep in mind of how it's going to be used. Don't add cleverness unless you absolutely sure you are going to need it. It can be tempting to write general "frameworks" for every bit of functionality you come across. It will just be an opinion and it will never get used.

## Side Effects or return
Functions can be grouped into two camps, ones called to return a value or ones that are called for their side effect. Although, some are both.

Keep in mind that functions that are called for their return value are easier to work with to combine new ways than ones that do a side effect.

### Pure functions
A pure function is a specific kind of value returning function. It has the following properties:
- No side effects
- Doesnt rely on other side effects from other code (like read global bindings which might change)
- It always produces the same value, in fact it is substitutable for that value

# Chapter 4

## Rest Parameters
if you use the ... when you are working with arrays you can spread one array into another. Or spread it as a parameter

## Destructuring
You can de-structure (decompose?) a data structure into 