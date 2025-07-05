


let todos = JSON.parse(localStorage.getItem("task")) || []; //== array(ocastorage) or if localstorage is empty than initiallize with empty array

    const newTask = {
        id:Date.now(),
        text:text,
        completed:false
    }

function saveTaskLocal(){
    localStorage.setItem('todos',JSON.stringify(todos)); //it stores strings so array input must be converted to string
}
