
var headX = 225
var headY = 200
var headDirection = Math.floor(Math.random() * 2);

var mouthX = 225;
var mouthY = 235;
var mouthDirection = Math.floor(Math.random() * 10);

var arm1X = 275;
var arm1Y = 290;
var arm2X = 125;
var arm2Y = 290;
var armDirection = Math.floor(Math.random() * 7);

var eyebrowX = 165;
var eyebrowY = 139;
var eyebrowXDirection = Math.floor(Math.random() * 3);
var eyebrowYDirection = Math.floor(Math.random() * 3);


var size = 30;
var sizeDirection = 2;
var count = 0;

function setup(){
	createCanvas(500, 700);
}

function draw(){
	background(120,45,78);

	//Head
	fill(255,218,115)
	circle(headX,headY,175)
	headX+=headDirection;
	if(headX >= 418 || headX <= 82)
	{
		headDirection *= -1;
	}
	
	//Body
	fill(255,0,0)
	rect(175,290,100,150)

	//Arm 1
	rect(arm1X, arm1Y,50,120)
	arm1Y += armDirection;
	if(arm1Y <= 0 || arm1Y >= 500)
	{
		armDirection *= -1;
	}

	//Arm 2
	rect(arm2X, arm2Y,50,120)
	arm2Y += armDirection;
	if(arm2Y <= 0 || arm2Y >= 500)
	{
		armDirection *= -1;
	}

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
	
	//Eyebrow 1
	fill(155,100,0)
	rect(eyebrowX,eyebrowY,40,10)
	eyebrowX+=eyebrowXDirection;
	eyebrowY+=eyebrowYDirection
	if(eyebrowY > height)
	{
		eyebrowY = 0;
		eyebrowX = 0;
	}

	//Eyebrow 2
	rect(240,139,40,10)

	
	//Nose
	fill(255,218,115)
	triangle(225,185,215,200,225,215)
	
	
	//Mouth
	fill(0,0,0)
    arc(mouthX, mouthY, 50, 50, 0, PI)
    mouthX+=mouthDirection;
	if(mouthX >= 500 || mouthX <= 0)
	{
		mouthDirection *= -1;
	}

    //Title
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
    	sizeDirection *= -1;
    	count = 0;
    }
    text('Self Portrait', 105, 50)

    //Signature
    textSize(size);
    text('Kavin Wickham', 230, 660)
    
    
    



}
