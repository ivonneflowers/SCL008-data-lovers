global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

//Test de la función de filtrar la data alfabéticamente

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

//Test de la función de mostrar porcentaje de tipos de Pokémon  en toda la data (kanto)'

describe('Función computeStats', () =>{

  const data = [
    {
      name: 'Charizard',
      type: 'Fire'
    },
    {
      name: 'Squirtle',
      type: 'Water'
    },
    {
      name: 'Lapras',
      type: 'Water'
    }
  ]
  
it('debería retornar 66.7 % de pokemones de agua del total', () =>{
  assert.equal(window.computeStats(data), 66.7)
})
})

//Test de la función de ordenar la data alfabéticamente 'A -- Z'

describe('Función sortData', () => {
  const data = [
    {
      name: 'Charizard',
    },
    {
      name: 'Alakazam',
    },
    {
      name: 'Bulbasaur',
    }
  ]

  it('debería retornar el objeto Alakazam de primero', () => {
    assert.deepEqual(window.sortData(data), [{name: 'Alakazam'}, {name: 'Bulbasaur'}, {name: 'Charizard'}] )

  })
})