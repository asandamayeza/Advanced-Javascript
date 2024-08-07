
//session storage
const sessionTodosContainer = document.getElementById('session-storage-todos-container');
const sessionInputEle = document.getElementById('session-storage-todo-input-ele');
const sessionAddTaskBtn = document.getElementById('session-storage-add-task-btn');

function createTodoLiElements(todoArray) {
    return todoArray.map((i, index) => {
        const liElement = document.createElement('li');
        const checkboxEle = document.createElement('input');
        const labelEle = document.createElement('label');

        checkboxEle.setAttribute('type', 'checkbox');
        checkboxEle.setAttribute('id', `session-chbx-${index}`);
        labelEle.setAttribute('for', `session-chbx-${index}`);

        checkboxEle.addEventListener('click', (e) => {
            const todoArr = JSON.parse(sessionStorage.getItem('codesweetlyStore'));
            todoArr[e.target.getAttribute('id').split('-')[2]].checked =
                !todoArr[e.target.getAttribute('id').split('-')[2]].checked;
            sessionStorage.setItem('codesweetlyStore', JSON.stringify(todoArr));
            labelEle.classList.toggle('todo-task-done');
        });

        labelEle.textContent = i.text;
        liElement.append(checkboxEle, labelEle);
        return liElement;
    });
}

window.addEventListener(
    'load',
    (() => {
        const sessionTodoArray =
            JSON.parse(sessionStorage.getItem('codesweetlyStore')) || [];
        console.log(sessionTodoArray);
    })()
);

sessionAddTaskBtn.addEventListener('click', () => {
    // Get existing session storage's content, if any. Otherwise, return an empty array:
    const currentTodoArray =
        JSON.parse(sessionStorage.getItem('codesweetlyStore')) || [];

    // Merge currentTodoArray with the user's new input:
    const newTodoArray = [
        ...currentTodoArray,
        { checked: false, text: sessionInputEle.value },
    ];

    // Add newTodoArray to the session storage object:
    sessionStorage.setItem('codesweetlyStore', JSON.stringify(newTodoArray));

    const todoLiElements = createTodoLiElements(newTodoArray);
    sessionTodosContainer.replaceChildren(...todoLiElements);
    sessionInputEle.value = '';
});




//local storage
const localTodosContainer = document.getElementById('local-storage-todos-container');
const localInputEle = document.getElementById('local-storage-todo-input-ele');
const localAddTaskBtn = document.getElementById('local-storage-add-task-btn');

function createTodoLiElements(todoArray) {
    return todoArray.map((i, index) => {
        const liElement = document.createElement('li');
        const checkboxEle = document.createElement('input');
        const labelEle = document.createElement('label');

        checkboxEle.setAttribute('type', 'checkbox');
        checkboxEle.setAttribute('id', `local-chbx-${index}`);
        labelEle.setAttribute('for', `local-chbx-${index}`);

        checkboxEle.addEventListener('click', (e) => {
            const todoArr = JSON.parse(localStorage.getItem('codesweetlyStore'));
            todoArr[e.target.getAttribute('id').split('-')[2]].checked =
                !todoArr[e.target.getAttribute('id').split('-')[2]].checked;
            localStorage.setItem('codesweetlyStore', JSON.stringify(todoArr));
            labelEle.classList.toggle('todo-task-done');
        });

        labelEle.textContent = i.text;
        liElement.append(checkboxEle, labelEle);
        return liElement;
    });
}

window.addEventListener(
    'load', 
    (() => {
        const localTodoArray =
            JSON.parse(localStorage.getItem('codesweetlyStore')) || [];
        console.log(localTodoArray);
    })()

);

localAddTaskBtn.addEventListener('click', () => {
    // Get existing local storage's content, if any. Otherwise, return an empty array:
    const currentTodoArray =
        JSON.parse(localStorage.getItem('codesweetlyStore')) || [];

    // Merge currentTodoArray with the user's new input:
    const newTodoArray = [
        ...currentTodoArray,
        { checked: false, text: localInputEle.value },
    ];

    // Add newTodoArray to the local storage object:
    localStorage.setItem('codesweetlyStore', JSON.stringify(newTodoArray));

    const todoLiElements = createTodoLiElements(newTodoArray);
    localTodosContainer.replaceChildren(...todoLiElements);
    localInputEle.value = '';
});

function displayTasks(){
    let tasks = localStorage.getItem('tasks');
    if (tasks) {
tasks = JSON.parse(tasks);
    }else {
        tasks = [];
    }
    tasks.push(task);
    localStorage
}