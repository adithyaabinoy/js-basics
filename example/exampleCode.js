
/* const arr = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 7, 8];
let revArr = [];
function reverse(a) {
for(let i=a.length-1; i>=0; i--) {
revArr.push(a[i]);
}
return revArr;
}
//console.log(reverse(arr));
console.log(reverse(arr2)); */

/* 
const arr = [1, 3, 4, 5, 7];
let result = arr.map((e, i) => {
return e* 2;
})
console.log(result);

let res = arr.forEach((e, i) => {
console.log( e + 2);
})
 */
 
/* const arr = [1, 2, 9, 4, 5];
let maxNo = arr[0];
for(let i=0; i<arr.length; i++){
if(arr[i] < maxNo) {
maxNo = arr[i];
}
}
console.log(maxNo); */

/* const arr = [5, 2, 3, 4]; */
/* arr.sort((a,b) => {
return b-a;
});
console.log(arr);

 */

/* const arr = [5, 2, 3, 4];
for(let i=1; i<arr.length; i++) {
for(let j=0; j<arr.length; j++) {
if(arr[i]>arr[j]) {
var x = arr[i];
arr[i] = arr[j];
arr[j] = x;
}
}
}
 console.log(arr);
 */
/* const input = "000123";
console.log(parseInt(input));

 */

/* const arr = ["a", "b", "c", "d", "c", "b"];
for(let i=0; i<arr.length; i++){

}
 */
 /* const arr = ["a", "b", "c", "d", "c", "b"];
  function removeDuplicates(arr) {
    let unique = [];
    arr.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
 }
 console.log(removeDuplicates(arr));
 
 
 const str = "google";
 let unique = "";
 for(let i =0; i<str.length; i++) {
 if(!unique.includes(str[i])) {
 unique += str[i];
 }
 }
 console.log(unique);
 
 */

//---> MAX-MIN sum of array
// const arr = [1, 2, 3, 4, 5, 6];
// let sum = 0;

// for(let i=0; i<arr.length; i++) {
// sum += arr[i];
// }
// console.log(sum);
// let maxSum = sum - Math.min(...arr);
// let minSum = sum - Math.max(...arr);
// console.log(maxSum, minSum);

// function that count character occurrences in string
/* function count_occur(str) {
  // checking string is valid or not
  if (str.length == 0) {
    console.log("Invalid string")
    return;
  }
  //cor loop to iterate over string
  for (let i = 0; i < str.length; i++) {
    //variable counting occurrence
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] == str[j] && i > j) {
        break;
      }
      if (str[i] == str[j]) {
        count++;
      }
    }
    if (count > 0)
      console.log(`${str[i]}: ${count}`);
  }
}
// test string
count_occur(str); */



//REMOVING VOWELS FROM STRING
// const str = "hEllO wOrld";
// let vowels = ["a","e","i","o","u","A","E","I","O","U"];

// let newWord = "";
// for(let i =0; i<str.length; i++) {
// if(!vowels.includes(str[i])) {
// newWord += str[i];
// }
// }
// console.log(newWord);

const word = "hEllO woRld";
let vowels = ["a","e","i","o","u","A","E","I","O","U"];
let newWord = "";
function removeVowels(v,w) {
for(let i=0; i<w.length; i++) {
if(!v.includes(w[i])) {
newWord += w[i];
}
}
}
removeVowels(vowels,word);
console.log(newWord);


//2 inputs,comparing strings and find unique element .. create a fn which will take 2 string has a parameter and find the unique
const input = "hello world";
const input2 = "hey pPl";
let newWord1 = "";

function unique(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      newWord1 += a[i];
    }
  }
  for(let j=0; j<b.length; j++) {
  if(!a.includes(b[j])) {
  newWord1 += b[j];
  }
  }

}
unique(input, input2);
console.log(newWord1);

//let n = 6
/* let sum =0
for (let i =0; i <= n;i++){
sum = sum + i;
}
console.log(sum); */
//console.log((n/2)*(n+1));

// a fn 2 params one is array,array length,find sum of arrays
/* let arr = [];
let l = 5;
let add = 0;
function sum(arr,l) {
for(let i=1; i<=l; i++) {
arr.push(i);
}
for(let i=0; i<arr.length; i++) {
add += arr[i];
}
console.log(add);
}
sum(arr,l);
 */
 
/* let a = "hello";
let vowel = ["a","e","i","o","u"];
let b = "";
for(let i=0; i<a.length; i++) {
if(!vowel.includes(a[i])) {
b += "3"
} else {
b += a[i];
}
}
console.log(b); */



/* const str = 'hello'
const vowels = ['a', 'e', 'i', 'o', 'u']
let test = ''
for (let i =0; i< str.length; i++){
   if(!vowels.includes(str[i])){
    test += str[i]
   }
   else {
   test += '*'
   }
}

console.log(test)
 */
 
let arr = [1, 2, 3, 4, 5, 6];
let evenSum = 0;
let oddSum = 0;
let result;
for(let i=0; i<arr.length; i++) {
if(arr[i] % 2 == 0) {
//console.log(arr[i]);
evenSum += arr[i];
} else {
oddSum += arr[i];
//console.log(arr[i]);
}
}
result = evenSum - oddSum;
console.log(result);
/*  console.log(evenSum);
console.log(oddSum);

 */

//a string ,if found any vowels change to uppercase
//consonant put even no 

// let str = "helloworld";
// let newWord = "";
// let vowels = ["a", "e", "i", "o", "u"];
// for(let i=0; i< str.length; i++) {
// if(vowels.includes(str[i])) {
// newWord += str[i].toUpperCase();
// } else {
// newWord += "8"
// }
// }
// console.log(newWord)





