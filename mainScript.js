// const element = document.getElementsByTagName('h1')[0];
// console.log('Hello' , 1 + 1);
// alert('Hello');

// var userName = prompt("Wha's your name", 'ahmed for example');
// console.log(userName);

// var userName = confirm("Are you sure you want to delete this file?");
// console.log(userName);

var MyName = 'Ahmed';
console.log(MyName , typeof MyName);

var age = 25;
console.log(age , typeof age);

var isTrue = true;
console.log(isTrue , typeof isTrue);

var x;
console.log(x , typeof x);

var y = null;
console.log(y , typeof y);

var z = undefined;
console.log(z , typeof z);

var myArray = [1, 2, 3, 4, 5];
console.log(myArray , typeof myArray);

var myObject = {name: 'Ahmed', age: 25};
console.log(myObject , typeof myObject);

var myFunction = function() {
    console.log('Hello');
}
console.log(myFunction , typeof myFunction);

var myDate = new Date();
console.log(myDate , typeof myDate);

var myRegExp = /test/g;
console.log(myRegExp , typeof myRegExp);

var myError = new Error('Error Message');
console.log(myError , typeof myError);

var myMap = new Map();
console.log(myMap , typeof myMap);

var mySet = new Set();
console.log(mySet , typeof mySet);

myFunc();
function myFunc() {
    console.log('Hello');
}
myFunction();

var x = 100;
x = 'Ahmed'; // re-assign
console.log(x); // 200 , ahmed

var y; // 1
console.log(y); // 2 ===== undefiend
y = 100; // 3
console.log(y); // 4 ===== 100

console.log(y);
var y = 100;


myFunc();
function myFunc() {
// function delaration , function statement , regular function
	console.log('Hello From Hoisted function');
}

var x = 100;

if (x %2 == 0){
    console.log('Even');
}
else{
    console.log('Odd');
}



