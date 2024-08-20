document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${taskText} <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = '';

        // Attach the delete event listener to the new button
        const deleteButton = listItem.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });
    }

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
