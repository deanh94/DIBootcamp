// function getElementsById(ids) {
//     const idList = ids.split("");
//     const results = 

// const ids = ['search', 'delete1', 'delete2'];
// const elements = document.querySelectorAll(ids.map(id => `#${id}`).join('click', gifyapi));

document.getElementById("search").addEventListener("click", gifyapi);
document.getElementById("delete1").addEventListener("click", gifyapi);
document.getElementById("delete2").addEventListener("click", gifyapi);

function gifyapi(){
    let input = document.getElementById('input').value; 
    console.log("hello");
    const xhr = new XMLHttpRequest
    xhr.open('GET', `https://api.giphy.com/v1/gifs/search?q=${input}&limit=50&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
    xhr.responseType = 'JSON';
    xhr.send();
    xhr.onload = function () {
        if (xhr.status != 200) {   
            
            alert(`Error ${xhr.status}: ${xhr.statusText}`);  
        } else {
            createGifs(xhr.response);  
        }}

}
function createGifs(data){
    console.log(JSON.parse(data));
}

function removeElement(data , delete1){
    addEventListener("click", gifyapi);
    console.log(JSON.parse(data));

}
