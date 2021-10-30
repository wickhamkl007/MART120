function setup(){
	createCanvas(500, 700);
}

function draw(){
	background(120,45,78);

	//Head
	fill(255,218,115)
	circle(225,200,175)
	
	//Body and Arms
	fill(255,0,0)
	rect(175,290,100,150)
	rect(275,290,50,120)
	rect(125,290,50,120)

	//Zipper
	line(223,290,223,440)
	line(228,290,228,440)
	
	//legs
	fill(0,0,255)
	rect(225,440,50,140)
	rect(175,440,50,140)
	
	//White Eye Part
	fill(255,255,255)
	circle(185,175,50)
	fill(255,255,255)
	circle(260,175,50)

	//Blue Eye Part
	fill(94,143,255)
	circle(185,175,25)
	fill(94,143,255)
	circle(260,175,25)
	
	//Pupil
	fill(0,0,0)
	circle(185,175,10)
	fill(0,0,0)
	circle(260,175,10)
	
	//Eyebrows
	fill(155,100,0)
	rect(165,139,40,10)
	rect(240,139,40,10)
	
	//Nose
	fill(255,218,115)
	triangle(225,185,215,200,225,215)
	
	//Mouth
	fill(0,0,0)
    arc(225, 235, 50, 50, 0, PI)

    //Title
    textSize(50);
    text('Self Portrait', 105, 50)

    //Signature
    textSize(30);
    text('Kavin Wickham', 230, 660)
    
    



}
