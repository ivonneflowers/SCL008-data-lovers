/* Manejo del DOM */
document.getElementById("btn-start").addEventListener("click", () => {
    
  document.getElementById("screen1").setAttribute('hidden', true);
  document.getElementById("screen2").removeAttribute('hidden');

})

      document.getElementById("kanto-img").addEventListener("click", () => {
        document.getElementById("screen2").setAttribute('hidden', true);
        document.getElementById("screen3").removeAttribute('hidden');
    
      })