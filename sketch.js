const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
const Constraint = Matter.Constraint;

var ballImg, ball, chain, scene, btn, ground, connect;
var brick1, brick2, brick3, brick4, brick5, brick6, brick7, brick8, brick9, brick10, brick11, brick12, brick13, brick14, brick15, brick16;
var airBlower;

function preload() {
  ballImg = loadImage("assets/ball.png");
  scene = loadImage("assets/background.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width / 2, height / 2 + 480, width, 10);

  chain = new Chain(11, {
    x: width / 2 - 300,
    y: height / 2 - 450
  })

  ball = Bodies.circle(width / 2 - 300, height / 2 - 400, 35, 35);
  World.add(world, ball);

  connect = new Link(chain, ball);
  Composite.add(ball, chain);

  brick1 = new Brick(width / 2, height / 2 + 450, 100, 50);
  brick2 = new Brick(width / 2 + 100, height / 2 + 450, 100, 50);
  brick3 = new Brick(width / 2 + 200, height / 2 + 450, 100, 50);
  brick4 = new Brick(width / 2 + 300, height / 2 + 450, 100, 50);

  brick5 = new Brick(width / 2, height / 2 + 400, 100, 50);
  brick6 = new Brick(width / 2 + 100, height / 2 + 400, 100, 50);
  brick7 = new Brick(width / 2 + 200, height / 2 + 400, 100, 50);
  brick8 = new Brick(width / 2 + 300, height / 2 + 400, 100, 50);

  brick9 = new Brick(width / 2, height / 2 + 350, 100, 50);
  brick10 = new Brick(width / 2 + 100, height / 2 + 350, 100, 50);
  brick11 = new Brick(width / 2 + 200, height / 2 + 350, 100, 50);
  brick12 = new Brick(width / 2 + 300, height / 2 + 350, 100, 50);

  brick13 = new Brick(width / 2, height / 2 + 300, 100, 50);
  brick14 = new Brick(width / 2 + 100, height / 2 + 300, 100, 50);
  brick15 = new Brick(width / 2 + 200, height / 2 + 300, 100, 50);
  brick16 = new Brick(width / 2 + 300, height / 2 + 300, 100, 50);

  brick17 = new Brick(width / 2, height / 2 + 250, 100, 50);
  brick18 = new Brick(width / 2 + 100, height / 2 + 250, 100, 50);
  brick19 = new Brick(width / 2 + 200, height / 2 + 250, 100, 50);
  brick20 = new Brick(width / 2 + 300, height / 2 + 250, 100, 50);

  brick21 = new Brick(width / 2, height / 2 + 200, 100, 50);
  brick22 = new Brick(width / 2 + 100, height / 2 + 200, 100, 50);
  brick23 = new Brick(width / 2 + 200, height / 2 + 200, 100, 50);
  brick24 = new Brick(width / 2 + 300, height / 2 + 200, 100, 50);

  brick25 = new Brick(width / 2, height / 2 + 150, 100, 50);
  brick26 = new Brick(width / 2 + 100, height / 2 + 150, 100, 50);
  brick27 = new Brick(width / 2 + 200, height / 2 + 150, 100, 50);
  brick28 = new Brick(width / 2 + 300, height / 2 + 150, 100, 50);

  brick29 = new Brick(width / 2, height / 2 + 100, 100, 50);
  brick30 = new Brick(width / 2 + 100, height / 2 + 100, 100, 50);
  brick31 = new Brick(width / 2 + 200, height / 2 + 100, 100, 50);
  brick32 = new Brick(width / 2 + 300, height / 2 + 100, 100, 50);

  brick33 = new Brick(width / 2, height / 2 + 50, 100, 50);
  brick34 = new Brick(width / 2 + 100, height / 2 + 50, 100, 50);
  brick35 = new Brick(width / 2 + 200, height / 2 + 50, 100, 50);
  brick36 = new Brick(width / 2 + 300, height / 2 + 50, 100, 50);

  brick37 = new Brick(width / 2, height / 2, 100, 50);
  brick38 = new Brick(width / 2 + 100, height / 2, 100, 50);
  brick39 = new Brick(width / 2 + 200, height / 2, 100, 50);
  brick40 = new Brick(width / 2 + 300, height / 2, 100, 50);

  brick41 = new Brick(width / 2, height / 2 - 50, 100, 50);
  brick42 = new Brick(width / 2 + 100, height / 2 - 50, 100, 50);
  brick43 = new Brick(width / 2 + 200, height / 2 - 50, 100, 50);
  brick44 = new Brick(width / 2 + 300, height / 2 - 50, 100, 50);

  brick45 = new Brick(width / 2, height / 2 - 100, 100, 50);
  brick46 = new Brick(width / 2 + 100, height / 2 - 100, 100, 50);
  brick47 = new Brick(width / 2 + 200, height / 2 - 100, 100, 50);
  brick48 = new Brick(width / 2 + 300, height / 2 - 100, 100, 50);

  airBlower = createImg("assets/balloon.png");
  airBlower.position(width / 2 - 900, height / 2 - 20);
  airBlower.size(80, 80);
  airBlower.mouseClicked(blow);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  background(scene);
  Engine.update(engine);

  push();
  imageMode(CENTER);
  image(ballImg, ball.position.x, ball.position.y, 90, 90);
  pop();

  chain.show();

  brick1.display();
  brick2.display();
  brick3.display();
  brick4.display();

  brick5.display();
  brick6.display();
  brick7.display();
  brick8.display();

  brick9.display();
  brick10.display();
  brick11.display();
  brick12.display();

  brick13.display();
  brick14.display();
  brick15.display();
  brick16.display();

  brick17.display();
  brick18.display();
  brick19.display();
  brick20.display();

  brick21.display();
  brick22.display();
  brick23.display();
  brick24.display();

  brick25.display();
  brick26.display();
  brick27.display();
  brick28.display();

  brick29.display();
  brick30.display();
  brick31.display();
  brick32.display();

  brick33.display();
  brick34.display();
  brick35.display();
  brick36.display();

  brick37.display();
  brick38.display();
  brick39.display();
  brick40.display();

  brick41.display();
  brick42.display();
  brick43.display();
  brick44.display();

  brick45.display();
  brick46.display();
  brick47.display();
  brick48.display();

  drawSprites();
}

function blow() {
  Matter.Body.applyForce(ball, {
    x: 0,
    y: 0
  }, {
    x: 0.02 ,
    y: 0
  })
}