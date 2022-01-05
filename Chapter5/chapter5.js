console.log("abstracting repeat");
function repeat(n, action){
    for(let i = 0; i < n; i++){
        action(i);
    }
}

repeat(3, console.log);
//0
//1
//2

//creating a funtion value (an expression)
let labels = []
repeat(5, i => labels.push(`Hello ${i + 1}`)); //using backtics for string literal 
console.log(labels);
//[ 'Hello 1', 'Hello 2', 'Hello 3', 'Hello 4', 'Hello 5' ]

console.log("\nhigher-order functions");
function greaterThan(n) {
    return m => m > n;
  }
  let greaterThan10 = greaterThan(10);
  console.log(greaterThan10(11));
  // → true

  console.log("\nreduce");
  console.log([1,2,3,4,5].reduce((a,b) => a + b)); //15