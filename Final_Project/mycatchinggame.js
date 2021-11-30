var screen = 0;
var y=-20;
var x=200;
var speed = 2;
var score= 0;

function setup() {
  createCanvas(600, 400);
}


function draw() {
	if(screen == 0){
    startScreen()
  }else if(screen == 1){
  	gameOn()
  }else if(screen==2){
  	endScreen()
  }	
}

//Start screen 
function startScreen(){
		background(96, 40, 255)
		fill(255)
		textAlign(CENTER);
		textSize(20);
		stroke(20);
		text('Catch the Ball', width / 2, height / 2)
		text('click to start', width / 2, height / 2 + 20);
		reset();
}

//Function for all game related features
function gameOn(){
	background(0,200,300)
  text("score = " + score, 50,20)
  fill(0);
  ellipse(x,y,20,20)
  rectMode(CENTER)
  rect(mouseX,height-10,50,30)
	y+= speed;
  if(y>height){
  	screen =2
	 }
  if(y>height-10 && x>mouseX-20 && x<mouseX+20){
  	y=-20
    speed+=.5
    score+= 1
  }
	if(y==-20){
  	pickRandom();
  }
}

//Drops ball from random spot on the X axis
function pickRandom(){
	x= random(20,width-20)
}

//Display of loosing screen
function endScreen(){
		background(150)
		textAlign(CENTER);
		fill(300,300,300)
		textSize(15);
		text('GAME OVER', width / 2, height / 2)
  	text("SCORE = " + score, width / 2, height / 2 + 20)
		text('click to play again', width / 2, height / 2 + 40);
}

//The purpose of this function is to start the game/restart the game
function mousePressed(){
	if(screen==0){
  	screen=1
  }else if(screen==2){
  	screen=0
  }
}

//Resets score on restart and speed of enemies as well as the position of the next enemy
function reset(){
	  score=0;
  	speed=2;
  	y=-20;
}
