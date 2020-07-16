var bullet1,bullet2,bullet3,bullet4,wall1,wall2,wall3,wall4;
var speed,speed2,speed3,speed4;
var deformation1,deformation2,deformation3,deformation4;
var thickness;

function setup() {
  createCanvas(1600, 400);
  speed=random(3,8);
  speed2=random(8,48);
  speed3=random(2,19);
  speed4=random(1,9);
  wall1=createSprite(1500,50,random(20,60),100);
  wall2=createSprite(1500,150,random(20,60),100);
  wall3=createSprite(1500,250,random(20,60),100);
  wall4=createSprite(1500,350,random(20,60),100);
  bullet1=createSprite(100,100,50,20);
  bullet2=createSprite(100,200,50,20);
  bullet3=createSprite(100,300,50,20);
  bullet4=createSprite(100,400,50,20);
  bullet1.velocityX=speed;
  bullet2.velocityX=speed2;
  bullet3.velocityX=speed3;
  bullet4.velocityX=speed4;
 deformation1=0.5*random(2,3)*bullet1.velocityX*bullet1.velocityX/random(20,60),random(20,60),random(20,60);
 deformation2=0.5*random(1,7)*bullet2.velocityX*bullet2.velocityX/random(20,60),random(20,60),random(20,60);
 deformation3=0.5*random(1,3)*bullet3.velocityX*bullet3.velocityX/random(20,60),random(20,60),random(20,60);
 deformation4=0.5*random(20,56)*bullet4.velocityX*bullet4.velocityX/random(20,60),random(20,60),random(20,60);
}

function draw(){
background("black")



if(collide(bullet1,wall1)){
//bullet1.velocityX=0
if(deformation1>10){
  wall1.shapeColor="red";
  text("THE BULLET IS SUPER EFFECTIVE",100,100);
}
if(deformation1<10){
  wall1.shapeColor="green";
  text("THE BULLET IS NOT EFFECTIVE",100,100);
}
wall1.visible=true
}

if(collide(bullet2,wall2)){
  //bullet2.velocityX=0
  if(deformation2>10){
    wall2.shapeColor="red";
    text("THE BULET IS SUPER EFFECTIVE",100,200);
  }
  if(deformation2<10){
    wall2.shapeColor="green";
    text("THE BULLET IS NOT EFFECTIVE",100,200);
  }

  wall2.visible=true;
  }

  if(collide(bullet3,wall3)){
    //car3.velocityX=0
    if(deformation3>10){
      wall3.shapeColor="red";
      text("THE BULLET IS SUPER EFFECTIVE",100,300);
    }
    if(deformation3<10){
      wall3.shapeColor="green";
      text("THE BULLET IS NOT EFFECTIVE",100,300);
    }
    
    wall3.visible=true;
    }

    if(collide(bullet4,wall4)){
      //car4.velocityX=0
      if(deformation4>10){
        wall4.shapeColor="red";
        text("THE BULLET IS EFFECTIVE",100,400)
      }
      if(deformation4<10){
        wall4.shapeColor="green";
        text("THE BULLET IS NOY EFFECTIVE",100,340);
      }
      
      wall4.visible=true;
      }



  drawSprites();
}



 










