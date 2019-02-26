/* Manejo del DOM */
const data = window.POKEMON.pokemon;
console.log(data)
const showData = (data) => {
  data.forEach(elemento => {
    //console.log(elemento.img)
    // console.log(elemento.name)
    // console.log(elemento.num)
    document.getElementById('card').innerHTML += `<div class="col-md-2">
                                                    <img src="${elemento.img}" alt="${elemento.name}">
                                                    <p>Nombre: ${elemento.name}</p>
                                                    <p>Número: ${elemento.num}</p>
                                                    <div class="col-md-10">
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