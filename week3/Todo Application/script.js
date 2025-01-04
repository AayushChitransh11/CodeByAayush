 let counter=1;
 function addTODO(){
    const inputElement=document.getElementById("input");
    const newElement=document.createElement("div");
    newElement.setAttribute("id",counter);
    
    newElement.innerHTML="<div>" +counter+". "+inputElement.value+"</div> <button onclick='deleteTODO("+counter+")'>Delete</button>";
    const parentElement=inputElement.parentNode;
    parentElement.appendChild(newElement);
    counter+=1;
}

function deleteTODO(index){
    const deleteElement=document.getElementById(index);
    deleteElement.parentNode.removeChild(deleteElement);
}
