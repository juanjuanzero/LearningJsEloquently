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
console.log("Closures\n");
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
When working with the real world, it can get overwhelming to create all of those bindings just to solve your problem. It makes more sense to havce a structure that could make up those bindings that you already made. Those are called objects. 

The example problem is the WereSquirel Jaques who sets out to identify the root cause of his condition. Turning into a squirel... 
## Datasets
To work with data you will end up using data structures. Lets say we wanted to work with numbers. JS has a data strucutre called an array to store that collection of numbers like so:

```javascript
let arrayOfNumbers = [2,3,5,7,11,14];
console.log(arrayOfNumbers[2]); //5
console.log(arrayOfNumbers[0]); //2

//properties
console.log(arrayOfNumbers.length);//6
console.log(arrayOfNumbers["length"]);//6
```

For arrays you can access a particular value on the list using the [] (square brackets) and providing the zero-based index of the value that you want.

## Properties
Objects have properties. You can see that in the code we write ```arrayOfNumbers.length``` to access the ```length``` property of the ```arrayOfNumbers``` object. There are two main ways to access a property in JS. You can either use a dot like ```arrayofNumbers.length``` or square brackets like ```arrayOfNumbers["length"]``` 

## Methods
When objects perform a specific behavior they also have properties that hold function values. These are called methods. Like how its an object does something or rather its _method_ of doing something.

```javascript
//methods
console.log("\nMethods:");
let oops = "Doh";
console.log(typeof oops); //string
console.log(typeof oops.toUpperCase); //function
console.log(oops.toUpperCase()); //DOH
```
In the code we bind the string ```"Doh"``` into the name ```oops```. ```oops``` is a string object. We access the method of the string called ```toUpperCase``` which takes the string and returns the string in all CAPS.

The properties than an object contain vary on its type.

## Objects
So back to the example, Jacques is trying to determine what is causing him to turn. He logs his events and writes down whether he turned into a squirel or not. 

In JS there a type called an object that are arbitrary cllections of properties (and methods, which are also properties with functions as values). Here is a Jaques first logged day:

```javascript
console.log("\nObjects:");
let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};

console.log(day1.squirrel); //false
console.log(day1.chicken); //undefined

//adding another property after
day1.chicken = true;
console.log(day1.chicken); //true
```

So here we created bind an object into day1 and its has the property for ```squirrel``` (a boolean) and ```events``` (a string array). Its wrapped in ```{}``` and ends with a ```;```.

you can also see that we can add a property like chicken once it was already declared by assigning a binding to the object. 

```javascript
delete day1.chicken;
console.log(day1.chicken); //undefined
```

You can also use the delete operator to remove the binding (cutting off an arm). It doesnt happen often but it can! 

If you want to check what propertie an object has you can use the ```in``` operator to check if a particular property is in an object or the Object.keys method to see all of the properties an object has.

```javascript
//checking if a property is in an object
console.log(Object.keys(day1)); //['squirrel', 'events']
console.log("squirrel" in day1); //true
```
## Mutability
Certain types that you will deal with are what is called _immutable_ which means the values of those types are impossible to change. Some examples are strings, numbers and Booleans.

Objects are the opposite, they are *mutable*. The values in their properties can be different.

Objects They could have the same values, in their properties but the references are different which makes them different objects.

Think about having the numbers 120 and 120. But if you have two object with ```{ value : 120}``` and ```{value: 120 }```. These objects are different. There is a difference between having two *references* to the same object and having two objects that have the same properties.

```javascript
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2); //true
console.log(object1 == object3); //false

object1.value = 15;
console.log(object2.value);//15
console.log(object3.value);//10
```
In the above ```object1``` and ```object2``` are the same because they are bindings to the same object. Whereas ```object3``` is different object instance it just happens to have similar properties. Using the ```==``` operator, we are comparing their identities.

> There is no content to content comparison out of the box with JavaScript. Although you can implement your own easily.

## Pizza's and Squirrels
In the example in the book, Jacques starts recording events in his life and the moments that he turned into a squirrel. With this you can calculate the phi coefficient to, which just measures if the two events are related. 

> Gonna step out a bit here, since the data is in the sandbox as a part of the book. But it is downloadable

We use the Correlation formula (phi) to do this. Then we setup a getter to get the parameters we would pass into the phi function. Then we just looking for the one with the largest correlation.

## Array Methods

#### shift and unshift
you can add elements to an array using push (at the end), and remove them using pop (at the end). The ```shift``` method and ```unshift``` method add and remove elements at the start of an array.

```javascript
console.log("\narray methods");
let thingsToDo = [];
thingsToDo.push("hello");
thingsToDo.push("world");
thingsToDo.push("how");
thingsToDo.push("are");
thingsToDo.push("you?");
thingsToDo.push("huh?")

console.log(thingsToDo);
//[ 'hello', 'world', 'how', 'are', 'you?', 'huh?' ]

console.log(thingsToDo.pop()); //huh?
console.log(thingsToDo); //[ 'hello', 'world', 'how', 'are', 'you?' ]

//shift (removes) unshift (adds)
console.log(thingsToDo.shift());// hello
console.log(thingsToDo.shift()); //world

thingsToDo.unshift("hi!");
console.log(thingsToDo); //[ 'hi!', 'how', 'are', 'you?' ]
```
#### indexOf and lastIndexOf
If you are looking for an item inside the array there are methods ```indexOf``` and ```lastIndexOf``` which return the index of the item you pass in, the difference is indexOf starts at the beginning whereas lastIndexOf starts the the end of the array.

```javascript
console.log("\narray methods: index")
let arrayOfNumbers2 = [1,2,3,4,5,6,7,8,1,9,10];

console.log(arrayOfNumbers2.indexOf(1)); //0
console.log(arrayOfNumbers2.lastIndexOf(1)); //8
```
#### Concat and Slice
You can combine arrays and dice them up using the concat and slice methods.

## String Methods
Things are similar to arrays in that they are just arrays of char fields, they are a string of chars. So the same methods may work there. 

But since we are working with words there are also additional methods.

```javascript
console.log("\nstring methods:")
let hw = "   hello world how are you?   ";
console.log(hw.length); //30
console.log(hw.indexOf("world")); //9 (world starts at index 9)

hw = hw.trim(); //trim spaces
console.log(hw.length); //24

let arrayOfHw = hw.split(" ");
console.log(arrayOfHw); //[ 'hello', 'world', 'how', 'are', 'you?' ]
```

### Rest Parameters
When working with arrays, it can be useful to pass in the entire array as individual values. In JS there is the rest parameter to pass the entire array as parameters into any function or a way to create new arrays.

Use the ... when you are working with arrays you can spread one array into another. Or spread it as a parameter into a function.

```javascript
console.log("\n rest parameters");

let words = ["you", "are"];
let finalWords = ["hope", ...words ,"having", "a", "good", "day"]
console.log(finalWords);
```

### Destructuring
You can de-structure (decompose?) a data structure into its elements by enclosing parameters in square brackets[]. 

For example instead of doing below where you are accessing the table with hard coded indexes.

```javascript
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}
```

You can do the following:
```javascript
function phi([n00, n01, n10, n11]) {
  return (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) * (n00 + n01) *
              (n01 + n11) * (n00 + n10));
}
```
So as long as you are passing in an array, the positions will map to the positions of the characters. The [] brackets allow you to look inside the value.

## JSON
Properties only grasp their value, which means that objects and arrays really just hold the memory addresses of their contents. 

So this is what is going on inside your computer, but what if you wanted to share this with another computer? Would you just send them the same memory addresses?

You can *serialize* that data (turn it into a flat description). JSON is a popular serialization format and serializes objects and data as a string.

In JSON, the way you create objects are similar to JS objects. Its just that the names have to be in double quotes and only simple data expressions are allowed. No functions or binding or anything that involves computation.

```javascript
let string = JSON.stringify({squirrel: false, events: ["weekend"]});
console.log(string);
//{"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string).events);
// → ["weekend"]
```
In the code above you have JS object passed as a parameter into the JSON.```stringify()``` function. This returns a string which describes the object as  JSON. Then we take that string and pass it as an arguement into the ```JSON.parse()``` function to get the events property of the the returned JS object.

# Chapter 5
> Nice abs, Do you workout?

Abstractions hide details and give us the ability to talk about problems at a higher level. 

> It is a useful skill, in programming, to notice when you are working at too low a level of abstraction.

When you are so low of a level of abstraction, you wont really be working with the concepts that you are concerned about. You are using things that may not even relate to your problem... which leads to confusion... and bugs.

In JS, you can abstract "doing something N times" in to a fuction. Like so:

```javascript
function repeast(n, action){
    for(let i = 0; i < n; i++>){
        action(i);
    }
}

repeat(3, console.log);
//0
//1
//2
```

But you dont have to pass in a function, you can just pass in a function value. Below we are passing in an expression, which is just in a single line.

```javascript
//creating a funtion value (an expression)
let labels = []
repeat(5, i => labels.push(`Hello ${i + 1}`)); //using backtics for string literal 
console.log(labels);
//[ 'Hello 1', 'Hello 2', 'Hello 3', 'Hello 4', 'Hello 5' ]
```

Repeat is an example of a higher-order function. They operate on other functions by either taking them as arguements or by returning them. 

Higher order functions allow for you to create abstractions over other functions. For example. Below allows you to create easier functions to work with.

```javascript
function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
//true
```

The greaterThan10 is created from the greaterThan function, and abstracts away the greaterThan function.

```javascript
function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1
```
The noisy function here takes in a function, ```f```, and returns an expression with the parmeter ```...args``` that logs "calling with", and then executes the function with the ```...args``` as the arguements and logs the result and writes it to the console.

## Filtering Arrays
You can filter arrays using the Array.filter method. This function takes in a function as the test to determine whether it should be added or not.

## Transforming with Map
The map method transforms an object by applying the function that you pass into it to that object.

## Sumarizing with Reduce
The reduce function takes in a combining function that results in a single summary value.

```javascript

  console.log("\nreduce");
  console.log([1,2,3,4,5].reduce((a,b) => a + b)); //15
```
The reduce funtion in the example above starts at the first value which take 1 and 2 as arguements. 1 + 2 = 3. Then the returned result gets passed in to the next iteration, 3 + 3.
 
## Composing
The value that you get from these array methods really add up when you start to put them to work together. Its like piping the results from one method into another or using the results into another. And further more, when you uses these abstractions you can see that your code is much more easier to read.

## Strings and Character Codes
In JS strings are encoded as a sequence of 16-bit numbers. These are called *code units*. When it became clear that 16 bits was not enought, UTF-16 was invented to account for less common characters. For the common characters UTF-16 uses a single 16-bit code, however, UTF-16 uses a pair of 16-bit units to account for the less common characters.

In JS, a few strings opertions like the length property, or the [] accessor for contents deal only in code units. THe ```charCodeAt``` in JS will give you *a* code unit, not a full character code. Whereas, the ```codePointAt``` gives you the Unicode character.

# Chapter 6
## Encapsulation
In object-oriented programming the goal is to divide out the program into smaller chuncks to make each manage its own state. Then those chunks/pieces work together to get something done. So then each piece can go about itself without affecting other pieces, discrete points of knowledge is kept isolated in each piece.

### Interfaces
The different pieces of the program interact with each other through what is called *interfaces*. These are functions that add functionality at a more abstract level, the implementation is hidden within the function.

Interfaces consist of *methods* and *properties* which are designated as public properties (methods and properties). An object can have private properties, which outside code has no access of using. Private properties are not a part of the *interface* because an interface is how outside code works with the object.

#### Methods
Remember how in earlier chapters we had variables that held functions. Methods are just properties that hold functions as values.

```JavaScript
let rabbit = {};
rabbit.speak = function(line){
  console.log(`The rabbit says '${line}'`);
};

rabbit.speak("Ha!! I'm alive!");
//The rabbit says 'Ha!! I'm alive!'
```
Here we create an empty object and add a speak *method* (property called speak) that is a function that returns a string.

#### this in JavaScript
When you are working with methods, it is typical that a method will do something with the object is called on.

```javascript
function speak(line){
  console.log(`This ${this.type} rabbit says '${line}'`);
}

let filipinoRabbit = {type: "pinoy", speak};
let hungryRabbit = {type:"hungry", speak};

filipinoRabbit.speak("Hoy! What's up doc?");
hungryRabbit.speak("I would like a carrot please.");

```
Here we have speak function that we make a method when we instantiate the ```filipinoRabbit``` and the ```hungryRabbit```. The speak method has the line that uses ```this.type``` to access the type that is in each object.

You can also using the call method on the function which takes the object instance (what would be ```this```) and then the rest of the parameters.

```javascript
speak.call(hungryRabbit, "Yum!");
```

Each function has its own ```this``` binding which gets passed in like the case in the call method of the speak function we defined. The key difference here is the ```this``` changes with the way its called. We've seen ```this``` refer to the object instance used in a method call and using the call method in the speak function above. 

#### Arrow Functions and this
In JavaScript Arrow Functions behave differently when working with ```this``` keyword. They dont bind their own this but can see the ```this``` binding around them.

## Prototypes
In addition to their own properties most objects also have *prototypes*. Its like a fall back object for properties. When an object gets a request for a property that it does not have, its prototype is searched for the property, then the prototypes properties and so on an so on...all the way down.


```javascript
console.log(Object.getPrototypeOf({}) == Object.prototype);
//true
console.log(Object.getPrototypeOf(Object.prototype));
//null
```
The ancestor of an empty object is ```Object.prototype```, the prototype of that is null. However, many objects have their own prototype which provide a different set of properties. Functions derive from ```Function.prototype``` and arrays derive from ```Array.prototype```.

```javascript
console.log(Object.getPrototypeOf([]) == Array.prototype);
```

We can use Object.create to create an object with a specific prototype.

```javascript
//create a prototype
let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit exclaims '${line}'`);
    }
};
let killerRabbit = Object.create(protoRabbit); //create an object with a prototype.
killerRabbit.type = "killer";
killerRabbit.speak("MUUUUUUUUUUUUURRRRDER!!!");

let hungerRabbit = Object.create(protoRabbit); //create an object with a prototype.
hungerRabbit.type = "hunger";
hungerRabbit.speak("Hunger!!!");
```

See how the killerRabbit and the hungerRabbit both share the same implementation? This is because they derive from the same prototype of protoRabbit.

## Classes
In OOP there's a concept called classes where a class defines a shape of an object (the methods and properties it has). This object is called an instance of the class. Prototypes then is like an informal take on a class like how the protoRabbit defined the properties of the killerRabbit and hungerRabbit instances.

When you want to create instances of a class you also have to make sure that the instance has the appropriate properites. When we created the killer and hunger Rabbits, we had to assign values to it's type properties. That would be cumbersome, so instead we have *constructor functions* aka *constructors*

```javascript
function makeRabbitInstance(type){
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}

let kindRabbit = makeRabbitInstance("kind");
kindRabbit.speak("Hello, what a pleasure it is to meet you.");
```
Here we assign the type passed in to the type property and also have the Object.create() to create a protoRabbit for us.

JavaScript has an even nicer way to doing this by creating a function the ```new``` keyword, by convention we will capitalize the function name to signify that it creates an object.

```javascript

function Rabbit(type){
    this.type = type;
}
Rabbit.prototype.speak = function(line){
    console.log(`This ${this.type} rabbit says '${line}'`);
}

let kinderRabbit = new Rabbit("kinder");
kinderRabbit.speak("Hello, you look nice today");

let meanRabbit = new Rabbit("mean");
meanRabbit.speak("barg barg barg!");
```
Here we created a new instance of a Rabbit called kinderRabbit and meanRabbit using the ```new``` keyword. We access the prototype property of the Rabbit function to assign the speak property of the prototype to a function that logs to the console.

> All constructors automatically get a property named prototype which can point to another prototype. Recall how the empty object derives from Object.prototype.

### Class Keyword
In 2015, JavaScipt we have less awkward notation for constructing objects. With the ```class``` keyword you can declare a class and define a special function called ```constructor``` which handles the construction of object instances. Other properties like the *speak method* is also defined in the class declaration. 

```javascript
//declaring a class
class OtherRabbit{
    constructor(type){
        this.type = type;
    }

    speak(line){
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let otherKinderRabbit = new OtherRabbit("other kinder");
otherKinderRabbit.speak("Hello, you even nicer today");

let otherMeanRabbit = new OtherRabbit("other mean");
otherMeanRabbit.speak("barg barg barg BORK!");
```

Here we declare a class called OtherRabbit using the class keyword. There is a special function called constructor that initializes the type property of the object. We create two instances of otherKinderRabbit and otherMeanRabbit.

### How do you handle non-fuction values as properties?
For now you can only have methods in an class declaration in JS. You can create non-function properties by directly manipulating the prototype after you've defined the class.

### Can you have multiple constructors?


