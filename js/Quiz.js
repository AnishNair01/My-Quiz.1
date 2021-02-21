class Quiz {
    constructor() {

    }
    getState() {
        var ref = database.ref("gameState")
        ref.on("value", function (data) {
            gs = data.val()
        })
    }

    updateState(s) {
        var ref = database.ref("/")
        ref.update({ gameState: s })
    }

    async start() {
        if (gs === 0) {
            contestant = new Contestant();
            contestant.getCount()
           question = new Question()
            question.display();
        }
    }

    play(){
        
        // question.option1.hide()
        // question.option2.hide()
        // question.option3.hide()
        // question.option4.hide()
        background("yellow")
        fill(0)
        textSize(30)
        Contestant.getPlayerInfo()
        if(allContestants != undefined){
            var x = 230 , y = 250 
            for( var i in allContestants){
                var correctOption = "2"
                if(correctOption === allContestants[i].answer){
                    fill("green")
                }
                else{
                    fill("red")
                }
                y = y + 40
                text(allContestants[i].name+" : "+allContestants[i].answer,x,y-20)
               
            }
        }
    }

    

}