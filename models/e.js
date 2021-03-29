class Eel {
    constructor(name, electric = false) {
        this.name = name
        this.electric = electric

    }


    zap() {
        if (this.electric == true) {
            return 'will'
        } else {
            return "won't"
        }
    }

    talk() {
        console.log(`I'm ${this.name} the Eel and I ${this.zap()} zap ya!`)
    }
}

export default Eel

