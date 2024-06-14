const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector("#todo-btn");
const todoBox = document.querySelector(".todos");

const addTodo = () => {
  //add new todo
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");
  todoItem.innerHTML = `<input type="checkbox" class="todo-check" >
                <p class="todo">${todoInput.value}</p>
                <span class="edit"><i class="fa-solid fa-pen-to-square fa-xs"></i></span>
                <span class="delete"><i class="fa-solid fa-trash fa-xs"></i></span>`;
  todoBox.prepend(todoItem);
  todoInput.value = "";

  const editButtons = document.querySelectorAll(".edit");
  const deleteButtons = document.querySelectorAll(".delete");
  const checkboxes = document.querySelectorAll(".todo-check");


  //delete button
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.parentElement.remove();
    });
  });

  //edit button

  editButtons.forEach((button) => {
    button.addEventListener("click", () => {
      todoInput.value = button.previousElementSibling.innerText;
      button.parentElement.remove();
    });
  });

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click",()=>{
        checkbox.nextElementSibling.classList.toggle("mark");
    });

  });

};

todoButton.addEventListener("click", addTodo);

document.addEventListener("keydown",(e) => {
  if(e.key == "Enter"){
    addTodo();
  }
})
