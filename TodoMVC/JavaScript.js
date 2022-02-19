let template;
let unfinishedTasks = 0;

start();

function start(){
    setupTemplate();
    setupInputBox();
    setupToggleAll();
    setupClearCompleted();
}

function setupClearCompleted() {
    
}

function setupTemplate(){
    template = document.querySelector('#todo-template');
    template.remove();
}

function addTodoItem(text) {
    let li = template.content.firstElementChild.cloneNode(true);
    
    let label = li.querySelector('#todo-text');
    label.textContent = text;
    
    let removeButton = li.querySelector('#remove-button');
    removeButton.onclick = () => {
        li.remove();
    };
    
    let doneToggle = li.querySelector('#toggle');
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
        unfinishedTasks--;
    }
    else if (!isChecked && li.classList.contains("completed")) {
        li.classList.remove("completed");
        unfinishedTasks++;
    }
}

function updateRemainingTasks() {
    let span = document.querySelector('#unfinished-tasks');
    span.textContent = unfinishedTasks;
}

/*
 Funktioner:
    // *   Lägga till anteckningar.
    // *   Ta bort anteckningar.
    // *   Markera anteckningar som färdiga.
    // *   Se hur många ofärdiga anteckningar som återstår ("X items left").
    // *   Markera alla anteckningar som färdiga/ofärdiga (nedåtpilen till vänster om textfältet).
    *   Ta bort alla färdiga anteckningar ("Clear completed").
    *   Visa upp antingen alla anteckningar ("All"), alla ofärdiga anteckningar ("Active") eller alla färdiga anteckningar ("Completed").

Ej:
    *URL-hantering (att knapparna "All", "Active" och "Completed" ändrar på URL:en).
    *Att anteckningar kan redigeras genom att dubbelklicka på dem.
    *Automatiskt spara anteckningarna så att de finns kvar även när sidan laddas om.
 */