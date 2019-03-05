//función para filtrar la data por tipos de pokémon
const filterData = (data, condition) => {
  let filter = data.filter(element => {
    return element.type.includes(condition) === true;
  })//puedo agregar condición que si el valor es 0, mostrar todos los pokémon?? 
  return filter;
}

window.filterData = filterData;

//función para ordenar la data de la A a la Z
  const sortData = data => {
  let sort = data.sort( (a, b) => a.name.localeCompare(b.name));
  return sort;
} 

window.sortData = sortData;

//función para calcular porcentaje de los Pokémon agua en Kanto (32)
window.computeStats = (data) => {
  let num = [];
  for (let i=0; i<data.length; i++) {
    if (data[i].type.includes('Water') === true) {
      num.push(data[i]);
    }
  }

  let calculate = (num.length*100)/data.length;
  let resultCalculation = calculate.toFixed(1);
  return resultCalculation;
} 

//console.log('Sabías que los Pokémon tipo agua son el ' + resultCalculation + '% de todo Kanto'); */

