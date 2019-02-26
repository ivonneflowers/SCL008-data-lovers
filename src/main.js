/* Manejo del DOM */
const data = window.POKEMON.pokemon;
console.log(data)
const showData = (data) => {
  data.forEach(elemento => {
    //console.log(elemento.img)
    // console.log(elemento.name)
    // console.log(elemento.num)
    document.getElementById('card').innerHTML += `<div class="card" style= "width: 9rem;">
                                                    <div class= "card-name">
                                                    <p> ${elemento.num}</p>
                                                    <img class= "card-img-top" src="${elemento.img}" alt="Card image cap">
                                                    <p> ${elemento.name}</p>
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