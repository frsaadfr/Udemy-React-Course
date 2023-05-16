








class Person {
    constructor(name = 'anonumyus ', age = 0) {
       this.name = name;
       this.age = age;
    }
    getGreeting() {
        return `hi i am ${this.name}`;
    }
    getDescripton() {
        return `${this.name } is ${this.age} year(s) old`;
    }
}

class Student extends Person {
constructor(name, age, major) {
super(name, age); 
    this.major = major;
}
hasMajor() {
    return !!this.major;
}
getDescripton() {
 let description = super.getDescripton();
 if (this.hasMajor()) {
    description += ` and their major is ${this.major}`;
 }   
 return description;
}
}

//nai sub class == traveler
//new value gethomelocation
//overirde getgreetings
//
class travler extends Person {
    constructor(name, age, HomeLocation){
        super(name, age,);
        this.HomeLocation = HomeLocation;
    }
    getHomeLocation() {
        return !!HomeLocation;
    }
getGreeting() {
    let greeting = super.getDescripton();
    if (this.getHomeLocation){
        greeting += ` and i live in ${this.HomeLocation}`
    }
return greeting;
}
}
// class travler extends Person {
//     constructor(name, age, homeLocation) {
//         super(name, age);
//         this.homeLocation = homeLocation;
//     }
// gethomelocation() {
//     return !!homeLocation
// }
// getGreeting(){
//     let greeting = super.getGreeting();
//     if (this.gethomelocation) {
//         return greeting =+ `and i am going ${this.gethomelocation}`
//     }
//     return greeting;
// }
// }



const me = new travler('saad ', 7,  'mozambeek');
console.log(me.getGreeting());

const other = new Student();
console.log(other.getGreeting());
