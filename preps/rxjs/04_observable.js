// RxJS v6+
const { Observable, from, fromEvent } = rxjs;
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



//emit array as a sequence of values
const arraySource = from([1, 2, 3, 4, 5]);
//output: 1,2,3,4,5
arraySource.subscribe(val => console.log(val));

//emit result of promise
const promiseSource = from(new Promise(resolve => resolve('Hello World!')));
//output: 'Hello World'
const subscribePromise = promiseSource.subscribe(val => console.log(val));

//emit string as a sequence
const source = from('Hello World');
//output: 'H','e','l','l','o',' ','W','o','r','l','d'
const subscribeString = source.subscribe(val => console.log(val));

const eventsource = fromEvent(document, 'mousemove');
eventsource.subscribe(e => console.log(e.clientX + ', ' + e.clientY));

