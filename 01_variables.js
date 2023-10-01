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