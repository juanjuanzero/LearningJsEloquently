
let rabbit = {};
rabbit.speak = function(line){
  console.log(`The rabbit says '${line}'`);
};

rabbit.speak("Ha!! I'm alive!");
//The rabbit says 'Ha!! I'm alive!'

console.log("\n----This in JavaScript---\n");
function speak(line){
    console.log(`This ${this.type} rabbit says '${line}'`);
  }
  
  let filipinoRabbit = {type: "pinoy", speak};
  let hungryRabbit = {type:"hungry", speak};
  
  filipinoRabbit.speak("Hoy! What's up doc?");
  hungryRabbit.speak("I would like a carrot please.");

speak.call(hungryRabbit, "Yum!");

console.log("\n----Prototypes---\n");
console.log(Object.getPrototypeOf({}) == Object.prototype);
//true
console.log(Object.getPrototypeOf(Object.prototype));
//null
console.log(Object.getPrototypeOf([]) == Array.prototype);
//true


console.log("\n----Prototypes: Creating a prototype---\n");
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


console.log("\n----Classes---\n");
function makeRabbitInstance(type){
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}

let kindRabbit = makeRabbitInstance("kind");
kindRabbit.speak("Hello, what a pleasure it is to meet you.");

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


console.log("\n----Classes: Class Keyword---\n");
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

console.log("\n----Maps---\n");
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
console.log(`Is toString key in keys?`, agesMap.has("toString")); //false?


console.log("\n----Symbols---\n");
let sym = Symbol("name");
console.log(sym == Symbol("name")); //false
Rabbit.prototype[sym] = 77;
let awesomeRabbit = new Rabbit("awesome");
console.log(awesomeRabbit[sym]); //77

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function(){
    return `${this.length} is the length of the array`;
};

console.log([1,2,3].toString()); //1,2,3
console.log([1,2,3][toStringSymbol]()); //our symbol


console.log("\n----Iterator Interface---\n");
let stringIterator = "Hello"[Symbol.iterator]();
console.log(stringIterator.next()); //H
console.log(stringIterator.next()); //e
console.log(stringIterator.next()); //l
console.log(stringIterator.next()); //l
console.log(stringIterator.next()); //o
console.log(stringIterator.next()); //done is true