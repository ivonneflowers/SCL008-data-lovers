const filterData = (data, condition) => {
  let filter = data.filter(element => {
    return element.type.includes(condition) === true;
  })//puedo agregar condición que si el valor es 0, mostrar todos los pokémon?? 
  return filter;
}

window.filterData = filterData;


//haciendo pruebas para ordenar la data

 /* const sortData = () => {
  let sortData = data.sort(element => {
    let pokemoncito= POKEMON.pokemon
    for (let i = 0; i < pokemoncito.length; i++){
      let order= [];
      let name = [];
      name.push(`${pokemoncito[i].name}`);
      order = name.sort((primerPokemon,segundoPokemon)=>{
        return primerPokemon.localeCompare(segundoPokemon);

      })
    };
  })
} 

const name = ["Maria", "Juanita", "Ale"]

const nameOrden = name.sort((a,b) => {
return a.localeCompare(b);
});

window.sortData = sortData; */