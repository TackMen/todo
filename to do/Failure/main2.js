const taskValue = document.getElementsByClassName('task-form__content__input-text')[0];
const taskSubmit = document.getElementsByClassName('add-cansel__addbtn')[0];
const taskList = document.getElementsByClassName('task__list')[0];

const addTasks = (task) => {
    const listItem = document.createElement('li');
    const showItem = taskList.appendChild(listItem);
    showItem.innerHTML = task;

    const deleteButton = document.getElementsByClassName(js-deleteAllItem);
    deleteButton.addEventListener('click',Alldelete => {
        Alldelete.preventDefault();
        deleteTasks(deleteButton);
    });
};

const deleteTasks = (deleteButton) => {
    
}
