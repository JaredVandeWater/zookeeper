class Alligator {
    constructor(name, legs, color) {
        this.name = name;
        this.legs = legs;
        this.color = color
    }

    eat(food) {
        console.log(`I'm ${this.name} and I'm super hungry for ${food}`);
    }


}


export default Alligator;
