const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");

const generateTemplate = (todo) => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center text-light">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>
   `;
  //add the new todo to the todo list
  list.innerHTML += html;
};

//Submit
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim(); //trim to remove white spaces

  //check if user entered valid information
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

//Delete todos
list.addEventListener("click", (e) => {
  //if the target element contains class delete
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
