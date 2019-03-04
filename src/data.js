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

 const sortDataBackwards = data => {
 let sortBackwards= data.sort( (b, a) => b.name.localeCompare(a.name));
 return sortBackwards;
 }

 window.sortData = sortData;
 window.sortDataBackwards = sortDataBackwards;
