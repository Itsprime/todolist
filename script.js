const LIST = document.getElementById("todolist");
// const text_value = document.getElementById("test123").value;
// const text1 = document.createTextNode(text_value);
const create2do = document.createElement("div");
const submit = document.getElementById('submit-button');

//get the element which youre going to put the div in LIST
//create the Element which is a p (how to create multiple p when someone click )
//inside the created p appendChild

submit.addEventListener('click', e => {
    e.preventDefault()
    createTODO()
    // const text_value = document.getElementById("test123").value;
    // const text1 = document.createTextNode(text_value);
    // create2do.append(text1)
    // LIST.appendChild(createTODO);
});

function createTODO(){
    // const text_value = document.getElementById("test123").value;
    const text1 = document.createTextNode(document.getElementById("test123").value);
    var createDiv = document.createElement("div");
    createDiv.append(text1)
    LIST.appendChild(createDiv)
}


//make a new function when someone click submit
//creates new div with the text_value + other shit
//