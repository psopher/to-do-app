
function onReady() {
  let id = 0;

  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }



    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });

    newToDoText.value = '';

    id++;

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      //Create Delete button
      let deleteButton = document.createElement('button');
      deleteButton.innerHTML = "Delete";
      newLi.textContent = toDo.title;
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);

      toDoList.appendChild(newLi);

      deleteButton.addEventListener('click', () => {
        index = toDo.id;
        toDos = toDos.filter(toDo => toDo.id != index);
        renderTheUI()
      });
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}

window.onload = function() {
   onReady();
};

/*
function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    //Create Delete button
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete";
    deleteButton.type = "delete";

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the delete button
    newLi.appendChild(deleteButton);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    deleteButton.addEventListener('click', () => {
      newLi.parentNode.removeChild(newLi);
    });

    //empty the input
    newToDoText.value = '';
  });
}
*/
