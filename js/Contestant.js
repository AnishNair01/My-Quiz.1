class Contestant {
    constructor() {
        this.name = null
        this.index = null
        this.answer = 0
    }

    getCount() {
        var ref = database.ref("contestantCount")
        ref.on("value",  (data)=> {
            pc = data.val()
        })
    }

    updateCount(count) {
        var ref = database.ref("/")
        ref.update({ contestantCount: count })
    }

    update() {
        var pI = "contestants/contestant"+this.index
        database.ref(pI).set({
            name:this.name,
            index:this.index,
            answer:this.answer
        })
    }

    static getPlayerInfo(){
        var ref = database.ref("contestants")
        ref.on("value",(data)=>{
            allContestants = data.val()
        })
    }

}