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

window.onload = function() {
   onReady();
};
