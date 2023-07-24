const LIST = document.getElementById("todo");
const submit = document.getElementById('submit-button');
let add_id = 0;

//executes the function createTODO
submit.addEventListener('click', e => {
    e.preventDefault()
    createTODO(add_id)
    add_id++;
});

//creates a TODO when you click 'submit' on box with the input text
function createTODO(amount) {
    var createWrapperDiv = document.createElement("div");
    createWrapperDiv.setAttribute(`id`, `${amount}`)
    createWrapperDiv.setAttribute(`class`, `wrapperDiv`)
    createWrapperDiv.setAttribute(`draggable`, `true`)
    LIST.appendChild(createWrapperDiv)
    // ^Creates the main wrapper div
    
    //this is just testing
    const wrappedddiv = document.querySelectorAll(`wrapperdiv`)
    console.log(wrappedddiv)

    //gets text from the box input and adds it a newly created div instide the wrappedDiv
    const input_text = document.createTextNode(document.getElementById("text-input").value);
    if (input_text.textContent == "") return alert("No text - Please add text");
    var createDiv = document.createElement("div");
    createDiv.append(input_text)
    createDiv.setAttribute(`id`, `${amount}`)
    createWrapperDiv.appendChild(createDiv)

    //creates DELETE button inside wrappedDiv
    var createButton = document.createElement("button");
    createButton.setAttribute(`id`, `${amount}`)
    createButton.setAttribute(`content`, '')
    createButton.textContent = "DELETE"
    createWrapperDiv.appendChild(createButton)
    console.log(draggables)

    //gets all buttons in page
    const buttons = document.getElementsByTagName("button");
    Array.from(buttons).forEach(button =>
        button.addEventListener("click", deleteTODO));
}

//this draggables isnt getting the newly created wrappedDiv from the createTODO function
//once it gets it, all the draggable events/functions should be working
//the Example 1/Example 2 are coded in html, not created by the js function btw
let draggables = document.querySelectorAll('.wrapperDiv');
let containers = document.querySelectorAll('.container');
console.log(draggables)

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
        console.log("dragging atm ")
    })

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
        console.log("dragging stop ")
    })
})

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault()
        const draggable = document.querySelector('.dragging')
        container.append(draggable)
        console.log(draggable)
    })
})


function deleteTODO(event) {
    var elem = document.getElementById(this.id);
    if (this.id == "submit-button") return console.log("ignoring submit-button")
    else return elem.parentNode.removeChild(elem) + console.log(this.id);
}


//check or idk can be when you drag the class gets set to dragging? and the created ones arent set to dragging ever
//so the dragging and dragging stop arent working for the created divs, how to solve this???

//when I hover new todo, it doesnt do any of the dragging in console messages