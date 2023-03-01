
let todolist = [];

const newinput = document.getElementById('inp');
const list = document.getElementById('list');

//function 
function add(){
    const newtext = newinput.value;

    //if
    if (newtext === ''){
        return;
    }

    todolist.push(newtext);

    //create new list
    const elm = document.createElement('li');

    // set the text 
    elm.textContent = newtext;
    // append the new elm to list

    list.appendChild(elm);
    newinput.value ='';
}