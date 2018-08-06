'use strict';

const todoForm = document.forms.todoForm;
const todoList = document.querySelector("#todoList");
const doneList = document.querySelector("#doneList");

let todoArray = [];
let doneArray = [];


// Add todo list items.

todoForm.addEventListener("submit", e => {
  e.preventDefault();
  let todoListItem = document.querySelector("#todoListItem").value;
  // console.log(todoListItem);
  if (todoListItem === ' ') {
    alert ("You cannot do nothing. Please enter an actual to-do task.")
  } else {
    let listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(todoListItem));
    todoList.appendChild(listItem);
    todoArray.push([listItem]);
    console.log(todoArray);
  };
  todoForm.reset();
});






// 1. When the submit button is clicked on your todo form, get the user input and add it to an array
// 2. Create a function that will clear out the list and loop over the array to print out all of the todo items.
// 3. Each todo item should have a button to delete the item and a checkbox to mark the item as finished by using strikethrough on the text for a handful of seconds, then remove the todo item and move it to the "done" list.
// 4. The "done" list should be stored somewhere that persists so the user can come back to it. It should also disappear from the view after a couple minutes, but be able to be recalled by the click of a button.
