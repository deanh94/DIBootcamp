document.getElementById("p1").innerHTML = "Richard";

document.getElementById("Dean").innerHTML = "Dean";
document.getElementById("secondLi").innerHTML = "Dean";

//greeting.appendChild("list");
let uls = document.getElementsByTagName("ul") 
for (let index = 0; index < uls.length; index++) {
    const element = uls[index];
    let greeting = document.createElement('li');
    greeting.innerText = "Hey students";
    element.appendChild(greeting);

console.log(element);  
}

function myFunction(){
let parentElem = document.getElementsByClassName("list");
let childElem = document.getElementById("temp");
Node.parentElem.removeChild(childElem);
}



