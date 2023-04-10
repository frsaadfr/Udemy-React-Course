'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'anonumyus ';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    _createClass(Person, [{
        key: 'getGreeting',
        value: function getGreeting() {
            return 'hi i am ' + this.name;
        }
    }, {
        key: 'getDescripton',
        value: function getDescripton() {
            return this.name + ' is ' + this.age + ' year(s) old';
        }
    }]);

    return Person;
}();

var Student = function (_Person) {
    _inherits(Student, _Person);

    function Student(name, age, major) {
        _classCallCheck(this, Student);

        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

        _this.major = major;
        return _this;
    }

    _createClass(Student, [{
        key: 'hasMajor',
        value: function hasMajor() {
            return !!this.major;
        }
    }, {
        key: 'getDescripton',
        value: function getDescripton() {
            var description = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'getDescripton', this).call(this);
            if (this.hasMajor()) {
                description += ' and their major is ' + this.major;
            }
            return description;
        }
    }]);

    return Student;
}(Person);

//nai sub class == traveler
//new value gethomelocation
//overirde getgreetings
//


var travler = function (_Person2) {
    _inherits(travler, _Person2);

    function travler(name, age, HomeLocation) {
        _classCallCheck(this, travler);

        var _this2 = _possibleConstructorReturn(this, (travler.__proto__ || Object.getPrototypeOf(travler)).call(this, name, age));

        _this2.HomeLocation = HomeLocation;
        return _this2;
    }

    _createClass(travler, [{
        key: 'getHomeLocation',
        value: function getHomeLocation() {
            return !!HomeLocation;
        }
    }, {
        key: 'getGreeting',
        value: function getGreeting() {
            var greeting = _get(travler.prototype.__proto__ || Object.getPrototypeOf(travler.prototype), 'getDescripton', this).call(this);
            if (this.getHomeLocation) {
                greeting += ' and i live in ' + this.HomeLocation;
            }
            return greeting;
        }
    }]);

    return travler;
}(Person);
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


var me = new travler('saad ', 7, 'mozambeek');
console.log(me.getGreeting());

var other = new Student();
console.log(other.getGreeting());
