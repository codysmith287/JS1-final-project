'use strict';

const todoForm = document.forms.todoForm;
const todoList = document.querySelector("#todoList");
const doneList = document.querySelector("#doneList");

let todoArray = [];
let doneArray = [];

// Buttons

// function buttonCreator() {
// let buttonDiv = document.createElement("div");
// let button = document.createElement("button");
// let checkBtn = document.createElement("i");
// checkBtn.classList.add("fas", "fa-check");
// buttonDiv.appendChild(button);
// button.appendChild(checkBtn);
// };


// Add todo list items.

todoForm.addEventListener("submit", e => {
  e.preventDefault();

  //Text Input
  let todoListItem = document.querySelector("#todoListItem").value;

  // Button Div
  let buttonDiv = document.createElement("div");

  // Check Button
  let checkBtn = document.createElement("button");
  let checkIcon = document.createElement("i");
  checkIcon.classList.add("fas", "fa-check", "checkBtn");
  buttonDiv.appendChild(checkBtn);
  checkBtn.appendChild(checkIcon);


  // Edit Button
  let editBtn = document.createElement("button");
  let editIcon = document.createElement("i");
  editIcon.classList.add("fas", "fa-edit", "editBtn");
  buttonDiv.appendChild(editBtn);
  editBtn.appendChild(editIcon);

  //Delete Button
  let deleteBtn = document.createElement("button");
  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fas", "fa-trash-alt", "deleteBtn");
  buttonDiv.appendChild(deleteBtn);
  deleteBtn.appendChild(deleteIcon);


  // console.log(todoListItem);
  if (todoListItem === ' ') {
    alert ("You cannot do nothing. Please enter an actual to-do task.")
  } else {
    let listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(todoListItem));
    listItem.appendChild(buttonDiv);
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
