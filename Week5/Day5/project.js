const loadBox = document.getElementById("vanilla")
const monkeys = document.getElementById("box")
const loadTxt = document.createElement("p")
loadTxt.textContent = "hold on.."
loadbox.appendChild(loadTxt)

const errormsg = document.createElement("p")
errormsg.textContent = "that person isn't available" 

const originalURL = "https://swapi.dev/api/people/"
const jedi = async() => {
    monkeys.innerHTML = ""
    try{ 
        monkeys.appendChild(loadBox)
        const randomURL = originalURL+Math.floor(Math.random() * 100); // same as making var and adding to url link
  const jediWait = await fetch(randomURL) 
  const dataURL = await jediWait.json() //makes it js object (u can use it)
  const homeworldURL = dataURL.homeworld
  monkeys.removeChild(loadBox)
  const homeW = await fetch(homeworldURL)
  const homeS = await homeW.json()


  const jediArr = [dataURL.name, dataURL.height, dataURL.birth_year, homeS.name, dataURL.gender]
  console.log(jediArr);
  jediArr.forEach((element) => { // element, index, array
  let p = document.createElement("p")
  p.innerHTML = element
  monkeys.appendChild(p);
  }) 
    }

    catch{
        console.log("theres a problem!")
        monkeys.appendChild(errormsg)
        setTimeout(() => monkeys.removeChild(errormsg),3000)
    }

    }



const button = document.getElementById("myBtn")
button.addEventListener("click", jedi);
