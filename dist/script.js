const LIST = document.getElementById("todo");
const submit = document.getElementById('submit-button');
// document.addEventListener("DOMContentLoaded", getLocalTodos);
let add_id = 0;

//executes the function createTODO
submit.addEventListener('click', e => {
    e.preventDefault()
    const input_text_valid = document.createTextNode(document.getElementById("text-input").value);
    console.log(input_text_valid)
    if(input_text_valid.textContent == "") { alert("No text - Please add text");}
    else {createTODO(add_id)}
    // createTODO(add_id)
    add_id++;
});

//this is just for the example todos to be draggable
const example_todos = document.querySelectorAll(`.wrapperDiv`);
const example_todos1 = [...example_todos];
for (i = 0; i < example_todos1.length; i++) {
    registerDraggable(example_todos[i])
}

//creates a TODO when you click 'submit' on box with the input text
function createTODO(amount) {
    var createWrapperDiv = document.createElement("div");
    createWrapperDiv.setAttribute(`id`, `${amount}`)
    createWrapperDiv.setAttribute(`class`, `wrapperDiv bg-blue-400 rounded-md flex justify-between cursor-move m-1`)
    createWrapperDiv.setAttribute(`draggable`, `true`)
    //createWrapperDiv.setAttribute(`class`, `bg-slate-500 rounded-md flex`)
    LIST.appendChild(createWrapperDiv)
    // ^Creates the main wrapper div

    //gets text from the box input and adds it a newly created div instide the wrappedDiv
    const input_text = document.createTextNode(document.getElementById("text-input").value);
    // if (input_text.textContent == "") return alert("No text - Please add text");
    var createDiv = document.createElement("div");
    createDiv.append(input_text)
    createDiv.setAttribute(`id`, `${amount}`)
    createDiv.setAttribute(`class`,`mr-4 px-2`)
    createWrapperDiv.appendChild(createDiv)

    //creates DELETE button inside wrappedDiv
    var createButton = document.createElement("button");
    createButton.setAttribute(`id`, `${amount}`)
    createButton.setAttribute(`content`, '')
    createButton.setAttribute(`class`,`rounded bg-red-500 p-1 my-1 mr-1 fa-solid fa-trash max-h-6`)
    // createButton.textContent = "DELETE"
    createWrapperDiv.appendChild(createButton)

    //gets all buttons in page
    const buttons = document.getElementsByTagName("button");
    Array.from(buttons).forEach(button => button.addEventListener("click", deleteTODO));

    registerDraggable(createWrapperDiv);
    //console.log(document.querySelectorAll(".draggable"))
}

function registerDraggable(draggable) {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
        console.log("dragging atm ")
    })

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
        console.log("dragging stop ")
    })
}

let containers = document.querySelectorAll('.status-container');

//if wrapper inside container with id="done", change wrapper text to line-through


//Bug: When no div is inside a container, it returns null
containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(container, e.clientY)

        const draggable = document.querySelector('.dragging')
        container.append(draggable)
        if (afterElement == null) {
            container.appendChild(draggable)
        } else {
            container.insertBefore(draggable, afterElement)
            
        }
    })
})

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.wrapperDiv:not(.dragging)')]

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
        } else {
            return closest
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element
}

function deleteTODO(event) {
    var elem = document.getElementById(this.id);
    if (this.id == "submit-button") return console.log("ignoring submit-button")
    else return elem.parentNode.removeChild(elem) + console.log(this.id);
}

// function getLocalTodos() {
//     let todos;
//     if (localStorage.getItem("todos") === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem("todos"));
//     }
//     todos.forEach(function (todo) {
//         var createWrapperDiv = document.createElement("div");
//         createWrapperDiv.setAttribute(`id`, `${amount}`)
//         createWrapperDiv.setAttribute(`class`, `wrapperDiv bg-red-200 rounded-md flex cursor-move`)
//         createWrapperDiv.setAttribute(`draggable`, `true`)
//         //createWrapperDiv.setAttribute(`class`, `bg-slate-500 rounded-md flex`)
//         LIST.appendChild(createWrapperDiv)
//         // ^Creates the main wrapper div

//         //gets text from the box input and adds it a newly created div instide the wrappedDiv
//         const input_text = document.createTextNode(document.getElementById("text-input").value);
//         if (input_text.textContent == "") return alert("No text - Please add text");
//         var createDiv = document.createElement("div");
//         createDiv.append(input_text)
//         createDiv.setAttribute(`id`, `${amount}`)
//         createWrapperDiv.appendChild(createDiv)

//         //creates DELETE button inside wrappedDiv
//         var createButton = document.createElement("button");
//         createButton.setAttribute(`id`, `${amount}`)
//         createButton.setAttribute(`content`, '')
//         createButton.textContent = "DELETE"
//         createWrapperDiv.appendChild(createButton)
//     });
// }