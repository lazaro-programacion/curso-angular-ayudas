# RxJS

Según el Reactive Manifesto, la programación reactiva es un paradigma enfocado en el trabajo con stream de datos de manera asíncrona. En este se establece las bases de los sistemas reactivos, los cuales deben ser:

- Responsivos: aseguran la calidad del servicio cumpliendo unos tiempos de respuesta establecidos.
- Resilientes: se mantienen responsivos incluso cuando se enfrentan a situaciones de error.
- Elásticos: se mantienen responsivos incluso ante aumentos en la carga de trabajo.
- Orientados a mensajes: minimizan el acoplamiento entre componentes al establecer interacciones basadas en el intercambio de mensajes de manera asíncrona

¿Qué son los streams?
Para entender la programación reactiva, debemos entender lo que son los streams. Podríamos decir que un stream es un tipo de colección, al igual que un array o un string, en este caso, de eventos o elementos futuros. La diferencia radica en que los stream no están disponibles de forma síncrona y que, además, desconocemos su tamaño.

Un stream puede provenir de múltiples fuentes, como por ejemplo:

- Eventos del DOM - (eventos del ratón, eventos del teclado, eventos de formularios, etc.)
- Animaciones
- Peticiones HTTP
- WebSockets
- Lectura o escritura de ficheros.
- Llamadas a base de datos

# ¿Qué es RxJS?
RxJS es una implementación para JavaScript de las Reactive Extensions. Estas fueron desarrolladas por Erik Meijer en Microsoft en el 2009. Básicamente son una librería para trabajar con streams mediante el uso de observables.

Las Rx están implementadas en más de 18 lenguajes de programación. En el mundo de Javascript también son conocidas como el *lodash* de los eventos.
Esta librería nos proporciona un marco de trabajo en el que todo gira alrededor del tipo básico, el *observable*, el cual simplemente representa un stream de datos. Además, disponemos de otros tipos complementarios como *observer, schedulers, subjects* y operadores inspirados en Arrays *map, filter, reduce*, etc; los cuales nos permiten el manejo de eventos asíncronos como colecciones. En párrafos posteriores, veremos los operadores más importantes.

# Observer e Iterator
Para entender qué son y de dónde provienen los observables, debemos entender sus bases, el patrón observer y el patrón iterator.

## Patrón observer

La filosofía del patrón observador es sencilla: un objeto, denominado sujeto (**subject**), posee un estado. Si dicho estado cambia, es capaz de *notificar* a sus suscriptores (**observers**) de este cambio. Gracias a ello, los objetos suscritos al objeto subject no tienen por qué preocuparse de cuándo se produce un cambio de estado, ya que este se encargará de informar de forma activa a todos aquellos objetos que hayan decidido suscribirse.

Veamos una implementación básica de dicho patrón:

```javascript
class Subject {
    constructor(){
        this.observers = []
    }

    add(obs){
	  this.observers = this.observers.concat(obs)
    }

    delete(obs){
	  this.observers = this.observers.filter(l => l !== obs)
    }

    notify(msg){
	  this.observers.map(obs => obs.update(msg))
    }
}
```

Como podemos comprobar, la implementación es muy sencilla. Si creamos una instancia de esta clase, el objeto subject contiene una lista de observers. Estos observers se pueden añadir a través de add, o eliminar a través del método delete. Además, por medio del método notify, podemos notificar a dichos observers.

Veamos un ejemplo de cómo funciona:

```javascript
const observer1 = {
	update: msg => console.log(`observer 1: ${msg}`)
}

const observer2 = {
	update: msg => console.log(`observer 2: ${msg}`)
}

const subject = new Subject()
subject.add(observer1)
subject.add(observer2)
subject.notify("Hello");
//observer 1: Hello
//observer 2: Hello
```

Como podemos observar en el código anterior, observer1 y observer2 son notificados cada vez que el objeto subject actualiza su estado interno. Esta implementación es muy sencilla, pero nos sirve para ilustrar cómo el patrón observador nos permite desacoplar los eventos y la reacción de los objetos que están a la escucha.

## Patrón Iterator

La otra pieza fundamental del puzzle es el patrón iterator. El objetivo de este patrón es proporcionarnos una manera de acceder a los elementos de un objeto agregado, de forma secuencial, sin exponer sus detalles. 

Es decir, *proporciona a una colección un medio para navegar por sus datos sin exponer su estructura interna*.

La implementación del iterador es muy simple, tan solo necesita la especificación de dos métodos: next(), para obtener el siguiente elemento en la colección, y hasNext(), para verificar si quedan elementos en dicha colección.

```javascript
class CustomIterator {
    constructor(collection) {
        this.index = 0;
        this.collection = collection;
    }

    next = () =>
        this.hasNext()
            ? this.collection[this.index++]
            : null

    hasNext = () =>
        this.index + 1 < this.collection.length;
}

const customIterator = new CustomIterator([1,2,3,4])
console.log(customIterator.next(), consumer.hasNext()) //1, true
```

Como vemos, es un patrón extremadamente simple, pero nos proporciona una excelente forma de encapsular la lógica mediante la cual recorremos cualquier tipo de estructura de datos. La combinación de este patrón junto con el patrón observer nos es tremendamente efectiva y es la base de los observables de las Reactive Extensions.

# Observable

Tras analizar sus fundamentos, veamos qué entendemos por observable.  Como podemos imaginar, el tipo **observable** es el eje central de Rx. Simplemente **representa la idea de una colección de valores o eventos futuros**.  

Los valores o eventos **se emiten en orden**, igual que en el patrón iterator. *En lugar de que sean los objetos que lo consumen los que solicitan el siguiente elemento, es ***el propio observable*** el que *empuja* los siguientes elementos a los objetos suscritos*, a medida que estos están disponibles, tal como sucedía en el subject del patrón observer.

## Características
 - Proporcionan soporte para enviar mensajes entre publishers y subscribers.
 - Ofrecen beneficios significativos sobre otras técnicas a la hora de trabajar con eventos y manejar la asincronía.
 - Los observables son lazy (perezosos). No comienzan a emitir datos hasta que te suscribes a ellos.
 - Al igual que los iteradores, un observable puede indicar cuándo se completa la secuencia.
 - Nos permiten declarar cómo reaccionar a una secuencia de elementos, en lugar de tener que reaccionar a los elementos de forma individual.

 Veamos un ejemplo:

 ```javascript
 import { fromEvent } from 'rxjs';
const link = document.getElementById("customLink");

const obs = {
    next: function(value) {
        console.log(value);
    },
    error: function(err) {
        console.error(err);
    },
    complete: function() {
        console.log("Completed");
    }
};

// Create an Observable from event
const observable = fromEvent(link, "click");
// Subscribe to begin listening for async result
observable.subscribe(obs);
```

Lo primero que hacemos es crear un observable a partir de un evento, en concreto del evento clic de un enlace con la id *customLink*. A continuación, nos suscribimos a dicho observable por medio de la función subscribe, pasándole el objeto *obs*, que cumple con la interfaz observer.

## Subscription y observer
En el ejemplo anterior aparecen dos conceptos básicos de Rx: **subscription** y **observer**.

Subscription representa la ejecución de un observable. Como hemos comentado, los observables son lazy, por lo tanto, hasta que no nos suscribimos a ellos, no comienzan a emitir valores. Los suscriptores tienen que implementar la interfaz de observador.

Observer es un objeto que sabe reaccionar a los valores entregados por el observable. Para ello implementa la interfaz de observador. Dicha interfaz contiene los métodos next(), error() y complete().  

**Next()** es el equivalente al método update en el patrón observer. Se llama cuando el observable emite un nuevo valor. **Complete()** se ejecuta cuando no hay más datos disponibles.

El método **error()** se ejecuta cuando se produce un error en el observable, al igual que **complete()**. Una vez ejecutado, las siguientes llamadas no tendrán efecto.

## Visualización de observables

Para entender el comportamiento de los observables nos apoyaremos en los diagramas de marbles o canicas.  Estos diagramas son muy clarificadores, ya que nos ayudan a simplificar el comportamiento de los observables y de los operadores que aplicamos sobre ellos, los cuales nos ayudarán a visualizar de forma más clara el comportamiento de los operadores.

En este tipo de diagramas el tiempo viene representado por la línea horizontal y los valores emitidos por el observable se encuentran representados por canicas.

!()[https://res.cloudinary.com/software-crafters/image/upload/v1546943598/posts/introduccion-programacion-reactiva-rxjs/marble.png]

En el ejemplo tenemos un observable que emite los valores de un evento. Cada una de las canicas representa un elemento emitido, la *x* representa un error y la línea vertical indica que el observable ha dejado de emitir valores.

## Operadores

Un operador es, en esencia, una función pura que toma un observable como entrada y genera otro observable como salida. Existen docenas de operadores divididos en ocho categorías: creacionales, de transformación, de filtrado, condicionales, de combinación, multidifusión, manejo de errores y de utilidad.

A continuación, veremos los más importante desde un punto de vista pragmático, mediante los cuales podremos realizar el 90% de las operaciones en cualquier proyecto real.

### Operadores de creación

RxJS nos ofrece una serie de operadores destinados a la creación de observables. Estas funciones simplifican el proceso de creación de observables a partir de elementos como arrays, eventos, callbacks o promesas.

#### Create

Es el operador de creación más básico. Crea un observable a partir de una función recibida y esta define cómo el observable va a emitir los valores:

```javascript
// RxJS v6+
import { Observable } from 'rxjs';
/*
  Create an observable that emits 'Hello' and 'World' on
  subscription.
*/
const hello = Observable.create((observer) => {
  observer.next('Hello');
  observer.next('World');
});

//output: 'Hello'...'World'
const subscribe = hello.subscribe(val => console.log(val));
```

#### From

Este operador de creación convierte una colección o una promesa en un observable:


```javascript
// RxJS v6+
import { from } from 'rxjs';

//emit array as a sequence of values
const arraySource = from([1, 2, 3, 4, 5]);
//output: 1,2,3,4,5
arraySource.subscribe(val => console.log(val));

//emit result of promise
const promiseSource = from(new Promise(resolve => resolve('Hello World!')));
//output: 'Hello World'
const subscribe = promiseSource.subscribe(val => console.log(val));

//emit string as a sequence
const source = from('Hello World');
//output: 'H','e','l','l','o',' ','W','o','r','l','d'
const subscribe = source.subscribe(val => console.log(val));
```

#### fromEvent

Como su propio nombre indica, este operador convierte cualquier tipo de evento en un observable:

```javascript
import { fromEvent } from 'rxjs';
const source = fromEvent(document, 'mousemove');
source.subscribe(e => console.log(e.clientX + ', ' + e.clientY));
```

### Operadores de filtrado

Como su propio nombre indica, son operadores destinados al filtrado de los valores emitidos por el observable. Estos operadores son los más sencillos y fáciles de utilizar, ya que simplemente aceptan o rechazan ciertos valores según los criterios de filtrado aplicados. Sin duda, en este apartado el más importante es filter.

#### Filter
 
Filter se comporta igual que el operador estándar de JavaScript. Solo emitirá valores si cumple la condición dada por el predicado.

```javascript
// RxJS v6+
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

const numbers = from([2, 30, 22, 5, 60, 1])


numbers
    .pipe(filter(n => n > 10))
    .subscribe(n => console.log(n))
```

En este caso, el predicado devuelve solo los elementos de entrada mayor que 10. Por lo tanto, solo se emiten los valores 30, 22 y 60.



