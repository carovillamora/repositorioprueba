var aliensclaseelite,aliensdeexploracion,reyalien,reayaliendisparando,reyalientocino,rateros,guardiarobot,guardiarobotrip,aliensclaseelitecaminando;
var peppa, humano;

function preload(){
  aliensclaseelite=loadImage("alien.02.gif");
  aliensdeexploracion=loadImage("alien.gif");
  reyalien=loadImage("rey alien passivo.gif");
  reayaliendisparando=loadImage("rey alien.gif");
  reyalientocino=loadImage("rey alien muerte.gif");
  rateros=loadImage("soldado aliado de los aliens.gif");
  guardiarobot=loadImage("guardia del alien.3.gif");
  guardiarobotrip=loadImage("guardia del alien.3.derrotado.webp");
  aliensclaseelitecaminando=loadImage("alien.02.caminando.gif");
  peppa=loadImage("soldado.gif");
}

function setup() {
  createCanvas(1200, 400);

  humano = createSprite(50,310,50,50)
  humano.addImage(peppa);
  humano.scale = 0.2;
  
}

function draw() {
  background("purple");
  
  aliensclaselite();

  drawSprites();
}

function aliensclaselite(){
  if (frameCount % 100 === 0) {
    var ace = createSprite(1200,300,50,50);
    ace.y = Math.round(random(290,350));
    ace.addImage(aliensclaseelite);
    ace.scale = 0.4;
    ace.velocityX = -3;
    
    ace.lifetime = 410;
    
  }
}