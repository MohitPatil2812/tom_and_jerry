var mousesprite, mouseimage1, mouseimage2, mouseimage3, mouseimage4, mouse_teasing
var catsprite, catimage, cat_running, cathappy
var backgroundsprite, backgroundimage


function preload() {
    backgroundimage=loadImage("images/garden.png")
    mouseimage2=loadAnimation("images/mouse2.png")
    catimage=loadAnimation("images/cat1.png")
    cat_running = loadAnimation("images/cat2.png","images/cat3.png")
    mouse_teasing = loadAnimation("images/mouse2.png", "images/mouse3.png")
    mouseimage1 = loadAnimation("images/mouse1.png")
    cathappy = loadAnimation("images/cat4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mousesprite = createSprite(100,670,10,10)
    mousesprite.addAnimation("stoped",mouseimage2)
    mousesprite.scale=0.1

    catsprite = createSprite(800,670,10,10)
    catsprite.addAnimation("stand",catimage)
    catsprite.scale=0.2
}

function draw() {

    background(backgroundimage);
    //Write condition here to evalute if tom and jerry collide
    if(catsprite.x-mousesprite.x<catsprite.width/2+mousesprite.width/2
        &&mousesprite.x-catsprite.x<catsprite.width/2+mousesprite.width/2
        &&catsprite.y-mousesprite.y<catsprite.height/2+mousesprite.height/2
        &&mousesprite.y-catsprite.y<catsprite.height/2+mousesprite.height/2){
        catsprite.velocityX=0 
        
        
        catsprite.addAnimation("happy",cathappy)        
        catsprite.changeAnimation("happy");
        
        mousesprite.addAnimation("hap",mouseimage1)
        mousesprite.changeAnimation("hap");       
          }
          else{
         mousesprite.addAnimation("stoped",mouseimage2)
    mousesprite.scale=0.1  
    catsprite.addAnimation("stand",catimage)
    catsprite.scale=0.2
          }
    
    drawSprites();
}


function keyPressed(){
    if(keyCode===LEFT_ARROW){
        catsprite.velocityX=-5
        catsprite.addAnimation("walking",cat_running)        
        catsprite.changeAnimation("walking");
        
        mousesprite.addAnimation("teasing",mouse_teasing)
        mousesprite.changeAnimation("teasing");
    }

  //For moving and changing animation write code here


}
