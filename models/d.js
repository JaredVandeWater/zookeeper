class Deer {
    constructor(name, legs = 4, color) {
        this.name = name
        this.legs = legs
        this.color = color
    }
    talk(typeOfCar) {

        console.log(`I'm ${this.name} and I'm frozen in the headlights of a ${typeOfCar}`);

    }


}

export default Deer