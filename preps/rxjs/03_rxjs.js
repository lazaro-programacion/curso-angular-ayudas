const { fromEvent } = rxjs;
const link = document.getElementById("customLink");
console.log(link)

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

