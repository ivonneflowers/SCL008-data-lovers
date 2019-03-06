# Poképedia
![Logo Poképedia](pokepedia-logo.png)


## 👀 ¿De qué se trata? 
**Poképedia** es una aplicación web responsiva que esta diseñada para jugadores de nivel medio de [Pokémon Go!](https://www.pokemongo.com/es-es/) . Esta te permite acceder a información detallada sobre tus Pokémon favoritos y buscar intuitivamente características y estadísticas que quieras conocer. 

* [¿Cómo funciona?](#¿cómo-funciona?)
* [Objetivos de la aplicación](#objetivos-de-la-aplicación )
* [Planificación del proyecto](#planificación-del-proyecto)
* [Estudio de usuario](#estudio-de-usuario)
* [Diseño y testeos a usuarios](#diseño-y-testeos-a-usuarios)
* [Implementación al código](#implementación-al-código-(Resultados))
* [Resumen](#resumen)
* [Reflexión y futuras iteraciones](#reflexion-y-futuras-iteraciones)


***

## 💡 ¿Cómo funciona? 
Poképedia es una aplicación web que te permite enlazar tu cuenta de Pokémon Go a la plataforma y asi crear un *perfil de usuario*, en este puedes guardar y ver estadísticas de tus progresos en el juego y también de tus Pokémon favoritos revisados dentro de la misma app. 
***
## 📋 Objetivos de la aplicación 
* Entrar a la plataforma utilizando y enlazando tu cuenta de Pokémon Go. 

* Dividir los Pokémon según el sector donde ellos se hayan encontrado y permitir al usuario escojerlos de esta forma. 

* Visualizar Pokémon a través de tarjetas con información destacada.

* Clasificar y filtrar Pokémon según los deseos del usuario para acceder mas facilmente a alguna característica específica. 

* Proporcionar un perfil de usuario que permita guardar progresos y estadísticas de lo que el usuario desee. 

***
## ✏️ Planificación del proyecto
 
 Después de leer detenidamente los [requisitos del proyecto](https://github.com/Laboratoria/SCL008-data-lovers), se procedió a realizar una *lista de tareas* según los procedimientos mas comunes para llevar a cabo esta misión. Posteriormente se iría puliendo y desglosando de acuerdo a las *historias de usuario* , *prototipos de baja y alta fidelidad* y *encuestas* que en conjunto nos dieron una idea más específica sobre lo que debíamos hacer y como comenzar a trabajar.  
 También se realizó un breve *diagrama de flujo* donde se expusieron las principales características que querían mostrarse en la aplicación. A pesar de que era un bosquejo bastante arcaico, nos dio la idea que queríamos realizar después en el *prototipo de baja fidelidad*

 ![Diagrama de fujo](diagrama-de-flujo.jpg)

 link de enlace para tablero de planificación (Trello) [aquí](https://trello.com/b/YGdTtMSS/proyecto-2-data-lovers) 👈

***
## 👦👧 Estudio de usuario

### Historias de usuario
Para poder crearse una idea mucho más clara de los objetivos que se necesitaban cumplir en la aplicación, se decidió crear algunas *Historias de usuario*, donde les dabamos a estos usuarios ideales algunas necesidades a cumplir para tener una mejor idea de como realizarlas. 

![primer bosquejo historias de usuario](historias-de-usuario1.jpg)
*Aquí se muestra el primer acercamiento de las historias de usuario a realizar.*

![segundo bosquejo historias de usuario](historias-de-usuario2.jpg)
*Aquí hay una primera iteración de estas.*

![tercer bosquejo historias de usuario](historias-de-usuario3.jpg)
*Última iteración de historias de usuario, como se puede observar, se ha cambiado el formato y se han desglosado mas especificamente las acciones y necesidades.* 

### Encuestas
***
En conjunto con esto se realizó una encuesta a través de redes sociales donde preguntamos en diversos grupos de fanáticos y seguidores del juego cuáles eran los aspectos más importantes a considerar para crear nuestra app. Los resultados se pueden ver [aquí](https://docs.google.com/forms/d/1t-zrfMu7Si33JbUeq5hnvYJxdjWXho0tyHd7MDa6Zmo/edit#responses). 👈


En resumen, pudimos rescatar variada información que en principio no esperabamos que fuese de tal manera, por ejemplo: 

* La mayoría de los encuestados eran **mujeres**, mayores de **20-25 años**

* La totalidad de las personas que pertenecen a estos grupos, por ende están mas afines a consumir aplicaciones web cuando estan por sobre el **nivel 20 del juego**. (Lo que nos da un margen sobre la información que se quiere mostrar).

* La mayoría prefirió que el sitio fuese mas gráfico.
* La mayoría prefirió que el sitio estuviese ligado a su cuenta de Pokémon Go. 
* La mayoría no es seguidor de otros juegos relacionados con el mundo Pokémon. 

## 📹 Diseño y testeos a usuarios

### Diseño de la Interfaz de Usuario
#### Prototipo de baja fidelidad
Cuando tuvimos un margen de lo que deseaba el usuario mayormente; procedimos a realizar algunos prototipos básicos para ver reacciones en personas y su posterior feedback. En esta etapa no se hace referencia a ningún tema estético, tampoco a colores y formas; solo a la ubicación de contenido y como este interactúa. 

![prototipo de baja fidelidad](baja-fidelidad-01.jpg)
 
Lamentablemente no se pudieron grabar los testeos realizados en esta etapa a diferentes personas, pero se recibió feedback importante como : 
 
 * Asegurarse de que la interfaz de usuario sea coherente con el nivel de experticia del mismo. 

 * Eliminar algunos botones innecesarios como el "ver más", ya que se redunda en acciones junto con el de "subir".

 * Se encontró que en general la organización de las cosas se encuentra bien, se quiere asimilar con el de la aplicación, pero hay que tener cuidado de conservar la identidad propia. 

#### Prototipo de alta fidelidad
![pantallazo figma](figma1.png)
*Trabajando en el prototipo de alta fidelidad a través de Figma*

Posterior al primer feedback, se procedió a integrar colores, imágenes y detalles en cuanto a diseño visual más detallados a través de la plataforma Figma de diseño de páginas web. También se logró realizar un Moodboard de usuario para poder tener una referencia de la gama de colores a utilizar en nuestra aplicación.   

![moodboard pokepedia](moodboard-pokepedia.jpg)
*Predominancia de colores verdosos y azulinos, acompañados por rosados y lilas*.


* Link de tablero de nuestro prototipo de alta fidelidad [aquí](https://www.figma.com/file/TkgVtthZSetS4I4I2aDJeNzS/Poképedia?node-id=2%3A0) 👈


* Link de presentación de prototipo [aquí](https://www.figma.com/proto/TkgVtthZSetS4I4I2aDJeNzS/Poképedia?node-id=2%3A0&scaling=contain) 👈

* Link de presentación de prototipo a través de Zeplin [aquí](zpl.io/aNPpgJQ) 👈

Una vez definido el diseño general de la página, se hicieron nuevamente test de usuarios para ver en que se podía mejorar, estos pudieron ser grabados. Aquí estan los links de algunos de estos test. 

* [Primer testeo a usuario experimentado](https://www.useloom.com/share/b5ff78394657465b9496e6f57555b166)

* [Segundo testeo a usuario de nivel medio. Primera parte](https://www.useloom.com/share/fd965f3a3f5e43359808e94d7c01b0c5)
* [Segundo testeo a usuario de nivel medio. Segunda parte](https://www.useloom.com/share/22ded8e0170340ba98f4a35cf6683a9b)

* Aqui va otro link de testeo a usuario 


El feedback que pudimos rescatar de estos testeos fue principalmente:

* Dar la posibilidad de ingresar a la página sin ligar directamente la cuenta a la app de Pokémon Go, en algunos casos esto segregaría mucho al universo de posibles usuarios o quizas sólo se interesen por ver información en vez de recibir estadísticas de su perfil.

* Les agradó el tema de que estuviesen organizados como una ficha los Pokémon, pero les interesa que en estas fichas no solo este la imagen, sino también el nombre de este. 

-  Al momento de presionar la ficha se abre un modal con información más específica del Pokémon seleccionado; dentro del feedback que recibimos solo en el modal se ha concluído que:

   - No consideran que el tamaño o el peso sea información que les interese, ya que suelen ser relativos en cuanto a cada especie, además esto no influye en su fortaleza.
   - Consideran que dentro de lo que más les interesa saber (y por ende debería ser información más a la vista) son las debilidades, la probabilidad de atrape y la hora. También les gustaría saber la cantidad de kilómetros que deben caminar para eclosionar un huevo de cierto tipo, ya que esta info no aparece en el juego. 

* Consideran que la barra de búsqueda es necesaria, pero solo en casos específicos. Por el momento se ha decidido suprimirla y considerarla en futuras iteraciones.
* La barra de menú debería ser un poco más grande para que resalte dentro de la información expuesta en la pantalla.

***

Junto con esto, hemos logrado hacer algunos testeos a través de celulares y tablets, para evaluar cuan efectivo es el *responsive* que estamos creando para la app. dentro de los feedbacks entregados pudimos rescatar: 

![pantallasos respuestas responsive](feedback-responsive.jpg)

* Los modales en celulares se ven un poco grandes, es necesario modificar el tamaño. 

* Colocar un botón de "volver atrás", ya que en algunos casos se necesita y hasta ahora solo le obtiene refrescando la página.

* Hacer los datos curiosos "dinámicos", o que se refresquen de vez en cuando para llamar la atención del usuario. 

* Integrar la opción de ordenar o filtrar según el número de posicionamiento de los Pokémon en el Pokédex. 

***

## ☑️  Implementación al código (Resultados)
### [Puedes ver nuestrro proyecto web AQUÍ](https://aleisabl.github.io/SCL008-data-lovers/src/index.html#) 👈
### Funciones realizadas y pruebas unitarias 
#### Mostrar data
Para mostrar la data decidimos hacerlo a través de *HTML dinámico*, ya que la cantidad de data que manejábamos era bastante y sería poco práctico el llamarla manualmente; por ende, fue codeada en el main.js y, junto a esto, se incorporaron estilos de *Bootstrap* (tarjetas y modales), para que así nuestra data fuese mostrada de una manera más estéticamente atractiva. 

```
card.innerHTML = "";
 result.forEach(element => {
   card.innerHTML += `<div data-toggle="modal" data-target="#exampleModal${element.id}" class="card" style= "width: 8rem;">
   <div class= "card-name">
   <p> ${element.num}</p>
   <a href="#"><img class= "card-img-top" src="${element.img}" alt="Card image cap"></a>
   <p class="pokemon-name"> ${element.name}</p>
   <div class="modal fade" id="exampleModal${element.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog" role="document">
   <div class="modal-content">
     <div class="modal-header">
     <div>
     </div>
     <div>
     <h5 class="modal-title" id="exampleModalLabel">${element.name}</h5>
     <img  class = "pokemon-modal-img" src="${element.img}" alt="modal img">
     </div>
       <button type="button" class="close" data-dismiss="modal" aria-label="Close">
         <span aria-hidden="true">&times;</span>
       </button>
     </div>
     <div class="modal-body">

     <p class="pokemon-type"> Tipos: ${element.type} </p>
     <p class="pokemon-weaknesses"> Debilidades: ${element.weaknesses} </p>
     <p class="pokemon-candy"> Caramelo: ${element.candy} </p>
     <p class="pokemon-egg"> Distancia de huevo: ${element.egg} </p>
     <img id="egg-img" src= "img/egg.png" alt="egg img">
     </div>
     <div class="modal-footer">

       <button type="button" class="see-more">Cerrar</button>
     </div>
   </div>
   </div>
   </div>`
```
*Aquí esta la manera en que llamamos a la data desde el DOM y lo fuimos sobreescribiendo dentro de las tarjetas y modales de Bootstrap*

#### Filtrar data
Para filtrar la data se creo la función filterData donde a través del metodo *data.filter* se llamaba a la data desde su archivo y retornaba solo la que era consecuente con la que el usuario solicitaba (en este caso se decidió filtrar por tipo). Posteriormente la data filtrada era llamada al DOM para poder imprimirla en la pantalla. 
```
const filterData = (data, condition) => {
  let filter = data.filter(element => {
    return element.type.includes(condition) === true;
  })
  return filter;
}

window.filterData = filterData;
```
El test que fue creado para esta función es el siguiente: 
```
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
```
*Para correr este test fue necesario crear una pequeña data ficticia que cumpliera con los parámetros.*

#### Ordenar 
Para esta función se utilizó una formula ya existente en Javascript donde se ordena a través de dos parametros preestablecidos y posteriormente se incorporaba el método *localeCompare* para ordenar en orden alfabético la data (ya que el método sort solo ordena carácteres numéricos).
```
const sortData = data => {
  let sort = data.sort( (a, b) => a.name.localeCompare(b.name));
  return sort;
} 

window.sortData = sortData;
```

Para el test se decidió aplicar la misma data pequeña que habíamos creado anteriormente, y a esta se le pidió ordenarla alfabéticamente. 

```
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

  it('debería retornar el objeto Alakazam de primero', ()=>{
    assert.deepEqual(window.sortData(data), [{name: 'Alakazam'}, {name: 'Bulbasaur'}, {name: 'Charizard'}] )
  })
});
```
#### Estadísticas (Promedio de tipo dentro del total)
 Finalmente para calcular el porcentaje de un tipo dentro del total de nuestra data, se procedió a ejecutar la siguiente función:
``` 
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
```
y el test lo ejecutamos de la siguiente manera:
```
describe('Función computeStats', ()=>{

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
});
```
Como podemos apreciar, el test se ejecutó con dos parámetros que nos permitieron sacar el porcentaje del total, de las cuales eran la *data total y el porcentaje que debía retornar*.
***

## 📑 Resumen
Después de haber hecho todo el estudio de usuario y haber concretado la etapa inicial del código de nuestra aplicación, se ha podido extraer bastante feedback para hacer una lista de las cosas que se pueden mejorar para futuras iteraciones, dentro de estas pudimos destacar:

###  👌 Reflexión y futuras iteraciones


◻️  Entregar la posibilidad de ingresar a la página sin ligar directamente a tu cuenta de Pokémon Go, es decir, dejar ambas opciones para las personas que solo quieran ver la información sin que le cree estadísticas propias .

◻️  Incorporar una barra de búsqueda que permita buscar Pokémon según nombre o palabras clave.

◻️  Agrandar la barra de menú y ver la posibilidad de de colocar la información de filtrado en una barra lateral en el lado izquierdo.

◻️  Colocar un botón de volver atrás al momento de filtrar y ordenar. 

◻️  Colocar datos curiosos dinámicos o que se muestren a través de un gráfico para hacerlo más interactivo

*Creado por [Alexandra Fernández](https://github.com/aleisabl) y [Macarena Terán](https://github.com/ivonneflowers). Para [Laboratoria Chile](https://github.com/LaboratoriaChile)*.