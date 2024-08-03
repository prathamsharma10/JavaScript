// Variables and Constant In JS

// Keyword - > const,let,var

//  Constant -> const
// const => once value declared cannot be changed
const accountId = 112345


//variables => let,var
let accountEmail = "ps@gmail.com"

var accountPassword = "112233"


// Possible way but not good way of declaring a variable
accountCity = "Mumbai"

let accountState;
console.log(accountState);   //undefined




// accountId=2  // not allowed
// console.log(accountId); //Error -Assignment to constant variable.

console.log(accountId); //112345

accountEmail="sp@gmail.com"

accountPassword="001122"

accountCity="Delhi"

console.log(accountEmail); //sp@gmail.com
console.log(accountPassword);//001122
console.log(accountCity);//Delhi

/*
Prefer not to use var because of issue in block scope and functional scope.
*/

// Console Table method
// console.table([]);

console.table([accountId,accountEmail,accountPassword,accountCity]);
// ┌─────────┬────────────────┐
// │ (index) │ Values         │
// ├─────────┼────────────────┤
// │ 0       │ 112345         │
// │ 1       │ 'sp@gmail.com' │
// │ 2       │ '001122'       │
// │ 3       │ 'Delhi'        │
// └─────────┴────────────────┘



