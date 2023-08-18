//fibbonaci series

/* let numberOne = 0;
let nextNumber = 1;
let sum;
for(let i =0; i<10; i++) {
sum = numberOne + nextNumber;
numberOne = nextNumber 
nextNumber = sum
console.log(nextNumber);
} */



/* let string = "Welcome to this Javascript Guide!";
let reverseString = "";
let arr = string.split(" ")
for(let i=0; i<arr.length; i++){
arr[i] = (arr[i].split("").reverse().join(""))
}
console.log(arr.join(" "))
 */
 
 
 
//print 1 to 5 in reverse manner
/* 
for(let i=5; i>=1; i--) {
console.log(i)
}

for(let i =1; i<=5; i++) {
console.log(i)
}
 */
 
 
 //array : return sum of it
 
 /* let array = [1,2,3,4,5,6];
 let sum = 0;
 for(let i=0; i<array.length; i++) {
 sum = sum + array[i];
  console.log(sum)
 } */



//Number array and each number should be multipied by 2

/* let array = [1,2,3,4,5,6,7];
for(let i =0; i<array.length; i++) {
array[i] = array[i] * 2;
}
console.log(array)
  */
 
 
 //print 1 to 5 in triangle pattern

/* let rows = 5;
let result = "";
for(let i=1; i<=rows; i++) {
for(let j=1; j<=i; j++) {
result += j;
}
result += "\n"
}
console.log(result) */


//reverse manner
/* let rows = 5;
let result = "";
for(let i=1; i<=rows; i++) {
for(let j=1; j<=6-i; j++) {
result += j
}
result += "\n"
}
console.log(result) */



//star pattern print
/* let rows = 5;
let pattern = "";
for (let n = 1; n <= rows; n++) {
   for (let num = 1; num <= 5; num++) {
      pattern += "*";
   }
   pattern += "\n";
}
console.log(pattern);
 */


 
 /* let array = [1,2,3,4,5,6,7,8];
array.push(45);
array.pop();
array.unshift(8);
array.shift();
console.log(array)

let array2 = [1,2,3,4];
array2.reduce(() => {
}) */


//finding sum of array using flat method
 /* const test = [[[3, 2], [1], [4, 12]]];
 console.log(test.flat(2)) */
 /* let flattenArray = test.flat();
 let sum = 0;
 function oddSum(a) {
 for(let i=0; i<a.length; i++) {
 if(a[i] % 2 !== 0) {
 sum += a[i]
 }
 }
 }
 oddSum(flattenArray)
 console.log(sum) */


//find the sum of price from cartitems
/* const cartItems = [

  {
    id: 1,
    qty: 3,
    price: 300
  },

  {
    id: 2,
    qty: 2,
    price: 100
  }
]
let price = [];
let totalSum = 0;

function getTotal(a) {
  a.map((e, i) => {
    price.push(e.price)
  })
  for (let i = 0; i < price.length; i++) {
    totalSum += price[i]
  }
}
getTotal(cartItems)
console.log(price)
console.log(totalSum)
 */
  
 
//sort an array without using sort fn
/* 
let arr = [1, 4, 6, 8, 3, 2, 9];
let b;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[i]) {
      b = arr[i]
      arr[i] = arr[j]
      arr[j] = b
    }
  }
}
console.log(arr) */


 //find the duplicate from an array

/* let arr = [1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 7, 6, 5, 8, 9, 10];
let dupArr = [];

function duplicate(a) {
  for (let i = 0; i < a.length; i++) {
    if (!dupArr.includes(a[i])) {
      dupArr.push(arr[i])
    }
  }
  return dupArr;
}
let result = duplicate(arr);
console.log(result)
 */
 
 
 
 
 
 
 
 
 
 
 
 