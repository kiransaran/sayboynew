var boat
var boat_Img

function preload() {
 // backgroundImage = loadImage("./assets/background.png");
 boat_Img = loadImage("boat.png")

// landing=loadAnimation("boy.png")
// parachute=loadAnimation("boy_with_parachute.png")
// boat_Img = loadImage("boat.png")
// splash_Img=loadImage("water_splash.png")
// planeImg=loadImage("aeroplane.png")
// bg_Img = loadImage("sea.jpg")
// bg_sound=loadSound("background.mp3")
// splash_sound=loadSound("splash.mp3")
// plane_cut_sound=loadSound("cut.mp3")
// landing_sound=loadSound("happy.wav")
// wind_sound.loadSound("air.wav")
}

function setup() {
  createCanvas(4000,4000);
  boat = createSprite(100,600,1300,20);
  boat.addImage('boat1', boat_Img)
  boat.velocityX=0.4

}

function draw() {
 // background(backgroundImage);
 drawSprites();
}

