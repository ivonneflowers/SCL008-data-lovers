/* Manejo del DOM */
const data = window.POKEMON.pokemon;
let counter = 0;
const showData = (data) => {

  data.forEach(element => {

    document.getElementById('card').innerHTML += `<div data-toggle="modal" data-target="#exampleModal" class="card" style= "width: 8rem;">
    <div class= "card-name">
    <p> ${element.num}</p>
    <a href="#"><img class= "card-img-top" src="${element.img}" alt="Card image cap"></a>
    <p class="pokemon-name"> ${element.name}</p>
    </div>
    </div>`

    
    document.getElementById("card").addEventListener("click", () => {

      document.getElementById("exampleModal").innerHTML += `<div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
        <img src="${element.img}" alt="modal img">
          <h5 class="modal-title" id="exampleModalLabel">${element.name}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <p class="pokemon-type"> Tipos: ${element.type} </p>
        <br>
        <p class="pokemon-weaknesses"> Debilidades: ${element.weaknesses} </p>
        <br>
        <p class="pokemon-candy"> Caramelo: ${element.candy} </p>
        <p class="pokemon-egg"> Distancia de huevo: ${element.egg} </p>
        <img id="egg-img" src= "img/egg.png" alt="egg img">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary">Ver más</button>
        </div>
      </div>
    </div>
  </div> `

       
  })
})
}



/* document.getElementById("card").addEventListener("click", () => {

  document.getElementById("exampleModal").removeAttribute('hidden');

}) */


window.onload = showData(data)

document.getElementById("btn-start").addEventListener("click", () => {
  
  document.getElementById("screen1").setAttribute('hidden', true);
  document.getElementById("screen2").removeAttribute('hidden');

})

document.getElementById("kanto-img").addEventListener("click", () => {

  document.getElementById("screen2").setAttribute('hidden', true);
  document.getElementById("screen3").removeAttribute('hidden');

});