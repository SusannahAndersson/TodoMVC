let template;
let unfinishedTasks = 0;
let finishedTasks = 0;

start();

function start(){
    setupTemplate();
    setupInputBox();
    setupToggleAll();
    setupClearCompleted();
    setupShowAllButton();
    setupShowActiveButton();
    setupCompletedButton();
}

function setupShowAllButton() {
    let button = document.querySelector('#all');
    button.onclick = () => {
        setItemsToShow("all");
    };
}

function setupShowActiveButton() {
    let button = document.querySelector('#active');
    button.onclick = () => {
        setItemsToShow("active");
    };
}

function setupCompletedButton() {
    let button = document.querySelector('#completed');
    button.onclick = () => {
        setItemsToShow("completed");
    };
}

function setItemsToShow(input) {
    let hidden = "hidden";
    let liItems = document.querySelector('#todo-list').querySelectorAll('li');
    for (const li of liItems) {
        if (input === "all") {
            li.classList.remove(hidden);
        }
        else if (input === "active") {
            if (!li.classList.contains("completed")) {
                li.classList.remove(hidden);
            }
            else {
                li.classList.add(hidden);
            }
        }
        else if (input == "completed") {
            if (li.classList.contains("completed")) {
                li.classList.remove(hidden);
            }
            else {
                li.classList.add(hidden);
            }
        }
    }
}

function setupClearCompleted() {
    let button = document.querySelector('#clear-completed');
    button.onclick = () => {
        removeAllCompletedItems();
        updateRemainingTasks();
        document.querySelector('#toggle-all').checked = false;
    };
}

function removeAllCompletedItems() {
    let liItems = document.querySelector('#todo-list').querySelectorAll('li');
    for (const li of liItems) {
        let checkBox = li.querySelector('#toggle');
        if (checkBox.checked) {
            finishedTasks--;
            li.remove();
        }
    }
}

function setupTemplate(){
    template = document.querySelector('#todo-template');
    template.remove();
}

function addTodoItem(text) {
    let li = template.content.firstElementChild.cloneNode(true);
    
    let label = li.querySelector('#todo-text');
    label.textContent = text;
    let doneToggle = li.querySelector('#toggle');
    
    let removeButton = li.querySelector('#remove-button');
    removeButton.onclick = () => {
        if (doneToggle.checked) {
            finishedTasks--;
        }
        else {
            unfinishedTasks--;
        }
        li.remove();
        updateRemainingTasks();
    };
    
    doneToggle.onclick = () => {
        toggleDone(li, doneToggle.checked);
        updateRemainingTasks();
    };
    
    let ul = document.querySelector('#todo-list');
    ul.append(li);
    unfinishedTasks++;
}

function setupToggleAll() {
    let checkBox = document.querySelector('#toggle-all');
    checkBox.onclick = () => {
        toggleAll(checkBox.checked);
        updateRemainingTasks();
    };
}

function toggleAll(isChecked) {
    let liItems = document.querySelector('#todo-list').querySelectorAll('li');
    
    for (const li of liItems) {
        toggleDone(li, isChecked);
        li.querySelector('#toggle').checked = isChecked;
    }
}

function setupInputBox(){
    let form = document.querySelector('.todo-bar');
    let inputText = form.querySelector('#input-bar');
    form.onsubmit = event => {
        event.preventDefault();
        addTodoItem(inputText.value);
        updateRemainingTasks();
    };
}

function toggleDone(li, isChecked){
    if (isChecked && !li.classList.contains("completed")) {
        li.classList.add("completed");
        finishedTasks++;
        unfinishedTasks--;
    }
    else if (!isChecked && li.classList.contains("completed")) {
        li.classList.remove("completed");
        finishedTasks--;
        unfinishedTasks++;
    }
}

function updateRemainingTasks() {
    let span = document.querySelector('#unfinished-tasks');
    span.textContent = unfinishedTasks;
    let removeAllCompletedItemsButton = document.querySelector('#clear-completed');
    
    // toggle visiblity of remove all button
    if (finishedTasks > 0) {
        removeAllCompletedItemsButton.style.display = 'inline';
    }
    else {
        removeAllCompletedItemsButton.style.display = 'none';
    }
}

/*
 Funktioner:
    // *   Lägga till anteckningar.
    // *   Ta bort anteckningar.
    // *   Markera anteckningar som färdiga.
    // *   Se hur många ofärdiga anteckningar som återstår ("X items left").
    // *   Markera alla anteckningar som färdiga/ofärdiga (nedåtpilen till vänster om textfältet).
    // *   Ta bort alla färdiga anteckningar ("Clear completed").
    // *   Visa upp antingen alla anteckningar ("All"), alla ofärdiga anteckningar ("Active") eller alla färdiga anteckningar ("Completed").

Ej:
    *URL-hantering (att knapparna "All", "Active" och "Completed" ändrar på URL:en).
    *Att anteckningar kan redigeras genom att dubbelklicka på dem.
    *Automatiskt spara anteckningarna så att de finns kvar även när sidan laddas om.
 */