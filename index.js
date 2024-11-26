
function razzle() {
    console.log("You've been razzled!");
  }
  razzle(); //=> "You've been razzled!"
  function razzle() {
    console.log("You've been razzled!");
  }
  function razzle(lawyer = "Billy", target = "'em") {
    console.log(`${lawyer} razzle-dazzles ${target}!`);
  }
  razzle(); //=> Billy razzle-dazzles 'em!
  razzle("Methuselah", "T'challah"); //=> Methuselah razzle-dazzles T'challah!
  (function () {
    console.log("Yet more razzling");
  });
  const button = document.getElementById("button");
button.addEventListener("click", function () {
  console.log("Yet more razzling");
});
const fn = function () {
    console.log("Yet more razzling");
  }; //=> undefined
  fn; //=> ƒ () { console.log("Yet more razzling") }
  fn(); // "Yet more razzling"
  (function (baseNumber) {
    return baseNumber + 3;
  })(2); //=> 5
  function outer(greeting, msg = "It's a fine day to learn") {
    // 2
    const innerFunction = function (name, lang = "Python") {
      // 3
      return `${greeting}, ${name}! ${msg} ${lang}`; // 4
    };
    return innerFunction("student", "JavaScript"); // 5
  }
  
  outer("Hello"); // 1
  //=> "Hello, student! It's a fine day to learn JavaScript"
  const storedFunction = outer("Hello");
storedFunction("student", "JavaScript");
//=> "Hello, student! It's a fine day to learn JavaScript"
function outer(greeting, msg = "It's a fine day to learn") {
    return function (name, lang = "Python") {
      return `${greeting}, ${name}! ${msg} ${lang}`;
    };
  }
  const array = (function (thingToAdd) {
    const base = 3;
    return [
      function () {
        return base + thingToAdd;
      },
      function () {
        return base;
      },
    ];
  })(2);
  array[0]; //=> ƒ () { return base + thingToAdd; }
array[1]; //=> ƒ () { return base; }
array[0](); //=> 5
array[1](); //=> 3
function demoChain(name) {
    const part1 = "hi";
    return function () {
      const part2 = "there";
      return function () {
        console.log(`${part1.toUpperCase()} ${part2} ${name}`);
      };
    };
  }
  
  demoChain("Dr. Stephen Strange")()(); //=> HI there Dr. Stephen Strange
  wrapAdjective("%")("a dedicated programmer"); //=> "You are %a dedicated programmer%!"