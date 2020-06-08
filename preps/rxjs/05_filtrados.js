const { from } = rxjs;
const {filter} = rxjs.operators;

const numbers = from([2, 30, 22, 5, 60, 1])


numbers
    .pipe(filter(n => n > 10))
    .subscribe(n => console.log(n))