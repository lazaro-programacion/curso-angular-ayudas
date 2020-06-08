const { from } = rxjs;
const { filter, map } = rxjs.operators;

const arraySubject = from([1,2,3,4,5,6,7,8,9,10]);


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

arraySubject.pipe(
    filter(
        i => i%2 === 0
    )
).pipe(
    map(
        i => "El valor es "+ i
    )
)
.pipe(
    map(
        i => i.toUpperCase()
    )
)
.subscribe(obs)
