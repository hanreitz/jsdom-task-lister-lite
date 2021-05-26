document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById('create-task-form');
  const taskDescription = document.getElementById('new-task-description');
  const taskList = document.querySelector('#list ul#tasks');

  document.addEventListener("submit", function(event) {
    event.preventDefault();

    let newTask = document.createElement('li');
    newTask.innerText = taskDescription.value;
    taskList.append(newTask);
    taskDescription.value = '';
  })
});