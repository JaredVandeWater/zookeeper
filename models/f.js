class Ferret {
    constructor(name, legs, activity, song, friend) {
        this.name = name
        this.legs = legs
        this.activity = activity
        this.song = song
        this.friend = friend
    }


    talk() {
        console.log(`I'm ${this.name} and I love ${this.activity} to ${this.song} with ${this.friend}`)
    }
}

export default Ferret