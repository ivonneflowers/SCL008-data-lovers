/* Manejo del DOM */
const data = window.POKEMON.pokemon;
const showData = (data) => {

  data.forEach(element => {

    document.getElementById('card').innerHTML += 
    `<div data-toggle="modal" data-target="#exampleModal" class="card" style= "width: 8rem;">
    <div class= "card-name">
    <p> ${element.num}</p>
    <a href="#"><img class= "card-img-top" src="${element.img}" alt="Card image cap"></a>
    <p class="pokemon-name"> ${element.name}</p>
    <!-- Button trigger modal -->


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
      <img src="${element.img}" alt="modal img">
      <p class="pokemon-num"> ${element.num}</p>
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
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    
    
    </div>
    </div>`
        

      document.getElementById('select-type').addEventListener('click', () => {
        
        let condition = document.getElementById('select-type').value;
        let result = window.filterData(data, condition);
        card.innerHTML = '';

        result.forEach(element => {
          card.innerHTML += `<p>${element.name}</p>        
          <img class="image" src="${element.img}" alt="${element.name}">`

        })
      });
    })
  }


window.onload = showData(data)

document.getElementById("btn-start").addEventListener("click", () => {

  document.getElementById("screen1").setAttribute('hidden', true);
  document.getElementById("screen2").removeAttribute('hidden');

})

document.getElementById("kanto-img").addEventListener("click", () => {

  document.getElementById("screen2").setAttribute('hidden', true);
  document.getElementById("screen3").removeAttribute('hidden');

});