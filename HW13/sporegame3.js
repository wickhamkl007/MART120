//Character Position
var characterX = 500;
var characterY = 100;

//Control Variables
var w = 87; 
var a = 65;
var s = 83;
var d = 68;

//Enemy Position/Speed
var enemyX = 30;
var enemyY = 50;

var enemyXs = [];
var enemyYs = [];
var enemyDiameter = [];

var enemyXspeed = [];
var enemyYspeed = [];


//Mouse Created Shape 
var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(600, 600);

    //Enemy Random Speed on Start
      for (var i = 0; i < 10; i++) {
        //Establishes enemy speeds
        enemyXspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        enemyYspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        enemyXs[i] = getRandomNumber(500);
        enemyYs[i] = getRandomNumber(600);
        enemyDiameter[i] = getRandomNumber(30);
    }

}

function draw()
{

    //Border Function
    BorderCreation();
    
    //Player Functions
    CharacterSpawn();
    CharacterMovement();

    //Enemy Functiona
    EnemySpawn();
    

    //Win Check Function
    WinCheck();

    //Mouse Click Enemy
    mouseCreatedShape();

    
}

function mouseClicked() {
    
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;

}

function mouseCreatedShape(){

    //Mouse Created Shape
    fill(200,200,0);
    rect(mouseShapeX, mouseShapeY, 25,50);

}

function CharacterSpawn() {

    //Character Spawn
    fill(0,0,0);
    rect(characterX, characterY, 25, 25);

}

function CharacterMovement() {

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

}


function EnemySpawn() {

    

    for (var i = 0; i < enemyXs.length; i++) {
        fill(getRandomNumber(300), getRandomNumber(300), getRandomNumber(300))
        circle(enemyXs[i], enemyYs[i], enemyDiameter[i]);
        enemyXspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
        enemyYspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
        
        // Move Enemies 
        enemyXs[i] += enemyXspeed[i];
        enemyYs[i] += enemyYspeed[i];

        //Check Boundary
        if (enemyXs[i] > width) {
            enemyXs[i] = 0;
        }
        if(enemyXs[i] < 0) {
            enemyXs[i] = width;
        }
        if (enemyYs[i] > height) {
            enemyYs[i] = 0;
        }
        if (enemyYs[i] < 0) {
            enemyYs[i] = height;
        }
    }

}
   

function BorderCreation() {

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

}

function WinCheck() {

    // Character Win Check
    if(characterX < 0 && characterY > width-50) {
        fill(0);
        stroke(5);
        textSize(60);
        text("You Win!", width/2-125, height/2);
    }

}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}
