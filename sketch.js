var bg, bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;

var zombieGroup;
var gamestate = 1
var t1, t2, t3;
var track1pic, track2, track3;
var score = 0;
var river, fish, stone1, stone2, stone3;
var arrow1, arrow2, arrow3, lives = 3;
function preload() {

  heart1Img = loadImage("assets/heart_1.png")
  heart2Img = loadImage("assets/heart_2.png")
  heart3Img = loadImage("assets/heart_3.png")

  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  zombieImg = loadImage("assets/zombie.png")

  bgImg = loadImage("assets/bg.jpeg")

  backgroundImage = loadImage("./assets1/background.png");
  car1_img = loadImage("../assets1/car1.png");
  car2_img = loadImage("../assets1/car2.png");
  track = loadImage("../pics/track.png");
  track1 = loadImage("../assets1/track.jpg");
  fuelImage = loadImage("./assets1/fuel.png");
  powerCoinImage = loadImage("./assets1/goldCoin.png");
  obstacle1Image = loadImage("./assets1/obstacle1.png");
  obstacle2Image = loadImage("./assets1/obstacle2.png");
  lifeImage = loadImage("./assets1/life.png");
  blastimage = loadImage("./assets1/blast.png")
  fbg = loadImage("../pics/footpath.jpg");
  train = loadImage("../pics/train.png");
  riverimg = loadImage("../pics/river.png");
  fishImg = loadImage("./assets1/fish.png");
  stoneImg = loadImage("../pics/stone.png");
  arrowImg = loadImage("../pics/arrow.png");

}

function setup() {


  createCanvas(windowWidth, windowHeight);

  //adding the background image
  bg = createSprite(width / 2, -height * 4, width, height * 6)
  bg.addImage(track1)
  bg.scale = 1.1

  score = 0

  track3pic = createSprite(width / 2, -1500)
  track3pic.addImage(track)
  track3pic.scale = 2;
  t3 = createSprite(0, -1500);
  t3.addImage(train)
  track2pic = createSprite(width / 2, -1200)
  track2pic.addImage(track)
  track2pic.scale = 2;
  t2 = createSprite(width - 100, -1200)
  t2.mirrorX(-1)
  t2.addImage(train)

  track1pic = createSprite(width / 2, -900)
  track1pic.addImage(track)
  track1pic.scale = 2
  t1 = createSprite(0, -900);
  t1.addImage(train)
  t1.debug = true
  t2.debug = true
  t3.debug = true
  t1.setCollider("rectangle", 0, 0, 400, 100)
  t2.setCollider("rectangle", 0, 0, 400, 100)
  t3.setCollider("rectangle", 0, 0, 400, 100)

  river = createSprite(width / 2, -2500)
  river.addImage(riverimg);
  river.scale = 2.5;
  river2 = createSprite(width / 2, -2700)
  river2.addImage(riverimg);
  river2.scale = 2.5;

  stone1 = createSprite(1120, -3300);
  stone1.addImage(stoneImg);
  stone1.scale = 0.7;
  stone2 = createSprite(340, -3460);
  stone2.addImage(stoneImg);
  stone2.scale = 0.7;
  stone3 = createSprite(1120, -3620);
  stone3.addImage(stoneImg);
  stone3.scale = 0.7;
  stone1.debug = true
  stone2.debug = true
  stone3.debug = true
fish.debug
  arrow1 = createSprite(width - 100, -4000);
  arrow1.addImage(arrowImg);
  arrow1.scale = 0.4;
  arrow2 = createSprite(0, -4150);
  arrow2.mirrorX(-1)
  arrow2.addImage(arrowImg);
  arrow2.scale = 0.4;
  arrow3 = createSprite(width - 100, -4300);
  arrow3.addImage(arrowImg);
  arrow3.scale = 0.4;
  arrow1.debug = true


  //creating the player sprite
  player = createSprite(width / 2, displayHeight - 300, 50, 50);
  player.addImage(car1_img)
  player.scale = 0.1
  player.debug = true
  player.setCollider("rectangle", 0, 0, 600, 1200)


  //creating sprites to depict lives remaining
  heart1 = createSprite(player.x - 150, player.y - 100, 20, 20)
  heart1.visible = false
  heart1.addImage("heart1", heart1Img)
  heart1.scale = 0.4

  heart2 = createSprite(player.x - 100, player.y - 100, 20, 20)
  heart2.visible = false
  heart2.addImage("heart2", heart2Img)
  heart2.scale = 0.4

  heart3 = createSprite(player.x - 150, player.y - 100, 20, 20)
  heart3.addImage("heart3", heart3Img)
  heart3.scale = 0.4




  //creating group for zombies    
  zombieGroup = new Group();
  coinGroup = new Group();
  fishGroup = new Group();
  trainGroup = new Group();
  trainGroup.add(t1)
  trainGroup.add(t2)
  trainGroup.add(t3)
  stoneGroup = new Group();
  stoneGroup.add(stone1)
  stoneGroup.add(stone2)
  stoneGroup.add(stone3)
  stoneGroup.setColliderEach("circle", 0, 0, 100);
  arrowGroup = new Group();
  arrowGroup.add(arrow1)
  arrowGroup.add(arrow2)
  arrowGroup.add(arrow3)
  arrowGroup.setColliderEach("rectangle", 0, 30, 500, 70);

}


function draw() {
  background(0);

  if (gamestate === 1) {
    heart1.x = player.x - 150
    heart1.y = player.y - 100
    heart2.x = player.x - 150
    heart2.y = player.y - 100
    heart3.x = player.x - 150
    heart3.y = player.y - 100

    camera.position.y = player.position.y;

    console.log("Y=" + player.y);
    console.log("X=" + player.x);

    if (player.y > -650) {
      t1.velocityX = 5;
      t2.velocityX = -5.5;
      t3.velocityX = 6;

    }

    if (t3.x > width + 200) {
      t3.x = -200;
    }

    if (t2.x < -200) {
      t2.x = width + 200;
    }

    if (t1.x > width + 200) {
      t1.x = -200
    }

    if (player.y > 600) {
      player.y = 600
    }


    if (player.y > -3520) {
      stone1.velocityX = -12;
      stone2.velocityX = 12;
      stone3.velocityX = -12;
    }

    if (stone1.x < -200) {
      stone1.x = width - 450;
    }

    if (stone2.x > width + 200) {
      stone2.x = 340 + 80;
    }

    if (stone3.x < -200) {
      stone3.x = width - 450;
    }


    if (player.y > -4050) {
      arrow1.velocityX = -13;
      arrow2.velocityX = 13;
      arrow3.velocityX = -13;
    }

    if (arrow1.x < -200) {
      arrow1.x = width + 200;
    }

    if (arrow2.x > width + 200) {
      arrow2.x = -200;
    }

    if (arrow3.x < -200) {
      arrow3.x = width + 200;
    }

    coins();
    fishesR();
    fishesL();
    //moving the player up and down and making the game mobile compatible using touches
    if (keyDown("UP_ARROW")) {
      player.y = player.y - 30
    }
    if (keyDown("DOWN_ARROW")) {
      player.y = player.y + 30
    }
    if (keyDown("LEFT_ARROW")) {
      player.x = player.x - 30
    }
    if (keyDown("RIGHT_ARROW")) {
      player.x = player.x + 30
    }



    //release bullets and change the image of shooter to shooting position when space is pressed
    if (keyWentDown("space")) {

      player.addImage(car2_img)


    }

    //player goes back to original standing image once we stop pressing the space bar
    else if (keyWentUp("space")) {
      player.addImage(car1_img)
    }


    //destroy zombie when player touches it
    if (coinGroup.isTouching(player)) {


      for (var i = 0; i < coinGroup.length; i++) {

        if (coinGroup[i].isTouching(player)) {
          coinGroup[i].destroy();
          score = score + 1;
          console.log("points" + score);
        }
      }
    }

    if (trainGroup.isTouching(player)) {

      for (var i = 0; i < trainGroup.length; i++) {

        if (trainGroup[i].isTouching(player)) {
          trainGroup[i].destroy();
          lives = lives - 1;
          // heart1.destroy();
        }

      }

    }

    if (stoneGroup.isTouching(player)) {

      for (var i = 0; i < stoneGroup.length; i++) {

        if (stoneGroup[i].isTouching(player)) {
          stoneGroup[i].destroy();
          lives = lives - 1;
          // heart1.destroy();
        }

      }

    }
    if (arrowGroup.isTouching(player)) {

      for (var i = 0; i < arrowGroup.length; i++) {

        if (arrowGroup[i].isTouching(player)) {
          arrowGroup[i].destroy();
          lives = lives - 1;
          // heart1.destroy();
        }

      }

    }
    if (fishGroup.isTouching(player)) {

      for (var i = 0; i < fishGroup.length; i++) {

        if (fishGroup[i].isTouching(player)) {
          fishGroup[i].destroy();
          lives = lives - 1;
          // heart1.destroy();
        }

      }

    }
    //calling the function to spawn zombies
    //enemy();
    if (lives <= 0) {
      gamestate = 2

    }

    drawSprites();

  }
  else {
    gameover();
  }

  fill("red")
  textSize(25)
  text("score: " + score, width / 3, player.y - 200)

  text("lives: " + lives, width / 3 + 100, player.y - 200)
}

function gameover() {
  swal({
    title: "Game Over",
    imageUrl: "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
    imageSize: "100x100",
    confirmButtonText: "Play Again"

  }, function (isConfirm) { if (isConfirm) { location.reload(); } })
}

//creating function to spawn zombies
function enemy() {
  if (frameCount % 50 === 0) {

    //giving random x and y positions for zombie to appear
    zombie = createSprite(random(500, 1100), random(100, 500), 40, 40)

    zombie.addImage(zombieImg)
    zombie.scale = 0.15
    zombie.velocityX = -3
    zombie.debug = true
    zombie.setCollider("rectangle", 0, 0, 400, 400)

    zombie.lifetime = 400
    zombieGroup.add(zombie)
  }

}
function coins() {
  if (frameCount % 50 === 0) {
    coin = createSprite(random(30, width - 200), random(-2000, -2250))
    coin.addImage(powerCoinImage);
    coin.scale = 0.1;
    coin.lifetime = 500;
    coinGroup.add(coin);

  }
}

function fishesR() {
  if (frameCount % 50 === 0) {
    fish = createSprite(random(1320, 1480), random(-2770, -2410));
    fish.velocityX = -6.5;
    fish.addImage(fishImg);
    fish.scale = 0.4;
    fish.lifetime = 600;
    fishGroup.add(fish);

  }
}

function fishesL() {
  if (frameCount % 50 === 0) {
    fish = createSprite(random(8.5, 160), random(-2770, -2410));
    fish.addImage(fishImg);
    fish.mirrorX(-1);
    fish.velocityX = 6;
    fish.scale = 0.4;
    fish.lifetime = 600;
    fishGroup.add(fish);


  }
}
