
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

console.log("\n----Getters, Setters and Statics---\n");
//object with a getter
let varyingSize = {
    get size(){
        return Math.floor(Math.random() * 100);
    }
}

console.log(varyingSize.size); //random number
console.log(varyingSize.size); //random number


console.log("\n----Getters, Setters and Statics: Temp---\n");
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
console.log(t1.fahrenheit); //32, freezing!

t1.fahrenheit = 86;

console.log(t1.fahrenheit); //86
console.log(t1.celsius); //30

let t2 = Temp.fromFahrenheit(100);
console.log(t2.fahrenheit);
console.log(t2.celsius);


console.log("\n----InstanceOf---\n");
console.log(t1 instanceof Temp);//true
console.log(t1 instanceof Rabbit);//false


console.log("\n----Excercises : A Vector Type---\n");
class Vec {
    constructor(x , y){
        this.x = x;
        this.y = y;
    }

    plus(otherVec){
        let newX = this.x + otherVec.x;
        let newY = this.y + otherVec.y;
        return new Vec(newX, newY);
    }

    minus(otherVec){
        let newX = this.x - otherVec.x;
        let newY = this.y - otherVec.y;
        return new Vec(newX, newY);
    }

    get length(){
        let sq = Math.pow(this.x,2) + Math.pow(this.y,2);
        return Math.pow(sq, .5);
    }
}

console.log(new Vec(1,2).plus(new Vec(2,3)));
console.log(new Vec(1,2).minus(new Vec(2,3)));
console.log(new Vec(3,4).length);


console.log("\n----Excercises : Groups---\n");
class GroupIterator {
    constructor(group){
        this.ind = null;
        this.group = group;
    }

    next(){
        if(this.ind === null){this.ind = 0;}
        if(this.group.items.length >= 0 && this.ind <= this.group.items.length - 1 ){
            let value = this.group.items[this.ind];
            this.ind++;
            return {value, done: false};
        }else{
            return {done: true};
        }
    }
}

class Group {
    constructor(){
        this.items = [];
    }

    [Symbol.iterator] = function() {
        return new GroupIterator(this);
    }

    add(toAdd){
        if(this.items.length > 0){
            //check if its already there
            let found = this.items.indexOf(toAdd);
            if(found >= 0){
                return;
            }
        }
        //add it
        this.items.push(toAdd);
    }

    has(toFind){
        let found = this.items.indexOf(toFind);
        if(found >= 0){
            return true;
        }else{
            return false;
        }
    }

    delete(toDelete){
        let found = this.items.indexOf(toDelete);
        //if you find it take the last item in the array and place it in 
        if(found >= 0){
            let replace = this.items.pop;
            this.items[found] = replace;
        }
    }

    static from(itterableObject){
        let newGroup = new Group();
        for (const iter of itterableObject) {
            newGroup.add(iter);
        }
        return newGroup;
    }

}

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));


console.log("\n----Excercises : Iterable Groups---\n");

var gp = Group.from(["a", "b", "c", "d", "e"]);

console.log(gp[Symbol.iterator]().next());
for (let val of gp) {
    console.log(val);
}


console.log("\n----Excercises : hasOwnProperty---\n");

let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true

