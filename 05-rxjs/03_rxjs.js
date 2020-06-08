console.log("ejecutando script");

const { fromEvent } = rxjs;

const enlace = document.getElementById("enlace");

const observable = fromEvent(enlace, "click");

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

const obs2 = {
    next: function(value) {
        console.log("o2", value);
    },
    error: function(err) {
        console.error(err);
    },
    complete: function() {
        console.log("Completed");
    }
};

observable.subscribe(obs);
observable.subscribe(obs2);





