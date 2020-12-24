
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinko = [];
var division = [];
var divisionHeight = 300;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
    world = engine.world
    ground = new Ground(400,780,800,20);
for (var k = 0; k <=width; k = k+ 80) {
  division.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
}
for (var j = 75; j <=width; j = j + 50){
plinko.push(new Plinko(j,75));
}
for (var j = 50; j <=width-10; j=j+50){
  plinko.push(new Plinko(j,175));
}
for (var j = 35; j <=width-5; j=j+50){
  plinko.push(new Plinko(j,275));
}
for (var j = 10; j <=width-5; j=j+50){
  plinko.push(new Plinko(j,375));
}

}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,  width/2+10), 10,10));
  
  }
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  for (var k = 0; k < division.length; k++) {
    division[k].display();
  }
  for (var i = 0; i < plinko.length; i++) {
    plinko[i].display();
  }
  ground.display();  
}