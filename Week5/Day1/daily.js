let form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", event => {
    event.preventDefault();
    let user = document.getElementById("firstname");
    let fullname = {
        firstname: document.getElementById("firstname").nodeValue,
        lastname: document.getElementById("lastname").value,
     }
    document.getElementById("output").innerHTML = JSON.stringify(fullname);
});