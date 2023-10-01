const accountId = 4527627;  //only way to declare constant
let accountName = "abc@xyz.com"   
var accountPassword = "12345"    
accountCity = "Mumbai" // allowd in javascript but don't use
let accountState

// single line comment

/*
    multiline
    comment
*/

/*
    const and let has block scope
    var has issues with scope, if in multiple file of same project has same 
    variable name, it will change in all - don't use var
*/

// semi colon is not mandatory in javascript

console.log(accountState) // default value of variable is undefined

console.table([accountId, accountName, accountPassword, accountState, accountCity])
// shows logs in table form

/*
There are two limitations on variable names in JavaScript:

1. The name must contain only letters, digits, or the symbols $ and _.
2. The first character must not be a digit.
*/

/*
A variable should be declared only once.
A repeated declaration of the same variable is an error:
*/

/*
Case matters
Variables named apple and APPLE are two different variables.
*/