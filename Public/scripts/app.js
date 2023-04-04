//argument object - no longer bound
const add = (a, b) => {
    // console.log(arguments)
    return a + b;
};
console.log(add(5, 1, 10));
//this keyword
const user = {
    name: 'saad',
    cities: ['karachi', 'new york', 'lahore'],
    printPlacesLived: function () {

        this.cities.forEach(city => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};
user.printPlacesLived();
