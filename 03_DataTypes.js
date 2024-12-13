/*
Total (8)

primitive Data type (7)
    string
    number
    bigint
    boolean
    null -> standalone value to represent empty value
    undefined -> The meaning of undefined is “value is not assigned”.
    symbol -> used to create unique identifiers for objects.

non-primitive Data type (1)
    object

    All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.
*/

let name = "ABC"             //string
let age = 21                 //number  
let isLoggedIn = false       //boolean
let bigNumer = BigInt(123456789098765432) //bigInt
let bigNumber2 = 123456789098765432n //bigInt

/* typeof
    The typeof operator returns the type of the operand.

    You may also come across another syntax: typeof(x). It’s the same as typeof x.

    typeof is an operator, not a function. The parentheses here aren’t a part of typeof. It’s the kind of parentheses used for mathematical grouping.

*/

console.table(
    [
        typeof(name),       //string
        typeof age,         //number
        typeof bigNumer,    //bigInt
        typeof bigNumber2,  //bigInt
        typeof NaN,         //number
        typeof Infinity,    //number
        typeof isLoggedIn,  //boolean
        typeof null,        //object
        typeof undefined,   //undefined
        typeof alert,       //function
    ]
)

/*
Programming languages that allow such things, such as JavaScript, are called “dynamically typed”, 
meaning that there exist data types, but variables are not bound to any of them.

let message = "hello";
message = 123456;
*/

/*
  Number/ BigInt
  The number type represents both integer and floating point numbers.

  Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.  
  Infinity represents the mathematical Infinity 
  NaN represents a computational error,  
  Any further mathematical operation on NaN returns NaN (one exception to that: NaN ** 0 is 1)

  outside of the safe integer range ±(2^53 - 1) there’ll be a precision error, because not all digits fit into the fixed 64-bit storage. So an “approximate” value may be stored.

  A BigInt value is created by appending n to the end of an integer:

  Right now, BigInt is supported in Firefox/Chrome/Edge/Safari, but not in IE.
*/

console.table([
    NaN + 1,        // NaN
    1 / 0,          // Infinity
    NaN ** 0,       // 1
    2 + 2,          // 4
    2 - 2,          // 0
    2 * 3,          // 6
    2 ** 3,         // 8
    6 % 5,          // 1
])

/*
Mathematical operations are safe
Doing maths is “safe” in JavaScript. We can do anything: divide by zero, treat non-numeric strings as numbers, etc.

The script will never stop with a fatal error (“die”). At worst, we’ll get NaN as the result.
*/

/* String
    In JavaScript, there are 3 types of quotes.

    Double quotes: "Hello".
    Single quotes: 'Hello'.
    Backticks: `Hello`.

    Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.

    Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:
*/
let count = 5;

console.table([
    "string1",
    'string2',
    `there are ${count} trees in garden`
])

/* 
Conversion Operator
    Number()
    String()
    Boolean()
    BigInt()
*/

let number1 = Number("11")        // 11
let number2 = Number("65abc")     // NaN
let number3 = Number(true)        // 1
let number4 = Number(false)       // 0
let number5 = Number(null)        // 0
let number6 = Number(undefined)   // NaN

console.table([
    number1,
    number2,
    number3,
    number4,
    number5,
    number6
])

console.table([
    String(33),
    String(NaN),
    String(undefined),
    String(true),
    String(null),
    String("Abc" + " " + "xyz"),
])

console.table([
    Boolean(33),        // true
    Boolean(0),         // false
    Boolean(undefined), // false
    Boolean(null),      // false
    Boolean("Abc"),     // true
    Boolean(""),        // false
])