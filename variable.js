// variable declaration
var myName = "Mary Jane"
var myAge = "50"

console.log(myName);
console.log(myAge);

//variable initialization
let ourName;
// value assigned to variable
ourName = "Mary Jane"

var herName = "Perfect"
console.log(herName);

//how to write your variable name
// 1. start with a letter, underscore or a dollar sign
// 2. followed by any number of letters, numbers, or underscores
// 3. cannot start with a number
// 4. cannot use reserved keywords
// 5. variables are case sensitive

// camelCase
var myVariable
// snake_case
var my_variable;
// pascal
var MyVariable

var manName = " John Doe "
var manAge = " 35 "
var Cname = " Paul, Enerstina and Diana "
var Ename = " Enerstina "
var Dname = " Diana "
var issick = true;
let condition = " You can't remember "
let mymessage = " wish you a speedy recovery "

console.log( 'Your name is' + manName + ' you are ' + manAge + ' years old and you have three lovely children whose names are ' + Cname + ' It is ' + issick + ' you are sick ' + condition + ' anything and i' + mymessage );

document.getElementById("hisName").innerHTML = 'Your name is ' +  manName + ' you are ' + manAge +' years old and you have three children whose names are ' + Cname + 'it is ' + issick + ' you are sick and ' + condition + ' anything about your past yet, sorry and i ' + mymessage

document.getElementById("hisName").style.background = 'blue'
document.getElementById("hisName").style.fontSize = '25px'
document.getElementById("hisName").style.fontStyle = 'italic'
document.getElementById("hisName").style.color = 'white'