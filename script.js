const LIST = document.getElementById("todolist");
const submit = document.getElementById('submit-button');
let add_id = 0;

submit.addEventListener('click', e => {
    e.preventDefault()
    createTODO(add_id)
    add_id++;
});

//create a div that is inside the div(input_text) and button ? and display: grid on css
//create an eventlistener, when click on delete button, delete whole div. 
function createTODO(amount) {
    //create div containing div and delete button with class=for css and id${amount} to delete
    var createWrapperDiv = document.createElement("div");
    LIST.appendChild(createWrapperDiv)
    createWrapperDiv.setAttribute(`id`, `${amount}`)
    createWrapperDiv.setAttribute(`class`, `wrapperDiv`)

    //creates div with submitted text
    const input_text = document.createTextNode(document.getElementById("text-input").value);
    var createDiv = document.createElement("div");
    createDiv.append(input_text)
    createDiv.setAttribute(`id`, `${amount}`)
    createWrapperDiv.appendChild(createDiv)
    
    //creates DELETE button
    var createButton = document.createElement("button");
    createButton.setAttribute(`id`, `${amount}`)
    createButton.setAttribute(`content`, '')
    createButton.textContent = "DELETE"
    createWrapperDiv.appendChild(createButton)

    const buttons = document.getElementsByTagName("button");
    Array.from(buttons).forEach(button =>
        button.addEventListener("click", deleteTODO));
}

function deleteTODO(event){
    var elem = document.getElementById(this.id);
    if (this.id == "submit-button") return console.log("ignoring submit-button")
    else return elem.parentNode.removeChild(elem) + console.log(this.id);
}