const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy;
var maxDrops=100;
var drops;
var currunt1,currunt2;
        
function preload(){
   
    boy=loadImage("Walking Frame/walking_1.png");
    currunt1=loadImage("thunderbolt/1.png");
    currunt2=loadImage("thunderbolt/2.png");
}

function setup(){
 createCanvas(800,800);

 rain=createSprite(50,0);

 drops=new Drops();
}

function draw(){
    background("black");  

    image(boy,300,300,200,500);
    image(currunt1,400,0,400,300);
    image(currunt2,100,0,400,300);
    
    
    //drop.display();
   // rain.display();
  //switchcase.display();
    
      for (var j = 0; j < rain.length; j++) {   
        rain[j].display();
      }

      //if(this.rain.position){
         // Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
     //    }

     if(frameCount){

     }
}   

function push(){
    if(frameCount%60===0){
        maxDrops.push(new Drops(random(width/2-30, width/2+30), 10,10));
        
      }

}

