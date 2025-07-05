let todos = [];

function rendertodo(text){
    const dtodo=document.createElement("div");
    const ptodo=document.createElement("p");
    const btodo=document.createElement("button");

    ptodo.textContent = `${todos.indexOf(text)+1}. ` + text;

    btodo.textContent = "delete";
    btodo.classList.add('bg-red-400','px-1','rounded-lg');//adding tailwind style
    btodo.id="delete";


    dtodo.id=`delete-${todos.indexOf(text)+1}`;
    dtodo.classList.add('flex','flex-row','gap-2');

    dtodo.append(ptodo,btodo);
    
    document.getElementById("todos").appendChild(dtodo);
}

document.getElementById("Add").addEventListener("click",()=>{

const input = document.querySelector("input");

const text = input.value;
todos.push(text);

//newtodo creation
rendertodo(text);

//clear input box
input.value='';

})

//delete the appropiate todo and updating the index

document.getElementById("todos").addEventListener('click',(event)=>{
    if(event.target && event.target.matches("#delete")){
        const parentDivId = event.target.parentElement.id;
        const element = document.getElementById(parentDivId);

        const index=parseInt(parentDivId.split('-')[1]);
        todos.splice(index-1,1);
        element.remove();

        //updating the index on page
        document.getElementById("todos").innerHTML='';//clear
        todos.forEach((text)=> rendertodo(text));//re-render with update indices
    }
})



///bug : if two todos are same there index on page appears same
///To fix this, use the array's length
/// line 32 : rendertodo(text, todos.length - 1);
/// line 3 : function newtodo(text, index)