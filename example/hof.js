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