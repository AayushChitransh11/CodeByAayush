//let counter=0;
// function callback(){
//     const addnew=document.querySelectorAll("h3")[0].innerHTML=counter;
//     console.log(counter);
//     counter+=1;
// }

// setInterval(callback,500);


function deleteTODO(index){
    const del=document.getElementById("todo-"+index);
    del.parentNode.removeChild(del);
    
}

function deleteRandom(){
    const del=document.querySelector("h4");
    const parentElement=del.parentNode;
    parentElement.removeChild(del);

}

function addTODO(){
    const inputElement=document.getElementById("input");
    const textNode=document.createElement("div");
    textNode.innerHTML=inputElement.value;
    const parentElement=inputElement.parentNode;
    parentElement.appendChild(textNode);
}