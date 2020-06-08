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

const iterator = new CustomIterator([1,2,3,4])
console.log(iterator.next(), iterator.hasNext()) //1, true