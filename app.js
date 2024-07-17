const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

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

//filter todo function
const filterTodos = (term) => {
  //if the item doesnt include term add filtered class
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  //if the item does include term remove filtered class
  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

//Search todo keyup event
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
