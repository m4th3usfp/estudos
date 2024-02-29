class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        return currentYear - this.year;
    }
}

const myCar = new Car('Ford', 2023);
let yearInfo = myCar.age();
let txt = 'My car is ' + yearInfo + ' years old.';
console.log(txt);
