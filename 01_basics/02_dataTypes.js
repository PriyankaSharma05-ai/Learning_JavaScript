"use strict";   /*treat all JS code as newer version.
                It makes JavaScript stricter , safer and helps catch bugs early.
                It stops undeclared variables. (Forces you to use let , var , const). */

//alert(3 + 3) -> shows error because We are using nodejs not browser.

console.log(3 + 3)
console.log("Priya")

let name = "Prishu"
let age = 18
let isLoggedIn = false

/* DataTypes--->
number => 2 to power 53
bigint => jab number bahut bada ho (trading me use hota hai)
string => ""
Boolean => true/false
null => standalone value(means value is Empty on purpose)  => (null ek "object" hai)
undefined => means value is not given yet .  (undefined apne aap me ek "type" hai)
symbol => creates a unique value(no two symbols are same).Used to avoid name conflicts in objects.
object => used to store multiple values in one variable as key:value pairs.
*/

console.log(typeof age);  //number
console.log(typeof "Priya");  //String
console.log(typeof null);  //object
console.log(typeof undefined);  //undefined



let a = null  //you set it empty.
let b;  //value not assigned.
console.log(a)
console.log(b)

