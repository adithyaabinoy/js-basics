//string of words . output to capitalize 

/* let str =  "hello world i am having coffee now , hahahaha";
function cap(str) {
let string = str.split(" ")
let c =string.map((e,i) => {
return (e.charAt(0).toUpperCase() + e.substring(1));
})
return c;
}
let result = cap(str);
console.log(result.join(" "))
//console.log(str.charAt(0).toUpperCase()) */


/* //string, remove duplicate
let str = "hhheeelllooo";
const duplicate = (str) => {
  let string = [];
  let unique = str.split("").map((e, i) => {
    if (!string.includes(e)) {
      string.push(e)
    }
  })
  return string;
}
let result =duplicate(str)
console.log(result.join("")) */