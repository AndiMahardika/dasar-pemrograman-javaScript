class Car {
    constructor (brand, color, maxSpeed) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
    }
}

class Mail {
    constructor(sender, receiver, subject, body){
        this.sender = sender;
        this.receiver = receiver;
        this.subject = subject;
        this.body = body;
    }
}

const car1 = new Car('BMW', 'red', 200);
// car1.chassisNumber = `BMW-1`;    
const car2 = new Car('Audi', 'blue', 220);
const car3 = new Car('BMW', 'black', 250);

console.log(car1);
console.log(car2);
console.log(car3);