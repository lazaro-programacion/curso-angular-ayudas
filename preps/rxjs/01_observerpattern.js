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