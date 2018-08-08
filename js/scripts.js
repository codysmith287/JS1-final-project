'use strict';

const todoForm = document.forms.todoForm;
const todoList = document.querySelector("#todoList");
const doneList = document.querySelector("#doneList");

let todoArray = [];
let doneArray = [];
let checkBtnArray =[];

// Add todo list items.

todoForm.addEventListener("submit", e => {
  e.preventDefault();

  let listItem;

  //List Div
  let listDiv = document.createElement("div");
  listDiv.classList.add("listDiv");

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
  // checkBtnArray.push(checkBtn);

  // Edit Button
  let editBtn = document.createElement("button");
  let editIcon = document.createElement("i");
  editIcon.classList.add("fas", "fa-edit", "editBtn");
  buttonDiv.appendChild(editBtn);
  editBtn.appendChild(editIcon);

  // Finish Edit Button
  let finishEditBtn = document.createElement("button");
  let finishEditIcon = document.createElement("i");
  finishEditIcon.classList.add("fas", "fa-user-check", "finishEditBtn");
  finishEditBtn.appendChild(finishEditIcon);

  // Undo button
  let undoBtn = document.createElement("button");
  let undoIcon = document.createElement("i");
  undoIcon.classList.add("fas", "fa-undo-alt", "undoBtn");
  undoBtn.appendChild(undoIcon);


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
    listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(todoListItem));
    listDiv.appendChild(listItem);
    listDiv.appendChild(buttonDiv);
    todoList.appendChild(listDiv);
    todoArray.push(todoList);
    console.log(todoArray);
  };

  // Check Button Event Listener - line-through and append to doneList
  checkBtn.addEventListener("click", e => {
    listItem.classList.add("lineThrough");
    buttonDiv.removeChild(checkBtn);
    buttonDiv.replaceChild(undoBtn, editBtn);


    var timer;
    function doneTimer() {
      timer = setTimeout(done, 1000);
    };
    function done() {
      doneList.appendChild(listDiv);
      doneArray.push(todoList);
      // console.log(doneArray);
    };
    doneTimer();
  });

  // Edit Button Event Listener
  editBtn.addEventListener('click', e => {
    let placeholder = listItem.innerHTML;
    let editInput = document.createElement("input");

    editInput.setAttribute("type", "text");
    editInput.setAttribute("required", "");
    editInput.setAttribute("placeholder", `${placeholder}`);
    editInput.classList.add("edit");

    listDiv.replaceChild(editInput, listItem);
    buttonDiv.replaceChild(finishEditBtn, editBtn);

      finishEditBtn.addEventListener('click', e=> {
        let editText = document.querySelector(".edit").value;
        listItem = document.createElement("li");
        listItem.appendChild(document.createTextNode(editText));
        listDiv.replaceChild(listItem, editInput);
        editInput.classList.remove("edit");
        buttonDiv.replaceChild(editBtn, finishEditBtn);
      });

  });


  // Delete Button Event Listener
  deleteBtn.addEventListener('click', e => {
    let areYouSure = confirm("Are you sure you want to delete this?");
    if (areYouSure === true) {

      let node = document.querySelector(".listDiv");
      node.parentNode.removeChild(node);

    } else {

    };
  });

  // Undo Button Event
  undoBtn.addEventListener('click', e => {
    listItem.classList.remove("lineThrough");
    todoList.appendChild(listDiv);
    buttonDiv.replaceChild(editBtn, undoBtn);
    buttonDiv.insertBefore(checkBtn, editBtn);

  });


  todoForm.reset();
});
