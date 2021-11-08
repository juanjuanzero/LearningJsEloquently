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

console.log("\nexcercise");
// Your code here.
let sum = function(numbers){
	let s = 0;
  	for(let number of numbers){
    	s += number;
    }
  	return s;
};

let range = function(first, last, step){
	let r = [];
  if(step == null) step = 1;	
  	if(first > last) {
      for(let i = first; i >= last; i += step){
    	r.push(i);
    	}
    }else{
    for(let i = first; i <= last; i += step){
    	r.push(i);
    	}
    }
  	
  	return r;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

console.log("\nArray Reversals")
// Your code here.
let reverseArray = function(arrayInput){
	let a = [];
  for(let i of arrayInput){
    	a.unshift(i); //add it to the front
    }
  return a;
};

let reverseArrayInPlace = function(arrayInput){
  let lastIndex = arrayInput.length - 1;
  let midPoint = lastIndex / 2;
  for(let i = 0; i <= midPoint; i++){
    if(i != midPoint){
    
  	let first = arrayInput[i];
    let last = arrayInput[lastIndex - i];
    
    arrayInput[i] = last;
    arrayInput[lastIndex - i] = first;
    }
  }
  return arrayInput;
};

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

console.log("\ntoArray toList")
// Your code here.
let arrayToList = function(arrEl){
    if(arrEl.length > 0){
        let val = arrEl.shift();
      let obj = { value: val, rest: arrayToList(arrEl)}
      return obj;
    }else{
      return null;
    }
  };
  
  let listToArray = function(list){
    let arr = [];
    arr.push(list.value);
    let rst = list.rest;
    while(rst != null){
        arr.push(rst.value);
      rst = rst.rest;
    }
    return arr;
  };
  //prepend
  let prepend = function(n, list){
    let obj = {value: n, rest: list};
    return obj;
  }
  //recursive version of nth
  let nth = function(list, idx, counter = 0){
    if(idx != counter){
        list = list.rest;
      counter++;
      return nth(list,idx,counter);
    }else{
        return list.value;
    }
  };
  console.log(arrayToList([10, 20]));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(listToArray(arrayToList([10, 20, 30])));
  // → [10, 20, 30]
  console.log(prepend(10, prepend(20, null)));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(nth(arrayToList([10, 20, 30]), 1));
  // → 20

  console.log("\ndeep comparison");
  // Your code here.
let deepEqual = function(obj1, obj2){
    if(typeof obj1 == "object" && typeof obj1 == typeof obj2){
      for(let k of Object.keys(obj1)){
          if(obj1[k] == obj2[k]){
              continue;
          }else{
                if(typeof obj1[k] == "object" || typeof obj2[k] == "object"){
                  return deepEqual(obj1[k], obj2[k]);
              }else{
                  return false;
                    break;
              }
          }
      }
      return true;
    }else{
        return obj1 == obj2;
    }
  };
  
  let obj = {here: {is: "an"}, object: 2};
  console.log(deepEqual(obj, obj));
  // → true
  console.log(deepEqual(obj, {here: 1, object: 2}));
  // → false
  console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
  // → true