                           //REDUCE FUNCTION 
//Reduce function takes 2 parameters, >1st parameter = accumulator(it takes initial value) >2nd parameter = iterations(it is current value) and returns the sum . 

//print sum of even no's using reduce function
  
  /* let array = [1,2,3,4,5,6,7,8,9];
  function sum(arr) {
  let evenSum  = arr.reduce((a,b) => {
  if(b % 2 == 0) {
  return a + b;
  } else {
  return a ;
  }
  },0)
  return evenSum;
  }
  let result = sum(array);
  console.log(result); */
  
  
  //print sum of odd numbers

  /*  let array = [1,2,3,4,5];
  function sum(arr) {
  let c = arr.reduce((a,b) => {
  if(b % 2 !== 0) {
  return a+b
  } else {
  return a;
  }
  },0)
  return c;
  }
  let result=sum(array)
   console.log(result);
  */


  //find how many ppl has voted 
/* function totalVotes(arr) {
    let votes = arr.reduce((a, b) => {
      if (b.voted) {
        return a + 1;
      } else {
        return a;
      }
    }, 0)
    return votes;
  }
  
  var voters = [{
      name: 'Bob',
      age: 30,
      voted: true
    },
    {
      name: 'Jake',
      age: 32,
      voted: true
    },
    {
      name: 'Kate',
      age: 25,
      voted: false
    },
    {
      name: 'Sam',
      age: 20,
      voted: false
    },
    {
      name: 'Phil',
      age: 21,
      voted: true
    },
    {
      name: 'Ed',
      age: 55,
      voted: true
    },
    {
      name: 'Tami',
      age: 54,
      voted: true
    },
    {
      name: 'Mary',
      age: 31,
      voted: false
    },
    {
      name: 'Becky',
      age: 43,
      voted: false
    },
    {
      name: 'Joey',
      age: 41,
      voted: true
    },
    {
      name: 'Zack',
      age: 19,
      voted: false
    }
  ];
  console.log(totalVotes(voters)); // 6 */


 //find sum of fishing people's age

/* let student = [

  { name: 'David', age: 23, hobby: 'fishing' },

  { name: 'Rachel', age: 25, hobby: 'cooking' },

  { name: 'Rahul', age: 22, hobby: 'fishing' }

];
function sum(c) {
let age = c.reduce((a,b) => {
if(b.hobby == 'fishing') {
return a + b.age;
} else {
return a;
}
},0)
return age;
}
let result = sum(student)
console.log(result)

 */


 //find total price of listed items

/* const lineItems = [
  { description: 'Eggs (Dozen)', quantity: 1, price: 3,},
  { description: 'Cheese', quantity: 0.5, price: 5,},
  { description: 'Butter', quantity: 2, price: 6}
];

function sum(c) {
let price = c.reduce((a,b) => {
return a + (b.price * b.quantity);
},0)
return price;
}
let result = sum(lineItems)
console.log(result)

 */


                                  // MAP FUNCTION

//Map is a higher order array function that takes 2 parameters, element and index and returns new array.

//add 2 to each element in array

/* let arr = [1,2,3,4,5,6,7]
let result = arr.map((e,i) => {
return e + 2;
})
console.log(result)
 */