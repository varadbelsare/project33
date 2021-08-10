const Engine = Matter.Engine; const World= Matter.World; const Bodies = Matter.Bodies;
function preload(){
  bgimg=loadImage("snow1.jpg")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create(); world = engine.world;
 //createSprite(400, 200, 50, 50);
 snow1=new Snow(400,0)
 snow2=new Snow(40,0)
 snow3=new Snow(300,0)
 snow4=new Snow(160,0)
 snow5=new Snow(250,0)
 snow6=new Snow(360,0)
}

function draw() {
  background(bgimg);  
  Engine.update(engine);
  snow1.display()
  snow2.display()
  snow3.display()
  snow4.display()
  snow5.display()
  snow6.display()
  
}