// Write a program to check if a variable is of type string in JavaScript.
// let str = "hello";

// if("string" === typeof(str)) {
// console.log("it is a string")
// } else {
// console.log("not a string")
// }

//js code to find largest no
/* let arr = [1,2,3,4,5,6,7,8];
let maxNo =0;
for(let i =0; i<arr.length; i++) {
if(maxNo < arr[i]) {
maxNo = arr[i]
}
}
console.log(maxNo) */





/* 
let arr = [1,2,3,4,5,6,7,8];
let evenArr = [];
for(let i =0; i<arr.length; i++) {
if(arr[i] % 2 ==0) {
evenArr.push(arr[i])
}
}
console.log(evenArr)


 */



/* let str = "hello";
if("string" === typeof(str)) {
console.log("it is a string")
} else {
console.log("not a string")
}
 */
 
 
 
 //converting number to string
/* const a = 12;
console.log(a.toString())
 */

//to check whether the variable is boolean or not
/* const b = true;
if(typeof(b) === "boolean") {
console.log("yes")
} else {
console.log("no")
}
 */

//to convert string to an integer
/* const a = "12";
console.log(parseInt(a));
 */
 
 //program to check if variable is type undefined or not
 
/* var a;
if(a === undefined) {
console.log("yes") 
} else {
console.log("no")
} */

//Write a program to iterate over an array and print each element.
/* let arr = [1,2,3,4,5,6,7];
let b = "";
for(let i =0; i <arr.length; i++) {
b += arr[i]
}
console.log(parseInt(b)) */


//Write a program to iterate over an object and print each key-value pair.
/* let a ={
name : "george",
age : 23,
job : "magician"
};
for(let x in a) {
if(a.hasOwnProperty(x)) {
value = a[x]
console.log(x,value)
}
} */


//Write a program to check if all elements in an array satisfy a specific condition.

/* let arr = [1,2,3,4,5,6,7,8];
let evenNo = [];
for(let i=0; i<arr.length; i++) {
if(arr[i] % 2 == 0 ) {
evenNo.push(arr[i])
}
}
console.log(evenNo) */

//Write a program to find the sum of all values in an object.
/* let obj = {
a : 1,
b : 12,
c : 2
};
const values = Object.keys(obj);
console.log(values) */
/* const sum = values.reduce((accumulator, value) => {
  return accumulator + value;
}, 0);

console.log(sum); */


//reduce method
/* const arr = [1,2,3,4,,5,6,7,8];
let a = arr.reduce((a,b) => {
return a + b;
},0)
console.log(a); */


//Write a program to find the maximum value in an array of numbers.
/* const arr = [9,2,3,4,5,6,7,8];
let maxNo = arr[0];
for(let i =0; i<arr.length; i++) {
if(maxNo < arr[i]) {
maxNo = arr[i]
}
}
console.log(maxNo) */

















