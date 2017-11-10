var x = 45;
var y = 75;
var vidas = 7
var tamBloco=30
var pontos = 0;

cenario = [ 
  ['n','n','n','n','n','n','n','n','n','n','n','n','n','n','n','n','n','n','n','n','n','n','n','n'],
  ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'], 
  ['#','n','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#'],
  ['#','v','#','#','#','#','v','#','#','v','#','#','#','#','v','#','#','v','#','#','#','#','v','#'],
  ['#','v','#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#','v','#'],
  ['#','v','#','v','#','#','#','#','#','#','v','#','#','v','#','#','#','#','#','#','v','#','v','#'],
  ['#','v','v','v','v','v','v','#','v','v','v','v','v','v','v','v','#','v','v','v','v','v','v','#'],
  ['#','#','#','#','v','#','v','#','v','#','#','v','v','#','#','v','#','v','#','v','#','#','#','#'],
  ['#','v','v','v','v','#','v','v','v','#','v','v','v','v','#','v','v','v','#','v','v','v','v','#'],
  ['#','v','#','#','#','#','v','#','#','#','v','v','v','v','#','#','#','v','#','#','#','#','v','#'],
  ['#','v','v','v','v','#','v','v','v','#','v','v','v','v','#','v','v','v','#','v','v','v','v','#'],
  ['#','#','#','#','v','#','v','#','v','#','#','#','#','#','#','v','#','v','#','v','#','#','#','#'],
  ['#','v','v','v','v','v','v','#','v','v','v','v','v','v','v','v','#','v','v','v','v','v','v','#'],
  ['#','v','#','v','#','#','#','#','#','#','v','#','#','v','#','#','#','#','#','#','v','#','v','#'],
  ['#','v','#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#','v','#'],
  ['#','v','#','#','#','#','v','#','#','v','#','#','#','#','v','#','#','v','#','#','#','#','v','#'],
  ['#','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','#'],
  ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#']
];

function colisao(px, py) {
  posColuna = Math.floor( px / tamBloco ); 
  posLinha = Math.floor( py / tamBloco );
  if ( cenario[posLinha][posColuna] == '#' ) {
     return true;     
  }
  else {
     return false;  
  }
  
}
function colisao_bonus(px, py) {
  posColuna = Math.floor( px / tamBloco ); 
  posLinha = Math.floor( py / tamBloco );
  if ( cenario[posLinha][posColuna] == 'v' ) {
     cenario[posLinha][posColuna] = 'n'
	
	 return true;     
  }
  else {
     return false;  
  }
  
}


function setup() {
  createCanvas(721, 542); 
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

	/*colisao blocos*/
    if (keyIsDown(LEFT_ARROW)) {
     if ( ! colisao( x - 10 - tamBloco/2, y ) ) {
       x = x - 10;       
     }
   }
   if ( keyIsDown(RIGHT_ARROW)) { 
     if ( ! colisao( x + 20, y ) ) {
       x = x + 10;       
     } 
   }

  if (keyIsDown(UP_ARROW)){
     if ( ! colisao( x, y - 10 - tamBloco/2 ) ) {
       y = y - 10;       
     }
   }

  if (keyIsDown(DOWN_ARROW)){ 
  
     if ( ! colisao( x, y + 20 ) ) {
       y = y + 10;       
     } 
   }

 

	/*colisao bonus*/
	
 if (keyIsDown(LEFT_ARROW)) {
     if (  colisao_bonus( x - 10 - tamBloco/2, y ) ) {
       x = x - 10;
	pontos++;       
     }
   }
   if ( keyIsDown(RIGHT_ARROW)) { 
     if (  colisao_bonus( x + 20, y ) ) {
       x = x + 10; 
		pontos++;             
     } 
   }

  if (keyIsDown(UP_ARROW)){
     if (  colisao_bonus( x, y - 10 - tamBloco/2 ) ) {
       y = y - 10; 
		pontos++;             
     }
   }

  if (keyIsDown(DOWN_ARROW)){ 
  
     if (  colisao_bonus( x, y + 20 ) ) {
       y = y + 10;  
	pontos++;            
     } 
   }


   
     
     fill(144,238,144)
  ellipse(posX, posY, 20, 20);
 fill(255,255,0)
  noStroke
  ellipse(x, y, 20, 20);
  

fill(34,139,34)
textSize(20)
text("Vidas: " +vidas, 10,20)
text("Pontos: " + pontos, 350,20)
 for ( i = 0; i < cenario.length; i++ ) { 
    for ( j = 0; j < cenario[0].length; j++ ) {  
      if ( cenario[i][j] == '#' ) {
        
        fill(160,82,45);
        rect(j*tamBloco,i*tamBloco,tamBloco,tamBloco); 
        
      }
     if ( cenario[i][j] == 'v' ) {
        
        fill(255);
        	ellipse(j*tamBloco+tamBloco/2,i*tamBloco+tamBloco/2,5,5); 
        
      }
    }
  }

}
