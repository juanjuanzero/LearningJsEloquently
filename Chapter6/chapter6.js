
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