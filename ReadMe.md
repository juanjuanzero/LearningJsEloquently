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

### Overriding Properties
You can override properties on the prototype by having properties on the object with the same name. For example, if you call toString on an array you get something close to calling the join method on the array. However, if you call Object.prototype.toString you will get something else.

## Maps
Maps in JavaScript is basically similar to dictionaries in python or C#. Its a data structure of a collection of key-value pairs, the values are accessed through keys, and check if a key is in a Map.

Below we use a plain object to create a Map in JavaScript (a bad idea).

```javascript
let ages = {
  Boris: 29,
  Liang: 22,
  Julia: 60
};
//access a value in
console.log(`Julia is ${ages["Julia"]}`); //60
//check if a key is in a Map
console.log(`Is Jack's age known?`, "Jack" in ages); //false
//something weird
console.log(`Is toString age known?`, "toString" in ages); //true?
```
Its weird how toString is in ages right? This is because toString is a property of ages (a Map object instance) and plain object derive from *Object.prototype*, so it looks like the property is there eventhough it shouldn't be. 

This is why using a plain object as a Map is dangerous and this is why the Map class is available to us in JavaScript.

```javascript
let agesMap = new Map() 
agesMap.set("Boris", 29);
agesMap.set("Liang", 22);
agesMap.set("Julia", 60);  
//access a value in
console.log(`Julia is ${agesMap.get("Julia")}`); //60
//check if a key is in a Map
console.log(`Is Jack's age known?`, "Jack" in agesMap); //false
//something weird
console.log(`Is toString property available?`, "toString" in agesMap); //true?
console.log(`Is toString key in keys?`, agesMap.has("toString")); //false
```

Here we create a Map object and use the set and get methods to work with the key-value pairs of the Map object. The Map object has the toString property since it still derives from Object.prototype, however, now when you check for a key you see tells you the correct information.

## Polymorphism
Remember earlier where you have a String function which tries to create a meaningful string from whatever type is passed into it. The String fuction works with the toString method to do create that meaningful string. The toString method is an interface that is on an object. So in the cased of the String object, anything that supports the toString method (interface) will work with the the String function. The String function can work with many (poly) shapes (morph), it doesnt care what object it is, or class, as long as it implements the interface it cares about, in this case the toString method. This is polymorphism.

## Symbols
It can be possible for many interfaces to use the same property name for different things. Its not really a problem in the wild but JavaScript has Symbols to help with this type of issue.

> Property Names are Symbols

Symbols are values created with the Symbol function and newly created symbols are unique.

```javascript
console.log("\n----Symbols---\n");
let sym = Symbol("name");
console.log(sym == Symbol("name")); //false
Rabbit.prototype[sym] = 77;
let awesomeRabbit = new Rabbit("awesome");
console.log(awesomeRabbit[sym]); //77
```

You can then define symbols alongside similarly named interfaces with different implementations.

```javascript

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function(){
    return `${this.length} is the length of the array`;
};

console.log([1,2,3].toString()); //1,2,3
console.log([1,2,3][toStringSymbol]()); //our symbol
```
Here we create a symbol with the name toString and then assign the prototype property of the array with a function. We then also access the function using [] with the () next to it.

### The iterator interface
Objects given to a for/of loop is expected to be *iterable*, which has a method named with the *Symbol.iterator* symbol. When this is called this retors an object that provides a second interface called *iterator* which actually does the iterating.

Iterators has a *next* method that returns the next result. The result is an object with a value and a done property. Done means the iterator is done iterating meaning there are no more items to go next.

Remember how strings are just a bunch of characters chained together (strung together). With that in mind we can use that ourself.

```javascript
let stringIterator = "Hello"[Symbol.iterator]();
console.log(stringIterator.next()); //H
console.log(stringIterator.next()); //e
console.log(stringIterator.next()); //l
console.log(stringIterator.next()); //l
console.log(stringIterator.next()); //o
console.log(stringIterator.next()); //done is true
```
Here we have a string and assign the value of the iterator object on the string to the variable ```stringIterator```. Then all we do is the next method to iterate through the string until we reach the done point.

### Getters, Setters and Statics
Getters are methods that are in an interface of an object. This is done using the get keyword infront of the method call. 

```javascript
//object with a getter
let varyingSize = {
    get size(){
        return Math.floor(Math.random() * 100);
    }
}

console.log(varyingSize.size); //random number
console.log(varyingSize.size); //random number
```
Here we create an object with a size property that returns a random number. This size() is really a *getter*. There are also setters which is a similar effect.

```javascript
class Temp {
    constructor(celsius){
        this.celsius = celsius;
    }

    get fahrenheit(){
        return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value){
        this.celsius = (value - 32) / 1.8;
    }

    static fromFahrenheit(value){
        return new Temp((value - 32) / 1.8);
    }
}

let t1 = new Temp(0);
console.log(t1.fahrenheit); //32, freezing

t1.fahrenheit = 86;

console.log(t1.fahrenheit); //86
console.log(t1.celsius); //30
```

The Temp class has a constructor that takes in the temperature in Celsius. The getter and set methods are both in fahreheit so a conversion needs to be done when the value is returned. The *setter* takes in a parameter called ```value``` it is what was passed in as to the *setter* method and the value for celsius is set as the converted value. 

The Temp class also allows you to have a static method that returns an instance of a Temp class. You can access this static method without first having to create an instance of a class.

```javascript
let t2 = Temp.fromFahrenheit(100);
console.log(t2.celsius); //37.77777778
console.log(t2.fahrenheit); //100
```
## Inheritance
you can create a class (a subclass) using the extends keyword to extend the properties of another class (a super class). In this way the you are inheriting the other class' properties and modifying it slighting (or extending it). This is called Inheritance. 

## InstanceOf Operator
You can use the instanceOf operator to check if an object is a direct instance of another.

```javascript
console.log(t1 instanceof Temp);//true
console.log(t1 instanceof Rabbit);//false
```

### Excercise Notes
When you are overriding an iterator on the class declaration all you have to do is override the ```Symbol.iterator``` property and all that property does is instantiates an iterator class that gives the value of an iterable collection through an object with a ```value``` property and a boolean ```done``` property 

# Chapter 7
So chapter 7 is a project that the book outlines as a thing that you should do. I'm not going to go through the project at the moment. Maybe i'll come back to it some othe time.

# Chapter 8
## Bugs, Errors and JavaScript
You might be use to a language that cares a lot about how you write things, and there may be tooling available to tell you if something is messed up in the code. For example, when you try to use a different primitive types in a function in C#, the dreaded red-squigly line shows up. But because JavaScript is so loose about it the language itself does not catch those kind of things, and therefore wont let the user know until it reaches someone.

## Strict Mode
JavaScript has a scrict mode that you can enable, but that only goes so far. You can add ```"use strict";``` at the top of the file or at the top of a function declaration.

```javascript
function canYouSeeTheIssue(){
    //"use strict";
    for (counter = 0; counter < 10; counter++){
        console.log("Hello i am happy");
    }
}

canYouSeeTheIssue();
```
The code above will run with no problem; but the issue is that counter is not declared (putting ```let``` or ```const```) within the scope of the for loop, so its declared globaly which could lead to massive confusion. When ```use strict``` is uncommented out then you can see that there is a reference error. 

>Being told something is wrong immediately is very helpful

## Types
JavaScript considered types only when actually running the program. Use TypeScript.

## Testing
Use a test suite. Yep, that's it.

## Debugging
When you are debugging you can see that there is an error. First resist the urge to make changes to the program randomly. Instead come up with a theory and test it out. This is the difference between someone who is screwing around and a professional.

Consider the following function. It's suppose to convert a whole number to a string in a given base by repeatedly picking out the last digit and then dividing the number to get rid of the digit.

```javascript

function numberToString(n, base = 10){
    let result = "", sign = "";
    if (n < 0){
        sign = "-";
        n = -n;
    }

    do{
        result = String(n % base) + result;
        n /= base;
        //console.log(n);
    } while(n > 0);
    return sign + result;
}

console.log(numberToString(13, 10));
```
So there is obviously a bug here, because we are getting an unexpected result. After looking into the do loop, and placing a console.log() in the do loop you see the error, you can't actually get a whole number just by dividing 10 every time.

Here is the fixed code using Math.floor() to acutually escape the do-while loop.
```javascript

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
```

## Error Propagation
Not all problems can be prevented, sometimes you get wrong information, something gets overloaded with work or the whole communication fails. Such is life, samething happens to computers. 

When you are programming you want the program to do something better than just crash, sometimes you'll want to take the bad input in stride let the user know and then fail or actively do something in response of the problem.

## Exceptions
>You are the only exception... and i'm on my way to believe it.

If only exceptions dealt with love stories. When a function cannot proceed normally the prefered thing we want to do is to immediately jump to a place that knows how to handle a problem. This is called Exception Handling.

Exceptions are a mechanism that makes it possible for code that runs into a problem to raise and exception. It jumps out of not only the function but also its callers all the way down to the first call that started the execution. This is called *unwinding the stack* recall how the stack is a stack of contexts with its own bindings.

How can exceptions become useful then? We'll as you encounter them, you can plan to catch them in your code. Once you've caught it, then you can do something it.

You can wrap functions inside a try-catch-finally block. The ```try``` part is where you'd normally your code. The ```catch``` block is where you'd do to handle exceptions, like email something one, log someething or throw another exception. The ```finally``` block is code what gets executed no matter what happens.

The thing is finding where to best place a try catch block is a bit tricky. If there is a piece of code that can do alot of damage, then its probably best if it was wrapped in a try catch block.

## Selective Catching
Sometimes the only thing you can do is let the exception run through. However, for cases like node.js it will stop the process it is running on.

Its bad practice to just have a blanket catch when trying to handle exceptions. There are instances where you can be hiding useful information to solve an issue. Sometimes its better to extend the Error() class into another error class that you can throw, and then see if an Error is an instance of that using the ```instanceOf``` operator to handle things appropriately.

## Assertions
You can add assertions in your code to check if you have made any mistakes.

# Chpater 9
Gonna skip this one for now.

# Chapter 10
Some programs as they are architected to where everything is tied together. Does that make for good design? Not really, because it would be hard to focus on one peice of the program. And if you take one thing out, then the whole things falls apart and your hands get dirty. This is why those kinds of programs can be called a "big ball of mud"

## Modules
Modules are an attempt to avoid these problems. A module is a piece of program that specifies which other pieces it relies on and which functionality it provides for other **modules** to use. 

Modules are like LEGOs where they have well-defined connectors (interfaces). These connectors (interfaces) is how code outside of the module interacts with the module. Everything else is private.

Relationships between modules are called dependencies. A module will know what other modules it will depend on.

## Packages
A package is really just a chunck of code that can be distributed as its own discrete piece of code. It can contain one or more **modules** and know what other modules it depends on.

### npm: two things
NPM is JavaScript's online service that users can go to to download and upload packages. It is also a program bundled with Node.js that helps users install and manage packages.

Having packages helps everyone be more productive. Instead of 10 people writting the same code, 1 person could write it as a package and share that code with 9 other people.

It would certainly be nice to load in the dependent modules of the modules that you just downloaded. Fortunately JavaScript has a way to do that.

## Evaluating data as code
Before teams would have had to improvised modules to make things work. JavaScript has a eval() function that you can use to evaluate a passed in string, however, using the eval() function can lead to unexpected behavior. Instead we can use the Function constructor to pass in a string as a function.

## CommonJS
The most widely used approach to bolted-on JavaScript. The main thing with CommonJS is the keyword ```require```. Which brings in dependencie and makes the available in the local scope of a program. CommonJS loads these through a loader and returns its interface.

Consider the following code as a module called format-date. I've saved it as the **format-date.js** file in this chapter:

```javascript
const ordinal = require("ordinal");
const {days, months} = require("date-names");

exports.formatDate = function(date, format){
    return format.replace(/YYYY|M(MMM)?|Do|dddd/g, tag => {
        if(tag == "YYYY") return date.getFullYear();
        if(tag == "M") return date.getMonth();
        if(tag == "MMMM") return months[date.getMonth()];
        if(tag == "D") return date.getDate();
        if(tag == "Do") return ordinal(date.getDate());
        if(tag == "dddd") return days[date.getDay()];
    });
};
```
The keyword ```require``` references the **ordinal** and **date-names** modules available for download at npmjs.com. ordinal is a single function that parses the date where as date-names contains an array of days and an array months that we access in the function. We are *desctructuring* (mentioned earlier) to get days and months from the  date-names dependency.

Then with the ```exports``` keyword the module add a function called formatDate which is the function (interface) that outside code can use to format dates.

Now to use this module we'll need to install ordinal and date-names as a module. In the command line we run the following lines in the terminal. Note: i already have node.js installed.

To install the ordinal module locally:
```
npm install ordinal
```
To install date-names module locally:
```
npm install date-names
```
Then in a place where we'd want to use the format-date module, we can just call up the require method for that module. In the chapter10.js file we have the following code.

```javascript
const {formatDate} = require("./format-date");
console.log(formatDate(new Date(2017, 9, 13), "dddd the Do"));
```

## ES modules
ECMAScript modules. This is the JavaScript standard from 2015. The concepts are the same but the details are a bit different from CommonJS. With ES modules you use the ```import ... from ...``` keyword. The ```export``` keyword is used similarly conceptually, however it is implemented differently. 

### Working with ES modules in the file

If you want to create CommonJs module but as an ES module. You will have to do the following:
- Comment out the CommonJS calls in the Chapter10.js file.
- In the package.json file that got added when the modules were installed add the following property. ```"type": "module",```. This will tell node that you. Then you can start using the ```import from``` and ```export``` keywords. Basically when you have ```"type": "module",``` you can use the keyword. If you don't you should use the ```require()```.

Here is format-date module updated as an ES module. This is saved as a different file. format-dateES.js.

```javascript
import ordinal from "ordinal";

import dateNamesPkg from "date-names";
const {days, months} = dateNamesPkg;

export function formatDate(date, format){
    return format.replace(/YYYY|M(MMM)?|Do|dddd/g, tag => {
        if(tag == "YYYY") return date.getFullYear();
        if(tag == "M") return date.getMonth();
        if(tag == "MMMM") return months[date.getMonth()];
        if(tag == "D") return date.getDate();
        if(tag == "Do") return ordinal(date.getDate());
        if(tag == "dddd") return days[date.getDay()];
    });
};
```
The export keyword here can appear in front of a function, class or binding definition (let, const, var).

Notice how ```date-names``` is bound to the local variable ```dateNamesPkg``` in this module. This is because ```date-names``` is a CommonJS module and may not support all module.exports as named exports. Therefore, we had to import it as an object and then destructure it.

ES modules's interface is not a single value but a set of named bindings. When we import a module, we import the binding, not the value.

All this can seem awkward when working through things, but the JS community is transitioning, and slowly adopting the standard.

## Building and Bundling
So now that we can create modular code, code in separate, isolated pieces that work together. We now face a problem in the web that needs to make use of our code. A web page can reference as many javascript files it needs to add functionality to the page. However, if you end up with a bunch of files, fetching them over the network can take a lot of time. This problem is solved by *bundlers*. To help with our problem even more, we can make our file smaller with the use of *minifiers*. 

## Module Design
Things to keep in mind when structuring your module:
- Ease of Use: Make it easy for your self to use.
- Keep it simple and focused: use simple to understand data structures and doing a single focused thing. Many simple things are more useful and maintainable than one thing that can do many things.
- Funtion First: if something can be done with a function, use a function, in this way you would create less interdependencies and move on with your life.
- Follow: when working with multiple modules those modules could expect specific data structures. To keep things simple, try to follow those instead of creating your own.

# Chapter 11
In a computer the processor handles a task to do some work. Sometimes the processor has to wait for something outside of itself, such as another computer in the network doing another task or another process getting information from storage. It would be nice to have the be doing something rather than just being idle.

In a synchronous system, the task would be executed and completed one after another. But what if the system was able to multi-task? Doing multiple task at once? This would be an asynchronous system.

How do computers do this? They use threads. a thread is another running program whose execution may be interleaved (inserted into) with other programs by the OS. You know how now adays you have computers with multiple processors, multi-threaded programs take advantage of these. A thread could have a peice of work, then a second thread could start a second requeset. Then both threads wait for the results to come back, after which they resynchronize to combine the results.

In a synchronous model, waiting for actions is *implicit*. Meaning its implied that the program will just wait for the each execution. Whereas, in a asynchronous model it is explicit which means under our control.

## Callbacks
A callback function is a function that typically gets associated with asynchronous programming. Callback funtions are typically passed into slow performing functions. The action is started in the function, and once the function is finished the callback function is call with the result.

An example of a function that takes in a callback as an arguement is the setTimeout().

```javascript
setTimeout(() => console.log("Hello there, timer ended"), 500);
```

Here the ```() => console.log("Hello there, timer ended")``` piece is the callback function, also called the handler.

## Promises
Asynchronicity is contagious. When one function uses an asynchronous function that function must also be asynchronous. And as a result it can be more involved and error prone.

A *promise* is an asynchronous action that may complete at some point and produce a value. It is able to notify anyone who is interested when it is available. 

A way to create a promise is through ```Promise.resolve()```. This function makes sure that the value you pass in is wrapped in promise. To get to the result of a promise you can use the ```then()``` method.

The then() registers a callback function to be called when the promise resolves and produces a value. The then method returns another promise which resolves to the value that the handler functions returns... or if that returns a promis, it waits for that promise and then resolves to its result.

You can add callbacks to the then method in a promise, and it will be executed. In fact you can add as many callbacks as you want in a promise. This is actually how Promises improves JavaScript, because in the past we would have had to asynchronous code using only callbacks. If the code was a bit complex then, you end up having what developers called the *callback pyramid OF DOOM* (dan dan duuum!).

A promise is like the box Schrodinger's Cat. A normal value is simply there. Whereas, a *promised* value is a value that might be already there or might appear at some point in the future. The computations/tasks are done as the values become available (when the promise resolves).

### Failures & Promises
Promises can either be resolve (success) or rejected (failed). Resolve handlers registered with ```then``` are called only when the action is successful and rejects are automatically propagated to the new promise that is returned by the then method. Exceptions thrown automatically causes the promise produced by the then method to be rejected.

A rejected promise provides a reason for the rejection. To handle rejections there is a ```catch``` method that registers a handler to be called when the promise is rejected. It also returns a new promise. You can even chain another ```then``` method to handle what happens after the ```catch```

```javascript
new Promise((_ , reject) => reject(new Error("Failure")))
    .then(value => console.log("Handler 1"))
    .catch(reason => {
        console.log("Caught failure " + reason);
        return "catch's return";
    })
    .then(value => console.log(value,"Handler 2"));

//Caugth failure Error: Failure
//catch's return Handler 2
```

Here we have a promise that returns a call to the ```reject``` method, which contains an error with the message of ```"Failure"```. Notice how the ```"Handler 1"``` is never printed onto the console. This is because the promise was rejected. The callback registered on the catch method handles the rejected promise by printing out the ```"Caught failure ..."``` message to the console, it also returns the string ```"catch's return"```, which is handled by the ```then``` method chained after catch, which prints it out to the console with the string ```"Handler 2"```.

You can think of the chains of promise values created by calls to ```then``` and ```catch``` as a pipeline which async values or failures move through. Each has a success handler or a reject handler or both.

Another useful resource here is mozzilla's [Using Promises Post](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises). Here is another example of a pipeline of a promise where a handler takes care of what happens no matter what.

```javascript

new Promise((resolve, reject) => {
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
    () => {
        console.log("say this no matter what");
    }
);
```

### Waiting on Promises
If you have a bunch of Promises, and you want to wait for all of them to be successfully resolved, you can use the Promise.all method. This returns a Promise that waits on all of the promises in the array of Promises passed in to resolve and then returns an array of values. If any Promise is rejected the result of Promise.all is rejected.

## Async/Await Functions
An ```async``` function returns a Promise (implicitly). Inside it's body, it can await other Promises in a way that looks synchronous. As soon as the body returns something, the Promise is resolved.

The ```await``` keyword can be put infront of an expression to wait for a Promise to resolve and only then continue the execution of the function.

Having ```async``` and ```await``` makes your code look more like synchronous code.

## Generator Functions
No im not talking about those machines that produce power. I'm talking about the JavaScript feature for *generator* fuctions. Its has a mechanism where execution is paused and then resume again (after certain conditions). 

Generator functions are defined with the function* (an asterisk after the function keyword). It becomes a generator. When you call a generator, it returns an iterator.

```javascript
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
```

Here we have a generator function (Generator) that goes infinitely and multiplies the passed in arguement ```n``` with itself. There is a yeild statement the gives the current value every time. When you call the powers funtion, nothing happens. Then when the next method is called on the iterator that it returns it runs and pauses at the yeild expression. The yeilded value becomes the value of next. When the function returns (not shown here) the iterator is done.

In short you can rewrite the Group iterator to something like:

```javascript
//THE OLD WAY
/*
[Symbol.iterator] = function() {
    return new GroupIterator(this);
}*/

[Symbol.iterator] = function*(){
    for(let i = 0; i < this.items.length; i++){
        yield this.items[i];
    }
}
```
This means that you dont have to use another object to keep track of who is next (GroupIterator). 
>Note that the yeild expression can only occur directly in the generator function and not in an inner function inside the generator.

The generator only saves the its local environment when yeilding and the position where it yeilded.

### What do Generators have to do with async and await?
Async function is a special type of generator. It makes a Promise when called, which is resolved when it returns (finishes) and rejected when it throws an exception. Whenever it yeilds (awaits) a promise, the result of that promise (value or thrown exception) is the result of the await expression.

## An Event Loop
Asynchronous function behavior happens on its own empty call stack. Therefore if you tried to catch an exception that happend within a call it wont be caught.

No matter how you think of it, a JavaScript environment will run only one program at a time. You have to think of it like an event loop, when there is nothing to do the loop is stopped. As events come in they are added to a queue and their code is executed one after the other.

In this example, the callback on the setTimeout method will be executed after the end.

```javascript
let start = Date.now();
setTimeout(() => {
    console.log("Timeout ran at", Date.now() - start)
}, 20);

while (Date.now() < start + 50){}
console.log("Here we are at the end", Date.now() - start);
```

Where as Promises always resolve or reject as a new event. Even if a Promise is already resolved, waiting for it will cause your callback to run after the current script finishes, rather than right away.. this is why we are seeing our Promise logs at the end in the terminal.

## Asynchronous bugs
Be mind of when your code runs and where there could be asynchronous gaps.

## Excercises
Gonna skip it for now since, i didnt familiarize myself with crow-tech

# Chapter 12
I was a bit confused by this at first. I guess i just didnt understand what it was saying well enough. In this chapter we create a programming language, that is backed by JavaScript.

## Parsing
The programming language needs a parser, it is a piece of program that produces a data structure that reflects the structure of the logic (program) that was written out in the text it consumed.

Here are some of the other peculiarities of the programming language.
- Everything in the language is an expression. a expression can be the name of a binding, a number, a string or another piece of logic (an application [applying something]) which references a function call or other constructs like *if* and *while*. **The book calls this an application**.
- The language is called Egg
- Applications are written the way they are in JavaScript, putting () after an expression and having any number of arguements inside the () separated by commas.
- The syntax has no concept of a block.

Here is an example of an application written in Egg

```
do(
    define(x , 10),
    if(
        >(x , 5),
        print("large"),
        print("small")
    )
)
```
A ```do``` construct is needed to work with the lack of blocks.

The parser will then read this text to create a data structure, which will be expression objects, each with a ```type``` property indicating the kind of expression it is and other properties to describe the content.

Here are some notes of how the parser will create the data structure.

- Expressions of type ```value``` represent literal strings or numbers. 
- The ```value``` property will contain the string or number value that they represent.
- Expressions of type ```word``` will be used for identifiers, which will have a name property.
- Expressions of type ```apply``` represent the logic (application) which will have an operator property and an args property. 
  - The ```operator``` property will hold the expression being applied.
  - The ```args``` property will be an array of arguement expressions

Therefore the part ```>(x, 5)``` part will be expressed like:
```javascript
{
    type: "apply",
    operator: {type "word", name: ">"},
    args:[
        {type:"word", name:"x"},
        {type:"value", value:5}
    ]
}
```
This is called a **syntax tree**. Expressions contain more expressions all the way down, splitting.

The parser must be recursive in order to handle reading all of the trees. Here we have the first half of the parser.

```javascript
function parseExpression(programLogic){
    programLogic = skipSpace(programLogic);
    let match, expression;
    if(match = /^"([^]*)"/.exec(programLogic)){
        expression = {
            type: "value", 
            value: match[1] //the first item caught in the match
        };
    }else if(match = /^\d+\b/.exec(programLogic)){
        expression = {
            type: "value",
            value: Number(match[0]) //the all matching numbers
        };
    }else if(match = /^[^\s(),#"]+/.exec(programLogic)){
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
```

The function ```parseExpression``` takes in the programLogic (a string) and parses it into a data structure. It makes a call to skipSpace in order to skip any whitespace the program has. After skipping the whitespace the parser uses regex to look for the 3 things that Egg is able to work with:
- First it looks for something that matches a string, if there is a match then we create an expression object with the value of the string.
- If no string is found, then it checks for a number, then we craten an expression object with the value of the number (casted as a number)
- If no string or number is found, then it must be a word that is an identifier
- An error is thrown if no input matches.

Here is more info about the [RegExp.prototype.exec()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec).

At the end of the ```parseExpression``` function the piece that was parsed is cut off from the string using the lenght of the matching string. The remaining string is passed into the ```parseApply``` function.

Here is the parseApply function:
```javascript
function parseApply(expression, programLogic){
    programLogic = skipSpace(programLogic);

    //if there is no remaining open parenthesis there is nothing to read
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
```

The parseApply function reads for a piece of logic (an application). If the next character is not an opening paren then its not an application and it returns the expression. 

If it is an opening paren then it skips the first one and then creates an application syntax tree. It then looks for the end or more arguements to add to its argument array. 

Now all we have to do is create a function that will parse the expression. Here is one where we test it out:

```javascript
function parse(programLogic){
    let {expression, rest} = parseExpression(programLogic);
    if(skipSpace(rest).length > 0){
        throw new SyntaxError("Unexpected text after program");
    }
    return expression;
}

console.log(parse("+(a, 10)"));
```

When i had this at first it didnt work, it kept returning undefined. As it turns out i had my bindings named incorrectly. I had it map to expr (from the book). These functions are recursive so you have to look for when it should terminate. And the only way for this to terminate is at parseApply when next item is not "(". That returns an object with an property named expression.

## The Evaluator
So now that we can reliably take a string and create a syntax tree we can now write some code that will evaluate those expressions that we wrote. 

```javascript
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
```

The evaluator first checks for pressions with value types and word types. If its a value type, then the value is returned. If its a word hen we check if the binding is in scope and return that scoped expression name.

For applications (logic) we first desctructure the expression into operators and arguments. If the operator's type is in the specialForms (an object we'll discuss soon) like if, do and while then we get that function and pass in the arguement and scope. Otherwise, we verify that the operator is a function and call that function while passing in the argument and scope.

## Special Forms
As mentioned earlier, we are going to talk about it. This is an object used define special syntax in Egg. Like a store for our reserved keywords.


### Special Forms: If
Here we will add an if binding to the specialForms object

```javascript
specialForms.if = (args, scope) => {
    if(args.length != 3){
        throw new SyntaxError("Wrong number of args to if");
    }else if(evaluate(args[0], scope) !== false){
        return evaluate(args[1], scope);
    }else{
        return evaluate(args[2], scope);
    }
}
```

Here we check if the result of evaluating the first arguement (an expression) equals doesnt equal false. If not (its true) then we return the second arguement (after evaluating it ```arg[1]```). The second argument would be a value, otherwise we return the third argument (```args[2]```), which would also be a value.

### Special Forms: while
For the while special form we evaluate the the first expression (args[0]) and the scope and see if its still true (!== false), if that is the case we evaluate the expression in the second argument (args[1]). This is done until the evaluation returns false.

```javascript
specialForms.while = (args, scope) => {
    if (args.length != 2) {
        throw new SyntaxError("wrong number of args to while");
    }

    while (evaluate(args[0], scope) !== false){
        evaluate(args[1], scope);
    }

    return false;
}
```

### Special Forms: do
One we saw in the earlier examples is the do special form. which executes arguements from the top to bottom. It executes each expression one at a time.

```javascript
specialForms.do = (args, scope) => {
    let value = false;
    for (let arg of args){
        value = evaluate(arg, scope);
    }
    return value;
};
```

### Special Forms: define
There is also define that sets a name to a binding. It first expects a word with a type and then the value as the second argument. The name of the evaluated word is saved in the scope with the value.

```javascript
specialForms.define = (args, scope) => {
    if(args.length != 2 || args[0].type != "word"){
        throw new SyntaxError("Wrong use of define, sorry not sorry!");
    }
    let value = evaluate(args[1], scope);
    scope[args[0].name] = value;
    return value;
}
```

So we've now added to the special forms to handle different keywords in our language. Cool. But then there is this scope arguement that gets passed on to some many of the functions that we've passed in. Lets talk about that next.

## The Environment
We've been passing around an object called scope now in our functions like evaluate() and in the special forms method. 

The scope accepted by evaluate is an object with properties whose names correspond to binding names and the values correspond to values those bindings are bound to.

```javascript
const topScope = Object.create(null);

topScope.true = true;
topScope.false = false;
```

Here we defined the topScope variable that would be our global scope for the language. It is defined without a particular prototype and we give it properies ```true``` and ```false```. Those properties are bound to the values true and false in JavaScript.

Recall earlier we had the ```if``` function tied to special forms. We can now evaluate an expression like so.

```javascript
let prog = parse(`if(true, false, true)`);
console.log(evaluate(prog, topScope)); //false
```

What is happening here? We are parsing an expression into the parser. The function name with 3 arguments enclosed inside the (). The expression is parsed and then ```evaluate``` is called on the expression is recognized as a special forms function because it recognizes that ```if``` is defined. Then the evaluate function calls the function in the special forms object passing in the array of arguements and the scope parameter (```topScope``` in this case).

For other operators we'll go ahead and add operators to the topScope and use Function constructor to create them quickly.

```javascript
for(let op of ["+", "-", "*", "/", "==", "<", ">"]){
    topScope[op] = Function("a, b", `return a ${op} b;`);
}
```

We'll also add a way to output values to the console so that we can see what is going on along the way.

```javascript
topScope.print = value => {
    console.log(value);
    return value;
};
```

So now that we've defined the topScope with more operators we can do a lot of stuff with it. We'll add a run method that takes advantage of the topScope we created.

```javascript
function run(program){
    return evaluate(parse(program), Object.create(topScope));
}
```
The ```run``` method makes a call to ```evaluate``` which takes in two parameters, the expression (which is parsed by the ```parse``` method) and a scope object that takes the ```topScope``` as the prototype.

```javascript
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
```

The ouput is 55 (printing total) and 11 (printing count).

## Functions
Next we'll go ahead and add functions to the language. Here we go ahead and add the ```fun``` construct as a part of special forms

```javascript
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
```

Here we have a function as a part of the special forms object, where anyone can define a function. When you are defining it, the function first checks if the function has a body. Then it parses the body, and then gets the paramerts for the function to be a word type. Then it a function is created (in JavaScript). The function itself checks if the correct amount of arguements have been passed into it, if not it returns an error. It then creates a local scope and maps the passed in arguements to the paramerter by their position. Then it returns a call to the ```evaluate``` method with the body and the localScope of the function. 

Here it is in action
```javascript
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
```

# Chapter 13
## Networks and the Internet
Putting cables between two or more computers allow them to send data back and forth through the cables. When you connect every computer in the network you get the *Internet*.

Network Protocols: a style of communication over a network. There are protocols for sending email, getting email, sharing files. An example is HTTP (Hypertext Transfer Protocol).

## HTTP
Hypertext Transfer Protocol, a network protocol for retrieving named resources (chunks of information like web pages, text, etc). It has specifications for how two computers should talk. HTTP specifies that requestors of resources should shape their requests like this, naming the resource (index.html) and the version of the protocol that it is trying to use (HTTP/1.1)

```
GET /index.html HTTP/1.1
```

## TCP
Transmission Control Protocol, a protocl that address the problem of making sure you can put things in order and have them arrive at the correct destination in the correct order. Most communication is built on TCP.

Here is how it works:

One computer (Computer A) is waiting or listening for other computers to start taking to it. In order to listen it for different kinds of communication at the same time, it has to have a designated location. A **port**.

Most protocols specify which port to use. For example, emails using the SMTP protocol, the machine that we send our emails to is listening on port 25.

## The Web

To be part of the web, all you have to do is have your machine listen on port 80 (http), so that other computers can make a request for documents.

### URL
Each document in the web is named by a Uniform Resource Locator (URL). It looks something like the following

```
http://eloquentjavascript.net/13_browser.html
```

The ```http://``` is the **protocol**. The ```eloquentjavascript.net``` part is a **domain name** for the sever and ```13_browser.html``` part is the path that leads to the **resource**.

Machines connected to the internet have an **IP Address**. This is a number that can be used to send messages to that machine. It looks like 149.210.142.219 or 2001:4860:4860::8888. The domain names are registered to map the name to a particular **IP address**. These are done through a **domain name registrar**.

So requests when you type something on your web browser the browser first finds out what the IP address is through the domain name, then using the HTTP protocol it will make a connection to that computer and ask for the resource.

# Chapter 14
## The DOM (Document Object Model)
