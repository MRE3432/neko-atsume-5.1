var fondo;
var bed;
var bedimg;
var choba;
var chobaimg;
var menu, menuImage;




var gameState;

function preload (){
    menubuttonimg = loadImage("assets/menubutton.png");
    menuImage = loadImage("assets/menu.png");
fondo = loadImage("assets/fondo.png");
bedimg = loadImage("assets/bed.png")
chobaimg = loadImage("assets/choba.png")
bed = createSprite(1500,700,50,50);
bed.addAnimation("bed",bedimg);
bed.scale = 2;
choba = createSprite(1500,650,40,40);
choba.addAnimation("choba",chobaimg);
choba.scale = 0.3;
}


function setup (){
canvas = createCanvas(windowWidth, windowHeight);

menu = new Menu();
menu.play();

}


function draw (){
createCanvas ( displayWidth,displayHeight);
background(fondo);

if (gameState === 1) {
    menu.play();
  }

drawSprites();

}