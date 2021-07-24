const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

let cards = document.getElementById('root');

for(let i=0; i < robots.length; i++){
    let card = document.createElement('div');
    card.classList.add('card');
    let profile = document.createElement('img');
    profile.src = robots[i].image;
     card.innerHTML = robots[i].name;  
     card.innerText = robots[i].email;  // this line is overriding name so you need to separate them  
    
    // let pName = document.createlement("p") 
    // let pEmail = document.createlement("p") 
    // let cardName = document.createTextNode(element.name) 
    // let cardEmail = document.createTextNode(element.name) 
    // pName.appendchild(cardName);
    // pEmail.appendchild(cardEmail);
    // card.appendChild(cardName);
    // card.appendChild(cardEmail);




    profile.classList.add('profile');
    console.log(robots[i].name);
    
    // profile.setAttribute('src', pp.image)
    // let info = document.createElement('h2')
    // info.innerHTML = robots.map((nom) => {
    //     nom.robbo
    // let mail = document.createElement('h3')
    // info.innerHTML = profile.setAttribute('src'robots [i].image)((em) => {
    //     mail.textContent = em.mail
    // })
    
     card.appendChild(profile)
     cards.appendChild(card);
    // card.appendChild(mail)
    //  card.appendChild(card);
 }

for (item of robots) {
    console.log(item.name, item.email, item.image);
}

// funciton myFunciton() {
//   var input, filter, name, i, txtValue;
//   input = document.getElementById('myInput');
//   filter = input.value.toUpperCase();
//   robots.name = document.getElementById(['name']);

//   for (i = 0; i < li.length; i++) {
//     id = robots[i].getElementsById('name')[0];
//     txtValue = a.textContent || a.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       robots.name[i].style.display = "";
//     } else {
//       robots.name[i].style.display = "none";
// }
//   }
// }
