class Fruit {
    constructor(name,colour, weight, price) {
        this.name = name;
        this.color = colour;
        this.weight = weight;
        this.price = price;
    }
        getWeight() {
            return this.weight;
        }
        getPrice() {
            return this.price;
        }
        getValue() {
            let value = weight*price;
            return value;
        }
}

let banana = new Fruit("Banana", "Yellow", 7, 250);

console.log(banana);
let weight = banana.getWeight();
let price = banana.getPrice();
console.log("The value is " + banana.getValue() + " drams");

