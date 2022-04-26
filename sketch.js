var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var ob1,ob2,ob3,ob4,ob5,ob6
var cloud;
var obstacle;
var score;
var ogroup;
var cgroup,zgroup;
var PLAY=1;
var END=0;
var gamestate=PLAY;
var go,restart;
var gameover,re;
var backgd;
var man;
var zoombie;
var man_die;
var brick;
var coin;
var c;
var i1;
var i2;
var i3;
var score=0;
var zoo,diamond,tijori,s=0;
var p;

function start()
{
 
  
 
  button= createButton('PLAY')
  input=createInput("NAME")
  button.position(460,400)
  input.position(450,300)
  button.class("customButton")
  input.class("customInput")
  button.mousePressed(()=>{
    button.hide()
    input.hide()
    s=1
  })
  

}


function preload()
{
backgd=loadImage("bg2.jpg")
firstpage=loadImage("img4.png")
  man = loadAnimation("j1.png","j2.png","j3.png","j4.png","j5.png","j6.png");
  man_die = loadAnimation("d4.png")
  Clouds=loadImage('cloud.png');
  zoombie=loadAnimation("z1.png","z2.png","z3.png","z4.png","z5.png","z6.png","z7.png")
  groundImage = loadImage("ground2.png");
  ob1=loadImage("obstacle1.png") 
  ob2=loadImage("obstacle2.png")
  ob3=loadImage("obstacle3.png")
  ob4=loadImage("obstacle4.png")
  ob5=loadImage("obstacle5.png")
  ob6=loadImage("obstacle6.png")
  go=loadImage("gameOver.png")
  restart=loadImage("restart.png")
  brick=loadImage("brick.png")
  coin=loadImage("goldCoin.png")
  man_left=loadAnimation("left1.png","left2.png","left3.png","left4.png","left5.png","left6.png","left7.png")
  z2=loadAnimation("z1-0.png","z1-6.png","z1-13.png","z1-16.png")
  diamond=loadImage("diamond.png")
  tijori=loadAnimation("c0.png","c1.png","c2.png","c3.png","c4.png")
  start()
  gameover=loadSound("Game-over.mp3")
  jump=loadSound("jump.wav")

  monkey=loadSound("Monkeys-Spinning-Monkeys.mp3")
}
function setup()
 {

  createCanvas(1200,800)
 
 
  //create a trex sprite
  trex = createSprite(50,730,20,50);
  trex.addAnimation("running", man);
  trex.addAnimation("collided", man_die);
  trex.addAnimation("left",man_left)
  trex.addAnimation("chest",tijori)
  trex.scale = 0.5;
  trex.debug=true;
  trex.setCollider("rectangle",0,0,40,40)
  //create a ground sprite
  ground = createSprite(200,750,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;

  diame=createSprite(250,50,10,10);
  diame.addImage(diamond)
  diame.scale=0.06

  bricks(65)
  bricks(65+29)
  bricks(65+29+29)

  bricks1(65)
  bricks1(65+29)
  bricks1(65+29+29)

  bricks2(65)
  bricks2(65+29)
  bricks2(65+29+29)
  
  
  coi0=createSprite(700,450,20,30);
  coi0.addImage(coin)
  coi0.scale=0.07
 
  coi1=createSprite(750,450,20,30);
  coi1.addImage(coin)
  coi1.scale=0.07
  
  coi2=createSprite(800,450,20,30);
  coi2.addImage(coin)
  coi2.scale=0.07 

  coi3=createSprite(850,450,20,30);
  coi3.addImage(coin)
  coi3.scale=0.07

  coi4=createSprite(900,450,20,30);
  coi4.addImage(coin)
  coi4.scale=0.07
   
  coi5=createSprite(950,450,20,30);
  coi5.addImage(coin)
  coi5.scale=0.07
  
  coi6=createSprite(1000,450,20,30);
  coi6.addImage(coin)
  coi6.scale=0.07

  coi7=createSprite(1050,450,20,30);
  coi7.addImage(coin)
  coi7.scale=0.07

  coi8=createSprite(1100,450,20,30);
  coi8.addImage(coin)
  coi8.scale=0.07

  coi9=createSprite(1150,450,20,30);
  coi9.addImage(coin)
  coi9.scale=0.07

 step2()
 step3()


  //creating invisible ground
  invisibleGround = createSprite(200,750,400,10);
  invisibleGround.visible = false;

  i1 = createSprite(960,500,550,10);
  i1.visible = false;

  i2 = createSprite(300,300,570,10);
  i2.visible = false;

  i3 = createSprite(970,100,570,10);
  i3.visible = false;
  
  gameover=createSprite(300,100)
  gameover.addImage(go)
  re=createSprite(300,150)
  re.addImage(restart)
  re.scale=0.5
  gameover.visible=false;
  re.visible=false;
  //generate random numbers
  var rand =  Math.round(random(1,100))
  console.log(rand)

  ogroup= new Group();
  cgroup= new Group();
  zgroup= new Group();
  textSize(30);
  
  
 }
 
 function draw() 
{
  if(s===0)
  {
    background(firstpage)
  }
  else
  {
    play()
  }
  
      
  
} 

function play()
{
  background(backgd);
  
   console.log(trex.y)
   
   if(gamestate===PLAY)
   {
     if(keyDown("space")&& trex.y >= 100) {
       trex.velocityY = -10;
     }
     
     trex.velocityY = trex.velocityY + 0.8
 
   if (ground.x < 0){
       ground.x = ground.width/2;
     }
  if(trex.isTouching(diame))
  {
    diame.remove()
    score=score+100
  }
     
   if(keyDown("up"))
   {
     trex.y=trex.y-3

        }
   if(keyDown("left"))
   {
     trex.x=trex.x-3
     trex.changeAnimation("left",man_left)
   }
   if(keyDown("right"))
   {
     trex.x=trex.x+3
     trex.changeAnimation("running", man)
   }
   spawnzoo()
   
   step1_coin()
   step2_coin()
   step3_coin()
   //Spawn Clouds
     spawnClouds()
     spawnObstacle()
     
 
   if(ogroup.isTouching(trex))
       gamestate=END
 
     }
     if(zgroup.isTouching(trex))
     {
       gamestate=END
     }
     if(score>=100)
     {
       trex.x=600
       trex.y=400           
       trex.changeAnimation("chest",tijori)
 
     }
   else if(gamestate===END)
   {
       ground.velocityX=0;
       trex.velocityX=0;
       trex.changeAnimation("collided", man_die);
       gameover.visible=true;
       re.visible=true;
       ogroup.setVelocityXEach(0);
       cgroup.setVelocityXEach(0);
       ogroup.destroyEach();
       ogroup.setLifetimeEach(-1);
       cgroup.setLifetimeEach(-1);
       gameOver()
       window.location.reload();
 
   }
   //stop trex from falling down
   trex.collide(invisibleGround);
   trex.collide(i1)
   trex.collide(i2)
   trex.collide(i3)
   
   drawSprites();
   text("Score:"+score,50,50)
  
}
  


//function to spawn the clouds
function spawnClouds()
{
 // write your code here
if(frameCount%60===0)
{
 cloud=createSprite(600,100,40,10)
 cloud.velocityX=-5;
 cloud.addImage(Clouds)
 cloud.y=Math.round(random(10,120))
 cloud.scale=0.5
 cloud.lifetime=120
 cloud.depth=trex.depth
 trex.depth=trex.depth+1
 cgroup.add(cloud)
}
}

function spawnObstacle()
{
  if(frameCount%120===0)
  {
    obstacle=createSprite(1200,730,10,40)
    obstacle.velocityX=-4
    obstacle.addAnimation("zoombie",zoombie)
    obstacle.scale=0.2
    obstacle.lifetime=650
    obstacle.depth=trex.depth
    trex.depth=trex.depth+1
    ogroup.add(obstacle)

  }
 
}

function gameOver()
 {
  swal({
    title: `Game Over`,
    text: "Oops you lost the Game....!!!",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
    imageSize: "100x100",
    confirmButtonText: "Thanks For Playing"
  })

}

function bricks(y)
{
  for(var i=0;i<20;i++)
  {
    bri=createSprite(20+29*i,300+29,20,20);
    bri.addImage(brick)
    bri.scale=0.1

    
  }
}

function bricks1(y)
{
  for(var i=0;i<20;i++)
  {
    bri=createSprite(700+29*i,500+29,20,20);
    bri.addImage(brick)
    bri.scale=0.1

    
    
  }
 
  
}

function step2()
{
 
  coi10=createSprite(50,250,20,30);
  coi10.addImage(coin)
  coi10.scale=0.07
 
  coi11=createSprite(100,250,20,30);
  coi11.addImage(coin)
  coi11.scale=0.07
  
  coi12=createSprite(150,250,20,30);
  coi12.addImage(coin)
  coi12.scale=0.07 

  coi13=createSprite(200,250,20,30);
  coi13.addImage(coin)
  coi13.scale=0.07

  coi14=createSprite(250,250,20,30);
  coi14.addImage(coin)
  coi14.scale=0.07
   
  coi15=createSprite(300,250,20,30);
  coi15.addImage(coin)
  coi15.scale=0.07
  
  coi16=createSprite(350,250,20,30);
  coi16.addImage(coin)
  coi16.scale=0.07

  coi17=createSprite(400,250,20,30);
  coi17.addImage(coin)
  coi17.scale=0.07

  coi18=createSprite(450,250,20,30);
  coi18.addImage(coin)
  coi18.scale=0.07

  coi19=createSprite(500,250,20,30);
  coi19.addImage(coin)
  coi19.scale=0.07

}
function step3()
{
 
  coi20=createSprite(700,50,20,30);
  coi20.addImage(coin)
  coi20.scale=0.07
 
  coi21=createSprite(750,50,20,30);
  coi21.addImage(coin)
  coi21.scale=0.07
  
  coi22=createSprite(800,50,20,30);
  coi22.addImage(coin)
  coi22.scale=0.07 

  coi23=createSprite(850,50,20,30);
  coi23.addImage(coin)
  coi23.scale=0.07

  coi24=createSprite(900,50,20,30);
  coi24.addImage(coin)
  coi24.scale=0.07
   
  coi25=createSprite(950,50,20,30);
  coi25.addImage(coin)
  coi25.scale=0.07
  
  coi26=createSprite(1000,50,20,30);
  coi26.addImage(coin)
  coi26.scale=0.07

  coi27=createSprite(1050,50,20,30);
  coi27.addImage(coin)
  coi27.scale=0.07

  coi28=createSprite(1100,50,20,30);
  coi28.addImage(coin)
  coi28.scale=0.07

  coi29=createSprite(1150,50,20,30);
  coi29.addImage(coin)
  coi29.scale=0.07

}
function step2_coin()
{
  if(trex.isTouching(coi10))
  {
    coi10.remove()
    score=score+5
  }
  
  if(trex.isTouching(coi11))
  {
    coi11.remove()
    score=score+5
  }
   
  if(trex.isTouching(coi12))
  {
    coi12.remove()
    score=score+5
  }
  
  if(trex.isTouching(coi13))
  {
    coi13.remove()
    score=score+5
  }

  if(trex.isTouching(coi14))
  {
    coi14.remove()
    score=score+5
  }

  if(trex.isTouching(coi15))
  {
    coi15.remove()
    score=score+5
  }

  if(trex.isTouching(coi16))
  {
    coi16.remove()
    score=score+5
  }
  if(trex.isTouching(coi17))
  {
    coi17.remove()
    score=score+5
  }
  if(trex.isTouching(coi18))
  {
    coi18.remove()
    score=score+5
  }
  if(trex.isTouching(coi19))
  {
    coi19.remove()
    score=score+5
  }
}
function step1_coin()
{
  if(trex.isTouching(coi0))
  {
    coi0.remove()
    score=score+5
  }
  
  if(trex.isTouching(coi1))
  {
    coi1.remove()
    score=score+5
  }
   
  if(trex.isTouching(coi2))
  {
    coi2.remove()
    score=score+5
  }
  
  if(trex.isTouching(coi3))
  {
    coi3.remove()
    score=score+5
  }

  if(trex.isTouching(coi4))
  {
    coi4.remove()
    score=score+5
  }

  if(trex.isTouching(coi5))
  {
    coi5.remove()
    score=score+5
  }

  if(trex.isTouching(coi6))
  {
    coi6.remove()
    score=score+5
  }
  if(trex.isTouching(coi7))
  {
    coi7.remove()
    score=score+5
  }
  if(trex.isTouching(coi8))
  {
    coi8.remove()
    score=score+5
  }
  if(trex.isTouching(coi9))
  {
    coi9.remove()
    score=score+5
  }
}
function step3_coin()
{
  if(trex.isTouching(coi20))
  {
    coi20.remove()
    score=score+5
  }
  
  if(trex.isTouching(coi21))
  {
    coi21.remove()
    score=score+5
  }
   
  if(trex.isTouching(coi22))
  {
    coi22.remove()
    score=score+5
  }
  
  if(trex.isTouching(coi23))
  {
    coi23.remove()
    score=score+5
  }

  if(trex.isTouching(coi24))
  {
    coi24.remove()
    score=score+5
  }

  if(trex.isTouching(coi25))
  {
    coi25.remove()
    score=score+5
  }

  if(trex.isTouching(coi26))
  {
    coi26.remove()
    score=score+5
  }
  if(trex.isTouching(coi27))
  {
    coi27.remove()
    score=score+5
  }
  if(trex.isTouching(coi28))
  {
    coi28.remove()
    score=score+5
  }
  if(trex.isTouching(coi29))
  {
    coi29.remove()
    score=score+5
  }
}
function bricks2(y)
{
  for(var i=0;i<20;i++)
  {
    bri=createSprite(700+29*i,100+29,20,20);
    bri.addImage(brick)
    bri.scale=0.1

    
  }
}

function spawnzoo()
{
 // write your code here
if(frameCount%50===0)
{
 zoo=createSprite(50,290,40,10)
 zoo.velocityX=5;
 zoo.addAnimation("zoombie",z2)
 
 zoo.scale=0.3
 zoo.lifetime=100
 zoo.depth=trex.depth
 trex.depth=trex.depth+1
 zgroup.add(zoo)
}
}

