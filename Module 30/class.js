class Vehicle{
    constructor(name) {
        this.name = name;
    }
}

class Bus extends Vehicle{
    constructor(seat,name) {
        super(name);
        this.seat = seat;
    }
}

let car = new Vehicle('h');
console.log(car);