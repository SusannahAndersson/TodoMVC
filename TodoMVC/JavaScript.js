let template;

start();

function start(){
    setupTemplate();
    setupInputBox();
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
    };
    
    let ul = document.querySelector('#todo-list');
    ul.append(li);
}

function setupInputBox(){
    let form = document.querySelector('.todo-bar');
    let inputText = form.querySelector('#input-bar');
    form.onsubmit = event => {
        event.preventDefault();
        addTodoItem(inputText.value);
    };
}

function toggleDone(li, isChecked){
    if (isChecked) {
        li.classList.add("completed");
    }
    else {
        li.classList.remove("completed");
    }
}

/*
 Funktioner:
    // *   Lägga till anteckningar.
    // *   Ta bort anteckningar.
    // *   Markera anteckningar som färdiga.
    *   Se hur många ofärdiga anteckningar som återstår ("X items left").
    *   Markera alla anteckningar som färdiga/ofärdiga (nedåtpilen till vänster om textfältet).
    *   Ta bort alla färdiga anteckningar ("Clear completed").
    *   Visa upp antingen alla anteckningar ("All"), alla ofärdiga anteckningar ("Active") eller alla färdiga anteckningar ("Completed").

Ej:
    *URL-hantering (att knapparna "All", "Active" och "Completed" ändrar på URL:en).
    *Att anteckningar kan redigeras genom att dubbelklicka på dem.
    *Automatiskt spara anteckningarna så att de finns kvar även när sidan laddas om.
 */