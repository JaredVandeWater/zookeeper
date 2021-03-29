class Camel {
    constructor(name, humps = 0, wearSunglasses = false) {

        this.name = name
        this.humps = humps
        this.wearSunglasses = wearSunglasses

    }

    checkGlasses() {
        if (this.wearSunglasses) {
            return "wear shades... "
        } else { return "don't wear shades... " }
    }

    talk(randomNoise) {

        console.log(`Yo! I'm ${this.name} and the best Camel because I ${this.checkGlasses()} ${randomNoise}`)
    }
}

export default Camel;