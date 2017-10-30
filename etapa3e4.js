var x = 100;
var y = 100;
var vidas = 7
var tamBloco=30


cenario = [ 
  ['v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v'],
  ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'], 
  ['#','v','v','v','v','v','v','#','v','#','v','v','v','v','v','#','#','#','#','#','#','#','#','#'],
  ['#','v','#','#','#','v','v','#','v','#','v','#','#','#','v','#','#','#','#','#','#','#','#','#'],
  ['#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#','#','#','#','#','#','#','#','#'],
  ['#','v','v','#','#','#','v','#','v','#','v','#','#','#','v','#','#','#','#','#','#','#','#','#'],
  ['#','#','v','#','v','v','v','#','v','#','v','v','v','#','v','#','#','#','#','#','#','#','#','#'],
  ['#','v','v','#','#','#','v','#','v','#','v','#','#','#','v','#','#','#','#','#','#','#','#','#'],
  ['#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#','#','#','#','#','#','#','#','#'],
  ['#','v','#','#','#','v','v','#','v','#','v','#','#','#','v','#','#','#','#','#','#','#','#','#'],
  ['#','v','v','v','v','v','v','#','v','#','v','v','v','v','v','#','#','#','#','#','#','#','#','#'],
  ['#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#','#','#','#','#','#','#','#','#'],
  ['#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#','#','#','#','#','#','#','#','#'],
  ['#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#','#','#','#','#','#','#','#','#'],
  ['#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#','#','#','#','#','#','#','#','#'],
  ['#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#','#','#','#','#','#','#','#','#'],
  ['#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#','#','#','#','#','#','#','#','#'],
  ['#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#','#','#','#','#','#','#','#','#'],
  ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#']
];

function setup() {
  createCanvas(721, 571); 
  posX = 0;
  posY = 200;
}

function draw() {
  background(255,192,203);
  if (posX < 640){
	posX = posX + 15;
  }else{
	posX = 0;
  }
  if (keyIsDown(LEFT_ARROW))
    x-=5;

  if (keyIsDown(RIGHT_ARROW))
    x+=5;

  if (keyIsDown(UP_ARROW))
    y-=5;

  if (keyIsDown(DOWN_ARROW))
    y+=5;
    
     fill(144,238,144)
  ellipse(posX, posY, 20, 20);
 fill(255,255,0)
  noStroke
  ellipse(x, y, 20, 20);
  
  

fill(34,139,34)
textSize(20)
text("Vidas: " +vidas, 10,20)
 for ( i = 0; i < cenario.length; i++ ) { 
    for ( j = 0; j < cenario[0].length; j++ ) {  
      if ( cenario[i][j] == '#' ) {
        
        fill(160,82,45);
        rect(j*tamBloco,i*tamBloco,tamBloco,tamBloco); 
      }
    }
  }

}