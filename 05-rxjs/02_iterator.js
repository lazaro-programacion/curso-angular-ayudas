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
        this.index   < this.collection.length;
}

const arr = ["uno", "dos", "tres", "cuatro", "cinco"];

const it = new CustomIterator(arr);

// console.log(it.next(), it.hasNext());
// console.log(it.next(), it.hasNext());

while (it.hasNext()) {
    console.log(it.next())
}




