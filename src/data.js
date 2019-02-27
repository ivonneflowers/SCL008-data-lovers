const filterData = (data, condition) => {
  let filter = data.filter(element => {
    return element.type === condition;
  })
  return filter;
}

window.filterData = filterData;