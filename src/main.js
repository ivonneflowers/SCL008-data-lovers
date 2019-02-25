/* Manejo del DOM */
document.getElementById("btn-start").addEventListener("click", () => {
    
  document.getElementById("screen1").setAttribute('hidden', true);
  document.getElementById("screen2").removeAttribute('hidden');

})

      document.getElementById("kanto-img").addEventListener("click", () => {
        document.getElementById("screen2").setAttribute('hidden', true);
        document.getElementById("screen3").removeAttribute('hidden');



        //sobreescribiendo data en las cards de los Pokémon
          
        const pokemon = POKEMON.pokemon;
        
        for (let i = 0; i < POKEMON.length; i++) {
        
          document.getElementsByClassName(card-img-top).src.innerHTML = "";
  
          document.getElementsByClassName(card-img-top).src.innerHTML += `${pokemon[i].img}`;
          document.getElementsByClassName(card-title).innerHTML += `<p>${pokemon[i].name}</p>`

        
        }
        
      })


     