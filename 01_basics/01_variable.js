const accountId = 144553  //const -> never change.
let accountEmail = "pihu88@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;   //In Javascript, if you declare a variable but do not assign any value to it, then the output will be undefined.

/*accountId = 2 U can't modify or change(Not Allowed) */
accountEmail = "hc@hc.com"
accountPassword = "21212123"
accountCity = "Bengaluru"
console.log(accountId);
console.table([accountEmail , accountPassword , accountCity , accountState]);

/*console.log = prints any values or messages normally
console.table = shows data(arrays/objects) in a table format for a easy reading.
*/


/*
var -> old way to declare variables, works everywhere but can use bugs------>(Prefer not to use "var")
       var ignores block { } scope , so the same variable can be changed without you noticing.
       
let -> modern and safer way , works only inside the block where it is used.
*/