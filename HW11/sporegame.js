//Character Position
var characterX = 500;
var characterY = 100;

//Control Variables
var w = 87; 
var a = 65;
var s = 83;
var d = 68;

//Enemy Position/Speed
var enemy1X = 30;
var enemy1Y = 50;
var enemy1XSpeed;
var enemy1YSpeed;

var enemy2X = 80;
var enemy2Y = 400;
var enemy2XSpeed;
var enemy2YSpeed;

var enemy3X = 400;
var enemy3Y = 400;
var enemy3XSpeed;
var enemy3YSpeed;

//Mouse Created Shape 
var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(600, 600);
}

function draw()
{
    //Background
    background(240,55,220);
    stroke(0);
    fill(0);

    //Border
    rect(0,0,width,10);
    rect(0,0,10,height - 50);
    rect(0, height - 10,width, 10);
    rect(width - 10 ,0,10,height);

    //Exit Text
    textSize(18);
    text("EXIT", width-580,height-50)

    //Character Spawn
    fill(0,0,0);
    rect(characterX, characterY, 25, 25);

    //Character Movement
    if(keyIsDown(w))
    {
        characterY -= 5;   
    }
    if(keyIsDown(s))
    {
        characterY += 5;   
    }
    if(keyIsDown(a))
    {
        characterX -= 5;   
    }
    if(keyIsDown(d))
    {
        characterX += 5;   
    }

    //Future Enemy 1
    fill(13,145,14);
    circle(enemy1X, enemy1Y, 30);

    //Future Enemy 2
    fill(45,111,200)
    rect(enemy2X, enemy2Y, 75,75)

    //Future Enemy 3
    fill(200,22,88)
    ellipse(enemy3X,enemy3Y, 66,77)

     //Random Enemy Speeds
     enemy1XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
     enemy1YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);

     enemy2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     enemy2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

     enemy3XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + 1);
     enemy3YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + 1);

    //Enemy Movement
    enemy1X += enemy1XSpeed;
    enemy1Y += enemy1YSpeed;

    enemy2X += enemy2XSpeed;
    enemy2Y += enemy2YSpeed;

    enemy3X += enemy3XSpeed;
    enemy3Y += enemy3YSpeed;


    // Enemy 1 Out of Bounds Check
    if(enemy1X > width) {
        enemy1X = 0;
    }
    if(enemy1X < 0) {
        enemy1X = width;
    }
    if(enemy1Y > height) {
        enemy1Y = 0;
    }
    if(enemy1Y < 0) {
        enemy1Y = height;
    }

    //Enemy 2 Out of Bounds Check
    if(enemy2X > width) {
        enemy2X = 0;
    }
    if(enemy2X < 0) {
        enemy2X = width;
    }
    if(enemy2Y > height) {
        enemy2Y = 0;
    }
    if(enemy2Y < 0) {
        enemy2Y = height;
    }

    //Enemy 3 Out of Bounds Check
    if(enemy3X > width) {
        enemy3X = 0;
    }
    if(enemy3X < 0) {
        enemy3X = width;
    }
    if(enemy3Y > height) {
        enemy3Y = 0;
    }
    if(enemy3Y < 0) {
        enemy3Y = height;
    }

    // Character Win Check
    if(characterX < 0 && characterY > width-50) {
        fill(0);
        stroke(5);
        textSize(60);
        text("You Win!", width/2-125, height/2);
    }

    //Mouse Created Shape
    fill(200,200,0);
    rect(mouseShapeX, mouseShapeY, 25,50);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}