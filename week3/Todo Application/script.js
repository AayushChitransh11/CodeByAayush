//  let counter=1;
//  function addTODO(){
//     const inputElement=document.getElementById("input");
//     const newElement=document.createElement("div");
//     newElement.setAttribute("id",counter);
    
//     newElement.innerHTML="<div>" +counter+". "+inputElement.value+"</div> <button onclick='deleteTODO("+counter+")'>Delete</button>";
//     const parentElement=inputElement.parentNode;
//     parentElement.appendChild(newElement);
//     counter+=1;
// }

// function deleteTODO(index){
//     const deleteElement=document.getElementById(index);
//     deleteElement.parentNode.removeChild(deleteElement);
// }
//another way
let ctr=1;

function addTodo(){
  let inputElement=document.getElementById("input");
  let newElement=document.createElement("div");
  newElement.setAttribute("id",ctr);
  // newElement.innerHTML="<div>"+ctr+". "+inputElement.value+"</div><button onclick='deleteTodo("+ctr+")'>Delete</button>";
  let spanElement=document.createElement("span");
  let btnElement=document.createElement("button");
  spanElement.innerHTML=ctr+". "+inputElement.value;
  btnElement.setAttribute("onclick","deleteTodo("+ctr+")");
  btnElement.innerHTML="Delete";
  newElement.appendChild(spanElement);
  newElement.appendChild(btnElement);
  
  let parentElement=inputElement.parentNode;
  parentElement.appendChild(newElement);
  ctr+=1;
}

function deleteTodo(index){
  let deleteElement=document.getElementById(index);
  deleteElement.parentNode.removeChild(deleteElement);
}