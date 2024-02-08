let hour = 15;
if (hour >=6 && hour <12) {
    console.log('Good Morning');
}
else if (hour >=12 && hour <18) {
    console.log('Good Afternoon');
}
else
    console.log('Good Evening');

let number = max(5, 10);
console.log(number);

function max(a, b) {
    if (a > b) return a;
    else return b;
    // return (a > b) ? a : b;
}

const marks = [80, 80, 50];
// console.log(caculateGrade(marks));
// let average = {
//      80 + 80 + 50 / 3
// }
console.log(caculateGrade(marks));

function caculateGrade(marks) {
    let sum = 0;
    for (let mark of marks)
    sum += mark;
let average = sum / marks.length;
    if (average < 60) 
        console.log('F');
    
    else if (average < 70) 
        console.log('D');
    
    else if (average < 80) 
        console.log('C');
    
    else if (average < 90) 
        console.log('B');
    
    else if (average <= 100) 
        console.log('A');
    
    
}
let selectedColors = ['blue', 'black', 'red'];
selectedColors[3] = 'yellow';
console.log(selectedColors);

function greet(name) {
    console.log('Hello  ' + name)
}
greet('John')

let a = 'red';
let b = 'blue';
let c = a;
a = b;
 b = c;

console.log(a);
console.log(b);

const person = {
    name : 'Mosh',
    age : 30
};
for (let put in person)
console.log(put);

const output = fizzBuzz(7);
console.log(output);
function fizzBuzz(input) {
    if (typeof input !== 'number')
    return 'Not a number';
    else if ((input % 3 === 0) && (input % 5 === 0))
    return 'FizzBuzz';
    else if (input % 3 === 0)
    return 'Fizz';
    else if (input % 5 === 0)
    return 'Buzz';
else
    return input;
}

// speed code
checkSpeed(180);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    if (speed < speedLimit + kmPerPoint)
    console.log('ok');
    else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 12)
        console.log('License Suspended');
    else
        console.log('points', points);

    }
}

showNumber(10);
function showNumber(limit) {
        for(let i = 0; i <= limit; i++) {
        if (i % 2 === 0)
        console.log(i, 'Even');
        else
        console.log(i, 'Odd');
    }
    
}
showStars(7);
function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
    let pattern = '';
    for (let i = 0; i < row; i++)
    pattern += '*';
    console.log(pattern);
    }
}

const circle = {
    radius : 1,
    draw() {
        console.log('draw');
    }
};
const another = Object.assign({}, circle);
console.log(another);

let post = new Post('a', 'b', 'c')
console.log(post)
function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;

}
let numbers = [1, 3, 5, 7];
// numbers.splice(0, 4);
// console.log(numbers);
for (let number in numbers)
console.log(number, numbers[number]);
for (let number of numbers)
console.log(number)

let values = [3, 2, 1];
const arrange = values.sort();
console.log(arrange)

const lists = [1, -1, 5, 8];
const filtered = lists.filter(function(value) {
    return value >= 0;
});
console.log(filtered)

const man = {
    firstName : 'Oladehinde',
    lastName : 'Ojo',
    get fullName() {
        return `${man.firstName}  ${man.lastName}`},
    set fullName(value) {
            const parts = value.split(' ');
            this.firstName = parts[0];
            this.lastName = parts[1];
        }
};
man.fullName = 'Ojo Oluwayomi'
console.log(man.fullName)

//Draw Mathod
const circle1 = {
    radius: 1,
    draw: function() {
        console.log('draw');
    }
};
circle1.draw();

//FACTORY FUNCTION
function createCircle(radius) {
    return {
        radius: radius,
        draw: function() {
            console.log('draw');
    }
};
}
const circle2 = createCircle(1);
circle2.draw();

//CONSTRUCTOR FUNCTION
function Circle3(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    };
}
const another2 = new Circle3(10);
for (let key in another2) {
    if (typeof another2[key] !== 'function')
    console.log(key, another2[key]);
}
const keys = Object.keys(another2)
console.log(keys);

//COMPOSITION
const canEat = {
    eat: function() {
        console.log('eating');
    }
};
const canWalk = {
    walk: function() {
        console.log('walking');
    }
};
const person5 = Object.assign({}, canEat, canWalk);
console.log(person5)

// CLASS
class Ball {
    constructor(radius) {
        this.radius = radius;
        this.move = function() {};
    }
    draw() {
}
}
const ball = new Ball(1)
console.log(ball);

// CLASS INHERITANCE
class Shape {
    constructor(radius) {
        this.radius = radius;
    }
    move() {
    console.log('move');
}
}
class Cirlcle6 extends Shape {
    draw() {
        console.log('draw');
    }
}
const k = new Cirlcle6();
console.log(k);