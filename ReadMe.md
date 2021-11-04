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

## Bindings. 
How does JS keep up with its internal state? To hold on to the values JS has _bindings_. Below the ```holdThis``` is a _variable_ that is _declared_ as the result of the _statement_ 5 * 5.

```javascript
let holdThis = 5 * 5;
```
Will holdThis always be 25? No, you can reassign holdThis to something else like:

```javascript
holdThis = "something else";
```
You can also assign multiple bindings using the let keyword once

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

I'm gonna skip the flow control sections since this is similar in alot of programming languages.



## Rest Parameters
if you use the ... when you are working with arrays you can spread one array into another. Or spread it as a parameter

## Destructuring
You can de-structure (decompose?) a data structure into 