// // console.log("hello");//1
// // setTimeout(() => {
// //   console.log("timer");
// // }, 10000);//6

// // setTimeout(() => {
// //   console.log("t");//4
// // }, 3000);
// // console.log("string")//2

// // setTimeout(() => {
// //   console.log("o");//5
// // }, 4000);

// //console.log("end");//3

// console.log("start"); //1

// function test(name) {
//   setTimeout(() => {
//     return `my name is ${name}`;
//   }, 1000);
// }

// const resT = test("mithi");
// console.log(resT); //2
// console.log("end"); //3
// console.log("2nd example");

// console.log("start");
// function test(name, cb) {
//   setTimeout(() => {
//     cb(`my name is ${name}`);
//   }, 1000);
// }
// const res = test("mithi", (res) => console.log(res));
// console.log("end");

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// evenno(arr);
// function evenno(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       console.log(arr[i]);
//     }
//   }
// }

// array(arr);
// const array = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//           console.log(arr[i]);
//         }
//       }
// }
// console.log(a);
// const a=10;
//reference error 1) if you haven't provided the variable which you are accessing. 2) in hoisting when we use keyword let and const for any variable we get reference error (because these two go inside temporal dead zone - is a time between initialization and access) .

// const name = "adithya";
// console.log(name.length);
// // 7 6 5 4 3 2 1 0
// let reversename= "";
// function reverse(name) {
//     for (let i=name.length-1; i>=0; i--) {
//         reversename += name[i];

//     }
// }
// reverse(name);
// console.log(reversename);

// let array = [1, 2, 3, 4, 5];
// let sumofArray = 0;
// function sumArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     sumofArray += array[i];
//   }
// }
// sumArray(array);
// console.log(sumofArray);

// function hello(b,cb) {
//   cb("munna")

// }
// hello(12, (hey) => {
//   console.log(hey)
// })

// creating and appending elements
let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-btn");
todoButton.style.backgroundColor = "green";
let todoContainer = document.createElement("div");
let todoList = document.createElement("ul");
document.body.appendChild(todoContainer);
todoContainer.appendChild(todoList);
//assigning eventlisteners
todoButton.addEventListener("click", addTodo); //addTodo is a function and click is an event .
todoList.addEventListener("click", deleteTodo); //deleteTodo is a function and click is an event
function addTodo(e) {
  e.preventDefault();
  //creating list items
  let todo = document.createElement("div"); //createElement takes one parameter, which is tagName.the tag you wanna create.
  let newTodo = document.createElement("li");
  let delButton = document.createElement("button");
  delButton.style.backgroundColor = "orange";
  delButton.innerText = "Delete";
  delButton.classList.add("trashButton");
  console.log(delButton);
  newTodo.innerText = todoInput.value;
  todo.appendChild(newTodo);
  todo.appendChild(delButton);
  todoList.appendChild(todo);
  todoInput.value = "";
}

function deleteTodo(e) {
  const item = e.target;
  console.log(item);
  if (item.classList[0] === "trashButton") {
    item.parentElement.remove();
  }
}


