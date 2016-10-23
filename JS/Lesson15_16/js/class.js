function Human() {
    this.name = 'Vasyan';
    this.age = 31;
    this.sex = 'male';
    this.height = 201;
    this.weight = 70;
}

function Worker() {
    this.job = 'Google';
    this.salary = 'Clean Manager';
    this.goWork = function() {
        alert('working=studing!');
    };
};

Worker.prototype = new Human();
var newWorker = new Worker;
console.log('newWorker age', newWorker.age);

var newWorker1 = new Worker;

console.log('newWorker1 sex', newWorker1.sex);
console.log('newWorker1', newWorker1)

var Student = function() {
    this.study = 'High School';
    this.scholarship = '500';
    this.drinkBeer = function() {
        console.log('Because I am studend');
    };
};

Student.prototype = new Human();
var newStudent = new Student;
console.log('newStudent weight', newStudent.weight);
console.log('newStudent.scholarship', newStudent.scholarship);

var newStudent1 = new Student;
console.log('newStudent1.name', newStudent1.name);
console.log('newStudent1', newStudent1);
newStudent1.drinkBeer();
