const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1= new Box(600, 100, 50, 50);
  box2= new Box(600, 200,50, 50);
  box3= new Box(600, 300, 50, 50);
  box4= new Box(600, 400, 50, 50);
  box5= new Box(600, 500, 50, 50);
  box6= new Box(600, 70, 50, 50);
  box7= new Box(600, 70, 50, 50);

  box8= new Box(700, 100, 50, 50);
  box9= new Box(700, 200, 50, 50);
  box10= new Box(700,300, 50, 50);
  box11= new Box(700, 400, 50, 50);
  box12= new Box(700, 500, 50, 50);
  box13= new Box(700, 70, 50, 50);

  box14= new Box(800, 100, 50, 50);
  box15= new Box(800, 200, 50, 50);
  box16= new Box(800, 300, 50, 50);
  box17= new Box(800, 400, 50, 50);
  box18= new Box(800, 500, 50, 50);
  box19= new Box(800, 70, 50, 50);
  box20= new Box(800, 70, 50, 50);
  box21= new Box(800, 70, 50, 50);

  box22= new Box(900, 100, 50, 50);
  box23= new Box(900, 200, 50, 50);
  box24= new Box(900, 300, 50, 50);
  box25= new Box(900, 400, 50, 50);
  box26= new Box(900, 500, 50, 50);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();

  hero.display();
  rope.display();
  monster.display();

 
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}
