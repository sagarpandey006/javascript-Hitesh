const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Vidisha"
let accountState;

// accountId = 2 // not allowed


accountEmail = "falana.com"
accountPassword = "21212121"
accountCity = "Indore"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])