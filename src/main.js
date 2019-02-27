/* Manejo del DOM */
const data = window.POKEMON.pokemon;
const showData = (data) => {

  data.forEach(element => {

    document.getElementById('card').innerHTML += `<div data-toggle="modal" data-target="#exampleModal" class="card" style= "width: 8rem;">
    <div class= "card-name">
    <p> ${element.num}</p>
    <a href="#"><img class= "card-img-top" src="${element.img}" alt="Card image cap"></a>
    <p class="pokemon-name"> ${element.name}</p>
    </div>
    </div>`

    
       
  })

}

document.getElementById("card").addEventListener("click", () => {

  document.getElementById("exampleModal").removeAttribute('hidden');

})


window.onload = showData(data)

document.getElementById("btn-start").addEventListener("click", () => {
  
  document.getElementById("screen1").setAttribute('hidden', true);
  document.getElementById("screen2").removeAttribute('hidden');

})

document.getElementById("kanto-img").addEventListener("click", () => {

  document.getElementById("screen2").setAttribute('hidden', true);
  document.getElementById("screen3").removeAttribute('hidden');

});