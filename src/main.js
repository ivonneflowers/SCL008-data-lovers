/* Manejo del DOM */
const data = window.POKEMON.pokemon;
const card = document.getElementById('card');

//botón responsive para ir arriba de la página

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
 if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
   document.getElementById("myBtn").style.display = "block";
 } else {
   document.getElementById("myBtn").style.display = "none";
 }
}

function topFunction() {
 document.body.scrollTop = 0;
 document.documentElement.scrollTop = 0;
}

document.getElementById('myBtn').addEventListener( "click" , () => {
  topFunction()
})

//cartas de los pokémon, adentro se pusieron modales

const showData = (data) => {
  

  data.forEach(element => {
    card.innerHTML +=
    `<div data-toggle="modal" data-target="#exampleModal${element.id}" class="card" style= "width: 8rem;">
    <div class= "card-name">
    <p> ${element.num}</p>
    <a href="#"><img class= "card-img-top" src="${element.img}" alt="Card image cap"></a>
    <p class="pokemon-name"> ${element.name}</p>
    <div class="modal fade" id="exampleModal${element.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
    <div class="modal-content">
    <div class="modal-header">
    <div>
    </div>
    <div>
    <h5 class="modal-title" id="exampleModalLabel">${element.name}</h5>
    <img  class = "pokemon-modal-img" src="${element.img}" alt="modal img">
    </div>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
    </div>
    <div class="modal-body">
    <p class="pokemon-type"> <strong>Tipos:</strong> ${element.type} </p>
    <p class="pokemon-weaknesses"> <strong>Debilidades:</strong> ${element.weaknesses} </p>
    <p class="pokemon-candy"> <strong>Caramelo:</strong> ${element.candy_count} ${element.candy}</p>
    <p class="pokemon-egg"> <strong>Distancia de huevo:</strong> ${element.egg} </p>
    <img id="egg-img" src= "img/egg.png" alt="egg img">
    <img id="egg-img" src= "img/Bulbasaur_candy.png" alt="candy img">
    </div>
    <div class="modal-footer">
    <button type="button" class="see-more">Cerrar</button>
    </div>
    </div>
    </div>
    </div>`

    //mostrar pokémon ordenados por tipos
 
    document.getElementById('select-type').addEventListener('change', () => {

      let condition = document.getElementById('select-type').value; 
      let result = window.filterData(data, condition);
      card.innerHTML = '';
      result.forEach(element => {
 
        card.innerHTML += `<div data-toggle="modal" data-target="#exampleModal${element.id}" class="card" style= "width: 8rem;">
        <div class= "card-name">
        <p> ${element.num}</p>
        <a href="#"><img class= "card-img-top" src="${element.img}" alt="Card image cap"></a>
        <p class="pokemon-name"> ${element.name}</p>
        <div class="modal fade" id="exampleModal${element.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
        <div>
        </div>
        <div>
        <h5 class="modal-title" id="exampleModalLabel">${element.name}</h5>
        <img  class = "pokemon-modal-img" src="${element.img}" alt="modal img">
        </div>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body">
        <p class="pokemon-type"> <strong>Tipos:</strong> ${element.type} </p>
        <p class="pokemon-weaknesses"> <strong>Debilidades:</strong> ${element.weaknesses} </p>
        <p class="pokemon-candy"> <strong>Caramelo:</strong> ${element.candy_count} ${element.candy} </p>
        <p class="pokemon-egg"> <strong>Distancia de huevo:</strong> ${element.egg} </p>
        <img id="egg-img" src= "img/egg.png" alt="egg img">
        <img id="egg-img" src= "img/Bulbasaur_candy.png" alt="candy img">
        </div>
        <div class="modal-footer">
        <button type="button" class="see-more">Cerrar</button>
        </div>
        </div>
        </div>
        </div>`
      })
    });
  })
}

//mostrar pokémon ordenados por orden alfabético

document.getElementById('select-order').addEventListener("change", orderThis);
function orderThis () {
let result = window.sortData(data);
 card.innerHTML = "";
 result.forEach(element => {
   card.innerHTML += `<div data-toggle="modal" data-target="#exampleModal${element.id}" class="card" style= "width: 8rem;">
   <div class= "card-name">
   <p> ${element.num}</p>
   <a href="#"><img class= "card-img-top" src="${element.img}" alt="Card image cap"></a>
   <p class="pokemon-name"> ${element.name}</p>
   <div class="modal fade" id="exampleModal${element.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog" role="document">
   <div class="modal-content">
   <div class="modal-header">
   <div>
   </div>
   <div>
   <h5 class="modal-title" id="exampleModalLabel">${element.name}</h5>
   <img  class = "pokemon-modal-img" src="${element.img}" alt="modal img">
   </div>
   <button type="button" class="close" data-dismiss="modal" aria-label="Close">
   <span aria-hidden="true">&times;</span>
   </button>
   </div>
   <div class="modal-body">
   <p class="pokemon-type"> <strong>Tipos:</strong> ${element.type} </p>
   <p class="pokemon-weaknesses"> <strong>Debilidades:</strong> ${element.weaknesses} </p>
   <p class="pokemon-candy"> <strong>Caramelo:</strong> ${element.candy_count} ${element.candy} </p>
   <p class="pokemon-egg"> <strong>Distancia de huevo:</strong> ${element.egg} </p>
   <img id="egg-img" src= "img/egg.png" alt="egg img">
   <img id="egg-img" src= "img/Bulbasaur_candy.png" alt="candy img">
   </div>
   <div class="modal-footer">
   <button type="button" class="see-more">Cerrar</button>
   </div>
   </div>
   </div>
   </div>`
 })
}

//orden alfabético al revés

document.getElementById('select-order').addEventListener("change", orderThisBackwards);
function orderThisBackwards () {
let result = window.sortDataBackwards(data);
 card.innerHTML = "";
 result.forEach(element => {
   card.innerHTML += `<div data-toggle="modal" data-target="#exampleModal${element.id}" class="card" style= "width: 8rem;">
   <div class= "card-name">
   <p> ${element.num}</p>
   <a href="#"><img class= "card-img-top" src="${element.img}" alt="Card image cap"></a>
   <p class="pokemon-name"> ${element.name}</p>
   <div class="modal fade" id="exampleModal${element.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog" role="document">
   <div class="modal-content">
   <div class="modal-header">
   <div>
   </div>
   <div>
   <h5 class="modal-title" id="exampleModalLabel">${element.name}</h5>
   <img  class = "pokemon-modal-img" src="${element.img}" alt="modal img">
   </div>
   <button type="button" class="close" data-dismiss="modal" aria-label="Close">
   <span aria-hidden="true">&times;</span>
   </button>
   </div>
   <div class="modal-body">
   <p class="pokemon-type"> <strong>Tipos:</strong> ${element.type} </p>
   <p class="pokemon-weaknesses"> <strong>Debilidades:</strong> ${element.weaknesses} </p>
   <p class="pokemon-candy"> <strong>Caramelo:</strong> ${element.candy_count} ${element.candy} </p>
   <p class="pokemon-egg"> <strong>Distancia de huevo:</strong> ${element.egg} </p>
   <img id="egg-img" src= "img/egg.png" alt="egg img">
   <img id="egg-img" src= "img/Bulbasaur_candy.png" alt="candy img">
   </div>
   <div class="modal-footer">
   <button type="button" class="see-more">Cerrar</button>
   </div>
   </div>
   </div>
   </div>`
 })
}

window.onload = showData(data)


 function drawChart() {

/* function drawChart() {
  let dataWater = [];
   window.data.computeStats(data).forEach(element => {
     dataWater.push(element);
   })


  var data = google.visualization.arrayToDataTable([
    ['Water', dataWater]
  ]);

  var options = {
    title: 'Pokémon Data'
  };

  let chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);

  var data = google.visualization.arrayToDataTable([
    ['Water', dataWater]
  ]);
  var options = {
    title: 'Pokémon Data'
  };
  let chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
  
}
  
document.getElementById('chart-btn').addEventListener( "click" , () => {
  document.getElementById('piechart').removeAttribute('hidden');
  drawChart(dataWater)
}) */

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Pokemon', 'Tipos'],
    ['Agua',     25.5],
    ['Fuego',      14.8],
    ['Planta',  60.7],
    ['Electrico', 47.1],
    ['Veneno',    7.3]
  ]);

  var options = {
    title: 'Tipo de Pokemon en Kanto'
    
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}	

document.getElementById('chart-btn').addEventListener( "click" , () => {
  document.getElementById('piechart').removeAttribute('hidden');
  drawChart()
})

//mostrando dato curioso

document.getElementById("show-dato").innerHTML += `¿Sabías que los pokémon tipo agua son el ${window.computeStats(data)} % de la región de Kanto?`
  
}

document.getElementById("btn-start").addEventListener("click", () => {

  document.getElementById("screen1").setAttribute('hidden', true);
  document.getElementById("screen2").removeAttribute('hidden');

})

document.getElementById("kanto-img").addEventListener("click", () => {

  document.getElementById("screen2").setAttribute('hidden', true);
  document.getElementById("screen3").removeAttribute('hidden');

  //guardando valor del input usuario en variable y msotrándolo en pantalla
  
  let usernameValue = document.getElementById('username').value;
  document.getElementById('show-username').innerHTML += ` ${usernameValue}!`;

});

//agregando alert a los mapas que no funcionan

document.getElementById("hoenn-img").addEventListener("click", () => {
  alert("Esta zona todavía no está disponible, disculpa las molestias")
});
document.getElementById("sinnoh-img").addEventListener("click", () => {
  alert("Esta zona todavía no está disponible, disculpa las molestias")
});
document.getElementById("johto-img").addEventListener("click", () => {
  alert("Esta zona todavía no está disponible, disculpa las molestias")

});


