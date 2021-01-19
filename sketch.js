var angryWorld;
var angryEngine;
var ground;
var ball;

function preload(){

}

function setup(){
  createCanvas(480,240);

  angryEngine = Matter.Engine.create();
  angryWorld = angryEngine.world;

  var properties={
    isStatic:true
  }
  ground = Matter.Bodies.rectangle(240,230,480,20,properties);
  Matter.World.add(angryWorld,ground);

  var ballProperties = {
    restitution:1
  }
  ball = Matter.Bodies.circle(240,100,25,ballProperties)
  Matter.World.add(angryWorld,ball)

  console.log(ground);
}

function draw(){
background ("lightgreen")
Matter.Engine.update(angryEngine);

rectMode(CENTER);
rect(ground.position.x,ground.position.y,480,20);

circle(ball.position.x,ball.position.y,50)
}