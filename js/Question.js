class Question {
    constructor(){
        this.title = createElement("h1")
        this.input1 = createInput("Name")
        this.input2 = createInput("Give Correct Option")
        this.button = createButton("Submit")
        this.question = createElement("h3")
        this.option1 = createElement("h4")
        this.option2 = createElement("h4")
        this.option3 = createElement("h4")
        this.option4 = createElement("h4")
    }

    hide(){
        this.title.hide()
        this.input1.hide()
        this.input2.hide()
        this.button.hide()
    }
    display(){
        console.log("display function ")
        this.title.html("My Quiz Game")

        this.title.position(350,0)

        this.question.html("Poor people have it, rich people need it, if you eat it you die. ")

        this.question.position(150,80)

        this.option1.html("Everything")

        this.option1.position(150,100)

        this.option2.html("Nothing")

        this.option2.position(150,120)

        this.option3.html("Money")

        this.option3.position(150,140)

        this.option4.html("Food")

        this.option4.position(150,160)

        this.input1.position(150,230)

        this.input2.position(350,230)

        this.button.position(290,300)

        this.button.mousePressed(()=>{
            this.title.hide()
            this.input1.hide()
            this.input2.hide()
            this.button.hide()
            this.question.hide()
            this.option1.hide()
            this.option2.hide()
            this.option3.hide()
            this.option4.hide()
            contestant.name = this.input1.value()
            contestant.answer = this.input2.value()
            pc = pc +1
            contestant.index = pc
            contestant.update()
            contestant.updateCount(pc)
        })
    }
}