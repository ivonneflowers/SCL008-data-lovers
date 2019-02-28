const filterData = (data, condition) => {
  let filter = data.filter(element => {
    return element.type.includes(condition) === true;
  })
  console.log(filter)
  return filter;
}

window.filterData = filterData;

/* const sortData = () => {
  let sortData = data.sort(element => {

  })
} */