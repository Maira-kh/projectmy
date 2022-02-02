var ground,fruits,basket, basketimg;
var fruitGroup;

function preload() {
    badApple = loadImage("bad apple.png");
    badStrawberry = loadImage("strawberrybad.png");
    banana = loadImage("banana.png");
    dragonfruit = loadImage("Dragon fruit.png");
    lychee = loadImage("lychee.png");
    orange = loadImage("orange.png");
    forestbackground = loadImage("forest.jpg");
    grapes = loadImage("purple grapes.png");
    apple = loadImage("red apple.png");
    strawberry = loadImage("strawberry.png");
    basketimg = loadImage("basket.png")
    fruitGroup = new Group();
}

function setup(){
    var canvas = createCanvas(1200,600);
 
    ground = createSprite(600,590,1200,20);
    basket = createSprite(600, 500, 100,100)
    basket.addImage(basketimg);
    basket.scale= 0.3
  
}

function draw(){
    background(forestbackground);
   
    basket.x = World.mouseX;

    if (frameCount % 40 === 0 ){
       fruits = createSprite(random(100, 1100),0,100,100)
       fruits.velocityY = 5;
        var rand = Math.round(random(1,9));
        switch(rand){
            case 1: fruits.addImage(badApple);
            fruits.scale= 0.07
            break;
            case 2: fruits.addImage(badStrawberry);
            fruits.scale= 0.07
            break;
            case 3: fruits.addImage(dragonfruit);
            fruits.scale= 0.05
            break;
            case 4: fruits.addImage(lychee);
            fruits.scale= 0.07
            break;
            case 5: fruits.addImage(orange);
            fruits.scale= 0.07
            break;
            case 6: fruits.addImage(grapes);
            fruits.scale= 0.07
            break;
            case 7: fruits.addImage(apple);
            fruits.scale= 0.07
            break;
            case 8: fruits.addImage(strawberry);
            fruits.scale= 0.07
            break;
            case 9: fruits.addImage(banana);
            fruits.scale= 0.07
            break;
        }
        fruitGroup.add(fruits);
    }
    

    
        for(var i = 0; i<fruitGroup.length ;i++){
         if(fruitGroup.get(i).isTouching(basket)){
             fruitGroup.get(i).destroy()
    }
    }
    

    drawSprites();
}
