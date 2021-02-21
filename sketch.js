var canvas,pc,allContestants,gs = 0;
var quiz,question,contestant

function setup(){
  canvas = createCanvas(850,400);

  database = firebase.database()
  console.log(database)

  quiz = new Quiz()
  quiz.getState()
  quiz.start()


}


function draw(){
  background("pink");

  if(pc === 4){
    quiz.updateState(1)
  }
  if(gs===1){
    clear()
    quiz.play()
  }
}
