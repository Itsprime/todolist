const LIST = document.getElementById("todolist");
// const text_value = document.getElementById("test123").value;
// const text1 = document.createTextNode(text_value);
const create2do = document.createElement("div");
const submit = document.getElementById('submit-button');

//get the element which youre going to put the div in LIST
//create the Element which is a p (how to create multiple p when someone click )
//inside the created p appendChild
let add_id = 0;

submit.addEventListener('click', e => {
    e.preventDefault()
    createTODO(add_id)
    add_id++;
});


//create a div that is inside the div(input_text) and button ? and display: grid on css
//create an eventlistener, when click on delete button, delete whole div. 
function createTODO(amount) {
    const input_text = document.createTextNode(document.getElementById("test123").value);
    var createDiv = document.createElement("div");
    createDiv.append(input_text)
    createDiv.setAttribute(`id`, `${add_id}`)
    LIST.appendChild(createDiv)

    var createButton = document.createElement("button");
    createButton.setAttribute(`id`, `${add_id}`)
    createButton.setAttribute(`content`, '')
    createButton.textContent = "DELETE"
    LIST.appendChild(createButton)
}
