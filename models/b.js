class Baboon {
    constructor(name, color, fur, talent) {
        this.name = name
        this.color = color
        this.fur = fur
        this.talent = talent
    }

    talk() {
        console.log(`Hey! I'm ${this.name} the Baboon! I'm great at ${this.talent}`);
    }


}

export default Baboon;
