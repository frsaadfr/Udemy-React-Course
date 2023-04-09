








class Person {
    constructor(name = 'anonumyus ', age = 0) {
       this.name = name;
       this.age = age;
    }
    getGreeting() {
        return `hi i am ${this.name + this.age}`;
    }
    getDescripton() {
        return `${this.name } is ${this.age} year(s) old`
    }
}

const me = new Person('saad ', 7);
console.log(me.getDescripton());

const other = new Person();
console.log(other.getDescripton());
