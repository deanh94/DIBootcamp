let xhr = new XMLHttpRequest();
xhr.open('GET', "https://jsonplaceholder.typicode.com/users");
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState == 0) {
      // unsent
      console.log("unsent")
    } else if(xhr.readyState == 1) {
      // open called
      console.log("open called")
    } else if (xhr.readyState == 2) {
      // response headers received
      console.log("response headers received")
    } else if (xhr.readyState == 3) {
      // response is loading (a data packet is received)
      console.log("response is loading")
    } else if (xhr.readyState == 4) {
        console.log("xhr object = ", xhr)
      // request complete
      console.log("request complete")
      if (xhr.status != 200) { // analyze HTTP status of the response
          //DISPLAY ERROR HERE
        } else if (xhr.status === 200) {
            //DISPLAY USERS HERE
            console.log(xhr.response);
            displayUserInfo(xhr.response);
        }
    }
  };
  
  function displayUserInfo(response) {
      let apiResponse = JSON.parse(response);
      console.log(apiResponse);
  }

//   document.getElementById("myDIV").style.display = "none";

  