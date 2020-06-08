const { Observable, from , fromEvent } = rxjs;

const hello = Observable.create(
    (observer) => {
        observer.next("Hola");
        observer.next("Mundo");
        observer.complete();
    }
)

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

const obsMouse = {
    next: function(value) {
        console.log(value.x, value.y);
    },
    error: function(err) {
        console.error(err);
    },
    complete: function() {
        console.log("Completed");
    }
};

hello.subscribe(obs);

const fromArray = from([1,2,3,4,5]);
fromArray.subscribe(obs);

const fromString = from("Hola Mundo");
fromString.subscribe(obs);

const fromEvt = fromEvent(document, "mousemove");
fromEvt.subscribe(obs);
fromEvt.subscribe(obsMouse);

const fromPromise = from(new Promise(resolve => resolve("hola mundo")));
fromPromise.subscribe(obs);


