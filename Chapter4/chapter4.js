console.log("Data Structures\n");
let arrayOfNumbers = [2,3,5,7,11,12];
//arrays as objects
console.log("Arrays as objects");
console.log(arrayOfNumbers[2]); //5
console.log(arrayOfNumbers[0]); //2

//properties
console.log("\nProperties");
console.log(arrayOfNumbers.length);//6
console.log(arrayOfNumbers["length"]);//6

//methods
console.log("\nMethods:");
let oops = "Doh";
console.log(typeof oops); //string
console.log(typeof oops.toUpperCase); //function
console.log(oops.toUpperCase()); //DOH


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
delete day1.chicken;
console.log(day1.chicken); //false

//checking if a property is in an object
console.log(Object.keys(day1)); //['squirrel', 'events']
console.log("squirrel" in day1); //true

console.log("\nobjects and mutability");

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2); //true
console.log(object1 == object3); //false

object1.value = 15;
console.log(object2.value);//15
console.log(object3.value);//10

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

console.log("\narray methods: index")
let arrayOfNumbers2 = [1,2,3,4,5,6,7,8,1,9,10];
console.log(arrayOfNumbers2.indexOf(1)); //0
console.log(arrayOfNumbers2.lastIndexOf(1)); //8

console.log("\nstring methods:")
let hw = "   hello world how are you?   ";
console.log(hw.length); //30
console.log(hw.indexOf("world")); //9 (world starts at index 9)

hw = hw.trim(); //trim spaces
console.log(hw.length); //24

let arrayOfHw = hw.split(" ");
console.log(arrayOfHw); //[ 'hello', 'world', 'how', 'are', 'you?' ]

console.log("\n rest parameters");

let words = ["you", "are"];
let finalWords = ["hope", ...words ,"having", "a", "good", "day"]
console.log(finalWords);
