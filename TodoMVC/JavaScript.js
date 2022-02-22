let template;
let unfinishedTasks = 0;
let finishedTasks = 0;
let filterStatus = "all";

start();

function start() {
    setupTemplate();
    setupInputBox();
    setupToggleAll();
    setupClearCompleted();
    setupShowAllButton();
    setupShowActiveButton();
    setupCompletedButton();
}

function setupTemplate() {
    template = document.querySelector('#todo-template');
    template.remove();
}

function setupInputBox() {
    let form = document.querySelector('.todo-bar');
    let inputText = form.querySelector('#input-bar');
    form.onsubmit = event => {
        event.preventDefault();
        addTodoItem(inputText.value);
        updateTaskCount();
        inputText.value = "";
    };
}

function setupToggleAll() {
    let checkBox = document.querySelector('.toggle-all');
    checkBox.onclick = () => {
        toggleAll(checkBox.checked);
        updateTaskCount();
    };
}

function setupClearCompleted() {
    let button = document.querySelector('#clear-completed');
    button.onclick = () => {
        removeAllCompletedItems();
        updateTaskCount();
        document.querySelector('.toggle-all').checked = false;
    };
}

function setupShowAllButton() {
    let button = document.querySelector('#all');
    button.onclick = () => {
        filterStatus = "all";
        let liItems = document.querySelector('#todo-list').querySelectorAll('li');
        for (const li of liItems) {
            setItemViewStatus(li);
        }
        button.classList.add("active");
        document.querySelector('#active').classList.remove("active");
        document.querySelector('#completed').classList.remove("active");
    };
}

function setupShowActiveButton() {
    let button = document.querySelector('#active');
    button.onclick = () => {
        filterStatus = "active";
        let liItems = document.querySelector('#todo-list').querySelectorAll('li');
        for (const li of liItems) {
            setItemViewStatus(li);
        }
        button.classList.add("active");
        document.querySelector('#all').classList.remove("active");
        document.querySelector('#completed').classList.remove("active");
    };
}

function setupCompletedButton() {
    let button = document.querySelector('#completed');
    button.onclick = () => {
        filterStatus = "completed";
        let liItems = document.querySelector('#todo-list').querySelectorAll('li');
        for (const li of liItems) {
            setItemViewStatus(li);
        }
        button.classList.add("active");
        document.querySelector('#all').classList.remove("active");
        document.querySelector('#active').classList.remove("active");
    };
}

function setItemViewStatus(li) {
    let hidden = "hidden";

    switch (filterStatus) {
        case "all":
            li.classList.remove(hidden);
            break;
        case "active":
            if (!li.classList.contains("completed")) {
                li.classList.remove(hidden);
            }
            else {
                li.classList.add(hidden);
            }
            break;
        case "completed":
            if (li.classList.contains("completed")) {
                li.classList.remove(hidden);
            }
            else {
                li.classList.add(hidden);
            }
            break;
        default:
            break;
    }
}

function removeAllCompletedItems() {
    let liItems = document.querySelector('#todo-list').querySelectorAll('li');
    for (const li of liItems) {
        let checkBox = li.querySelector('.toggle');
        if (checkBox.checked) {
            finishedTasks--;
            li.remove();
        }
    }
}

function addTodoItem(text) {
    if (!text) { return; }

    let li = template.content.firstElementChild.cloneNode(true);
    
    let label = li.querySelector('.todo-text');
    label.textContent = text;

    let doneToggle = li.querySelector('.toggle');
    let removeButton = li.querySelector('.remove-button');
    removeButton.onclick = () => {
        if (doneToggle.checked) {
            finishedTasks--;
        }
        else {
            unfinishedTasks--;
        }
        li.remove();
        updateTaskCount();
    };

    li.addEventListener("mouseenter", function (event) {
        event.target.querySelector(".remove-button").classList.remove("hidden");
    });
    li.addEventListener("mouseleave", function (event) {
        event.target.querySelector(".remove-button").classList.add("hidden");
    });

    doneToggle.onclick = () => {
        toggleDone(li, doneToggle.checked);
        updateTaskCount();
    };

    setItemViewStatus(li);
    
    let ul = document.querySelector('#todo-list');
    ul.append(li);
    unfinishedTasks++;


    document.querySelector(".toggle-all").checked = false;
}

function toggleAll(isChecked) {
    let liItems = document.querySelector('#todo-list').querySelectorAll('li');

    for (const li of liItems) {
        let toggle = li.querySelector('.toggle');
        if (toggle.checked != isChecked) {
            toggle.checked = isChecked;
            toggleDone(li, isChecked);
        }
    }
}

function toggleDone(li, isChecked) {
    if (isChecked) {
        li.classList.add("completed");
        finishedTasks++;
        unfinishedTasks--;
    }
    else if (!isChecked) {
        li.classList.remove("completed");
        finishedTasks--;
        unfinishedTasks++;
    }
    setItemViewStatus(li);
}


function updateTaskCount() {

    let todolist = document.querySelector("#todo-list");
    let statusField = document.querySelector("#status-field");
    let removeAllCompletedItemsButton = statusField.querySelector("#clear-completed");
    let unfinishedTaskSpan = statusField.querySelector("#unfinished-tasks");
    // toggle visiblity of remove all button
    if (finishedTasks > 0) {
        removeAllCompletedItemsButton.classList.remove("hidden");
    }
    else {
        removeAllCompletedItemsButton.classList.add("hidden");
    }

    if (finishedTasks === 0 && unfinishedTasks === 0) {
        statusField.classList.add("hidden");
        todolist.classList.add("hidden");
    }
    else {
        statusField.classList.remove("hidden");
        todolist.classList.remove("hidden");
        unfinishedTaskSpan.textContent = unfinishedTasks;
    }
}