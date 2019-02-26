/* Manejo del DOM */
const data = window.POKEMON.pokemon;
console.log(data)
const showData = (data) => {
  data.forEach(elemento => {
    //console.log(elemento.img)
    // console.log(elemento.name)
    // console.log(elemento.num)
    document.getElementById('card').innerHTML += `<div class="card" style= "width: 9rem;">
                                                    <img class= "card-img-top" src="${elemento.img}" alt="Card image cap">
                                                    <div class= "card-body">
                                                    <p> ${elemento.name}</p>
                                                    <p> ${elemento.num}</p>
                                                    <p class="card-text"></p>
                                                    </div>
                                                  </div>`
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