// This todo application uses a simple reconciler like React
let todos=[];

function addTodo(){
    todos.push({
        title:document.getElementById("input").value
    })
    render()
}
function removeFirst(){
    todos.splice(0,1);
    render()
}
function removeLast(){
    todos.splice(todos.length-1,1);
    render()
}

function deleteTodo(index){
    todos.splice(index,1)
    render()
}

function createTodoComponent(todo,index){
    const divElement=document.createElement("div");
    const pElement=document.createElement("p");
    const buttonElement=document.createElement("button");

    buttonElement.innerHTML="Delete";
    buttonElement.setAttribute("onclick",`deleteTodo(${index})`);
    pElement.innerHTML=todo.title;
    divElement.append(pElement);
    divElement.append(buttonElement);
    return divElement;

}
function render(){
    document.querySelector("#todos").innerHTML="";
    for(let i=0;i<todos.length;i++){
        const element=createTodoComponent(todos[i],i);
        document.querySelector('#todos').appendChild(element);
    }

}