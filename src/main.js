/* Manejo del DOM */
const data = window.POKEMON.pokemon;
const card = document.getElementById('card');

/* window.onscroll = function() {scrollFunction()};

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
} */

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

     <p class="pokemon-type"> Tipos: ${element.type} </p>
     <p class="pokemon-weaknesses"> Debilidades: ${element.weaknesses} </p>
     <p class="pokemon-candy"> Caramelo: ${element.candy} </p>
     <p class="pokemon-egg"> Distancia de huevo: ${element.egg} </p>
     <img id="egg-img" src= "img/egg.png" alt="egg img">
     </div>
     <div class="modal-footer">

       <button type="button" class="see-more">Cerrar</button>
     </div>
   </div>
   </div>
   </div>`



 })
}
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

     <p class="pokemon-type"> Tipos: ${element.type} </p>
     <p class="pokemon-weaknesses"> Debilidades: ${element.weaknesses} </p>
     <p class="pokemon-candy"> Caramelo: ${element.candy} </p>
     <p class="pokemon-egg"> Distancia de huevo: ${element.egg} </p>
     <img id="egg-img" src= "img/egg.png" alt="egg img">
     </div>
     <div class="modal-footer">

       <button type="button" class="see-more">Cerrar</button>
     </div>
   </div>
   </div>
   </div>`


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

         <p class="pokemon-type"> Tipos: ${element.type} </p>
         <p class="pokemon-weaknesses"> Debilidades: ${element.weaknesses} </p>
         <p class="pokemon-candy"> Caramelo: ${element.candy} </p>
         <p class="pokemon-egg"> Distancia de huevo: ${element.egg} </p>
         <img id="egg-img" src= "img/egg.png" alt="egg img">
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


window.onload = showData(data)
document.getElementById("btn-start").addEventListener("click", () => {

 document.getElementById("screen1").setAttribute('hidden', true);
 document.getElementById("screen2").removeAttribute('hidden');

})


document.getElementById("kanto-img").addEventListener("click", () => {

 document.getElementById("screen2").setAttribute('hidden', true);
 document.getElementById("screen3").removeAttribute('hidden');

});