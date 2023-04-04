//argument object - no longer bound
const add = (a, b) => {
    // console.log(arguments)
return a + b;
};
console.log(add(5, 1, 10))
//this keyword
const user = {
    name : 'saad',
    cities : ['karachi','new york','lahore'],
    printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach(function (city){
console.log(this.name + ' has lived in ' + city);
        });
    }
}
user.printPlacesLived();