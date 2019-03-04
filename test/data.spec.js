global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

describe('Función filterData', () => {
  const data = [
    {
      name: 'Charizard',
      type: 'Fire'
    },
    {
      name: 'Squirtle',
      type: 'Water'
    }
  ]

  it('debería retornar el objeto Charizard al filtrar', () => {
    assert.deepEqual(window.filterData(data, 'Fire'), [{name: 'Charizard', type: 'Fire'}] )
  })

  it('debería retornar el objeto Squirtle al filtrar', () => {
    assert.deepEqual(window.filterData(data, 'Water'), [{name: 'Squirtle', type: 'Water'}] )
  })

})


/*describe('Función computeStats'),()=>{
  const data = [
    {
      name: 'Charizard',
      type: 'Fire'
    },
    {
      name: 'Squirtle',
      type: 'Water'
    }
  ]
  
it('debería retornar 50.0 % de pokemones de agua del total', ()=>{
  assert.deepEqual(window.computeStats(data,1), 50.0)
})



}

describe('Función sortData', () => {
  const data = [
    {
      name: 'Charizard',
    },
    {
      name: 'Alakazam',
    }
  ]

  it('debería retornar el objeto Alakazam de primero', () => {
    assert.deepEqual(window.sortData(data), [{name: 'Charizard'}] )
    assert.deepEqual(window.sortData(data), [{name: 'Alakazam'}] )
  })
//sameOrderedMembers??
})

//función computeData

/* const porcentaje = (32*100)/151
const resultPorcentaje = porcentaje.toFixed(1);
console.log('Sabías que los Pokémon tipo agua son el ' + resultPorcentaje + '% de todo Kanto'); */

