let base_URL = "https://pokeapi.co/api/v2/pokemon/";

// Function to fetch a list of pokemon
function getPokemonList(url) {
  fetch(url)
    // Convert data from JSON
    .then((response) => response.json())
    //Stuff to do with data
    .then((data) => {
      // Console log to make sure I am getting the data
      console.log(data);
      // Get the list of pokemon from the results
      let pokemon = data.results;
      // Get element from HTML to write buttons in
      let container = document.querySelector(".pokemon-list-container");
      let nextprevbtn = document.querySelector(".next-prev");
      // Clear the container
      container.innerHTML = "";
      // Loop over pokemon list and create an HTML button for each one. Add the button to the container
      pokemon.forEach((btn) => {
        container.innerHTML += `<button class="all"onclick="getPokemonInfo('${btn.url}')">${btn.name}</button>`;
      });
      // Add a next pokemon button
      nextprevbtn.innerHTML = `<button class="button" onclick="getPokemonList('${data.next}')">Next</button>`;
    //   previous
      nextprevbtn.innerHTML += `<button class="button" onclick="getPokemonList('${data.previous}')">Previous</button>`;
    });
}

// Get default pokemon list
getPokemonList(base_URL);

// Function to get information about a specific pokemin
function getPokemonInfo(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Make sure data comes throufg
      console.log(data);
      // Write data to pokemon information container
      document.querySelector(".pokemon-pic").innerHTML = `
    <img class="pokemon-picture" src="${data.sprites.other["official-artwork"].front_default} ">
    `;
    document.querySelector(".number").innerHTML = `<br><span>${data.id}</span>`
     ;
    document.querySelector(".pokemon-info").innerHTML = ``;
     document.querySelector(".pokemon-info").innerHTML += `<br><span>${data.name}</span>`
     ;
     document.querySelector(".pokemon-info").innerHTML += `<br><span>${"  Weight: "+data.weight+" lbs"}</span>`
     ;
     document.querySelector(".pokemon-info").innerHTML += `<br><span>${"height: "+data.height+"ms"}</span>`
     ;
     document.querySelector(".pokemon-info").innerHTML += `<br><span>${"Type: "+data.types[0].type.name}</span>`;
     document.querySelector(".pokemon-info").innerHTML += `<span>${", "+data.types[1].type.name}</span>`
     ;
     document.querySelector(".pokemon-info").innerHTML += `<br><span>${"Ability: "+data.abilities[0].ability.name}</span>`;
     document.querySelector(".pokemon-info").innerHTML += `<br><span>${"Ability: "+data.abilities[1].ability.name}</span>`;
     document.querySelector(".pokemon-info").innerHTML += `<br><span>${"Ability: "+data.abilities[2].ability.name}</span>`;
     
    });
}
