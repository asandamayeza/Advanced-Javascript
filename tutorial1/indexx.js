//*************SUMMARY: SYNTAX**************
// // // webStorageObject.setItem("key", "value");
// // // webStorageObject.key(index);
// // // webStorageObject.getItem(key);
// // // webStorageObject.length;
// // // webStorageObject.removeItem(key);
// // // webStorageObject.clear();


//*********************SET ITEM METHOD / BUILT-IN INTERFACE**********************/

//**********HOW TO ACCESS SESSION & LOCAL STORAGE OBJECTS************/
// //Three ways to do the same thing:
// sessionStorage.bestColor = "Green";
// sessionStorage["bestColor"] = "Green";
// sessionStorage.setItem("bestColor", "Green"); //NB: Best practice

// console.dir(sessionStorage);

//**********EXAMPLE 1: STORE DATA IN SESSION STORAGE OBJECT************/
// sessionStorage.setItem("color", "Pink");
// console.log("Session Storage: ", sessionStorage);


//**********EXAMPLE 2: STORE DATA IN LOCAL STORAGE OBJECT************/
// localStorage.setItem("color", "Blue");
// console.log("Local Storage: ", localStorage);


//**********EXAMPLE 3: NON-SERIALIZED OBJECTS IN WEB STORAGE************/
// sessionStorage.setItem("myBio", {name: "Bhabha"}); //Results: [object Object]
// console.log(sessionStorage);


//**********EXAMPLE 4: STORE SERIALIZED OBJECTS IN WEB STORAGE************/
// sessionStorage.setItem("myBio", JSON.stringify({name: "Bhabha"}));
// console.log(sessionStorage);


//*******************************KEY METHOD / BUILT-IN INTERFACE**************/

//**********EXAMPLE 1: GET NAME OF ITEM IN SESSION STORAGE OBJECT************/
// sessionStorage.setItem("carColor", "Black");
// sessionStorage.setItem("pcColor", "Silver");
// sessionStorage.setItem("laptopColor", "White");
// console.log("Session Storage: ", sessionStorage);
// console.log("Index 0: ", sessionStorage.key(0));
// console.log("Index 1: ", sessionStorage.key(1));
// console.log("Index 2: ", sessionStorage.key(2));
// console.log("Index 3: ", sessionStorage.key(3));
// console.log("Index 4: ", sessionStorage.key(4));


//**********EXAMPLE 2: GET NAME OF ITEM IN LOCAL STORAGE OBJECT************/
// localStorage.setItem("carColor", "Black");
// localStorage.setItem("pcColor", "Silver");
// localStorage.setItem("laptopColor", "White");
// console.log("Local Storage: ", localStorage);
// console.log("Index 0: ", localStorage.key(0));
// console.log("Index 1: ", localStorage.key(1));
// console.log("Index 2: ", localStorage.key(2));
// console.log("Index 3: ", localStorage.key(3));



//*********************GET ITEM METHOD / BUILT-IN INTERFACE************************/

//**********EXAMPLE 1: GET DATA FROM SESSION STORAGE OBJECT************/
// let sessionItem = sessionStorage.getItem("color");
// console.log("Session Storage Color: ", sessionItem);


//**********EXAMPLE 2: GET DATA FROM LOCAL STORAGE OBJECT************/
// let localItem = localStorage.getItem("color");
// console.log("Local Storage Color: ", localItem);



//**********EXAMPLE 1: VERIFY NUMBER OF ITEMS IN SESSION STORAGE OBJECT************/
// console.log("Session Storage Length = ", sessionStorage.length);


//**********EXAMPLE 2: VERIFY NUMBER OF ITEMS IN LOCAL STORAGE OBJECT************/
// console.log("Local Storage Length = ", localStorage.length);


//******REMOVE ITEM METHOD************************/

//**********EXAMPLE 1: REMOVE DATA FROM SESSION STORAGE OBJECT************/
// sessionStorage.removeItem("pcColor");
// console.log(sessionStorage.getItem("pcColor")); //returns null


//******REMOVE DATA FROM LOCAL STORAGE OBJECT************/
// localStorageStorage.removeItem("pcColor");
// console.log(localStorageStorage.getItem("pcColor")); //returns null


//*************WEB STORAGE CLEAR METHOD************************/

//**********EXAMPLE 1: CLEAR ALL ITEMS FROM SESSION STORAGE OBJECT************/
// sessionStorage.clear();
// console.log("Session Storage: ", sessionStorage);


//******CLEAR ALL ITEMS FROM LOCAL STORAGE OBJECT********/
// localStorage.clear();
// console.log("Local Storage: ", localStorage);


// Local Storage
const localTodosContainer = document.getElementById('local-storage-todos-container');
const localInputEle = document.getElementById('local-storage-todo-input-ele');
const localAddTaskBtn = document.getElementById('local-storage-add-task-btn');

//function for local storage
function createLocalTodoLiElements(todoArray) {
    return todoArray.map((i, index) => {
        const liElement = document.createElement('li');
        const checkboxEle = document.createElement('input');
        const labelEle = document.createElement('label');

        checkboxEle.setAttribute('type', 'checkbox');
        checkboxEle.setAttribute('id', `local-chbx-${index}`);
        labelEle.setAttribute('for', `local-chbx-${index}`);

        checkboxEle.checked = i.checked;
        if (i.checked) labelEle.classList.add('todo-task-done');

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

window.addEventListener('load', () => {
//existing local storage content or return empty array
    const localTodoArray = JSON.parse(localStorage.getItem('codesweetlyStore')) || [];

    //question 3. //auto display on local session
    const todoLiElements = createLocalTodoLiElements(localTodoArray);
    localTodosContainer.replaceChildren(...todoLiElements);
});

localAddTaskBtn.addEventListener('click', () => {
    // Get existing session storage's content, if any. Otherwise, return an empty array:
    const currentTodoArray = JSON.parse(localStorage.getItem('codesweetlyStore')) || [];

    //merge currentToDoArray with the users new input
    const newTodoArray = [
        ...currentTodoArray,
        { checked: false, text: localInputEle.value },
    ];
    //add newTodoArray to the local session
    localStorage.setItem('codesweetlyStore', JSON.stringify(newTodoArray));
    const todoLiElements = createLocalTodoLiElements(newTodoArray);
    localTodosContainer.replaceChildren(...todoLiElements);
    localInputEle.value = '';

});

//localStorage.clear();

// Session Storage
const sessionTodosContainer = document.getElementById('session-storage-todos-container');
const sessionInputEle = document.getElementById('session-storage-todo-input-ele');
const sessionAddTaskBtn = document.getElementById('session-storage-add-task-btn');

//function for storage session
function createSessionTodoLiElements(todoArray) {
    return todoArray.map((i, index) => {
        const liElement = document.createElement('li');
        const checkboxEle = document.createElement('input');
        const labelEle = document.createElement('label');

        checkboxEle.setAttribute('type', 'checkbox');
        checkboxEle.setAttribute('id', `session-chbx-${index}`);
        labelEle.setAttribute('for', `session-chbx-${index}`);

        checkboxEle.checked = i.checked;
        if (i.checked) labelEle.classList.add('todo-task-done');

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

window.addEventListener('load', () => {
    //existing session storage content or return empty array
    const sessionTodoArray = JSON.parse(sessionStorage.getItem('codesweetlyStore')) || [];
     //question 4. auto display on session storage
    const todoLiElements = createSessionTodoLiElements(sessionTodoArray);
    sessionTodosContainer.replaceChildren(...todoLiElements);
});

sessionAddTaskBtn.addEventListener('click', () => {
    // Get existing session storage's content, if any. Otherwise, return an empty array:
    const currentTodoArray = JSON.parse(sessionStorage.getItem('codesweetlyStore')) || [];

    //merge currentToDoArray with the users new input
    const newTodoArray = [
        ...currentTodoArray,
        { checked: false, text: sessionInputEle.value },
    ];

    //add newTodoArray to the storage session
    sessionStorage.setItem('codesweetlyStore', JSON.stringify(newTodoArray));
    const todoLiElements = createSessionTodoLiElements(newTodoArray);
    sessionTodosContainer.replaceChildren(...todoLiElements);
    sessionInputEle.value = '';

});

