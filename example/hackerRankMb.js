//>>>Given an array of integers, find the sum of its elements .

/* let ar = [1, 2, 3];
let sum = 0;

function simpleArraySum(ar) {
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i]
  }
  return sum;
}

let result = (simpleArraySum(ar));
console.log(result)
 */

//>>>Given a time in 12-hour AM/PM format, convert it to military (24-hour) time












//>>>CamelCase (count of words)

/* let s = "helloWorldHi";

function camelCase(s) {
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i].toUpperCase()) {
      count++
    }
  }
  return count;

}
let result = camelCase(s);
console.log(result);
 */


//Find the Median
 /* let arr = [0, 1, 2, 4, 6, 5, 3, 8]
 
 function findMedian(arr) {
  let sortedArr = arr.sort((a, b) => {
    return a - b;
  })
  const mid = Math.floor(sortedArr.length / 2)
 
  console.log(mid)
  if (sortedArr.length % 2 == 0) {
    return (sortedArr[mid - 1] + sortedArr[mid]) / 2
  }
  return sortedArr[mid]
 }
 
 console.log(findMedian(arr))
  */