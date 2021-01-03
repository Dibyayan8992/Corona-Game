var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["df2abb8b-b866-48aa-bff0-f59d78c9f00d","6cb43ec2-03d6-4cd8-9e70-2f29ba373001","27596b73-6853-4bf4-8bbd-e93c6e7d6152","604be495-906c-4cd9-9d3c-0fd2e1ddb311"],"propsByKey":{"df2abb8b-b866-48aa-bff0-f59d78c9f00d":{"name":"farm","sourceUrl":"assets/api/v1/animation-library/gamelab/8RkOLYC69Uhn.b7A1GaLNOBfPiC_hGvT/category_backgrounds/farm_land.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"8RkOLYC69Uhn.b7A1GaLNOBfPiC_hGvT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8RkOLYC69Uhn.b7A1GaLNOBfPiC_hGvT/category_backgrounds/farm_land.png"},"6cb43ec2-03d6-4cd8-9e70-2f29ba373001":{"name":"gun5","sourceUrl":null,"frameSize":{"x":80,"y":87},"frameCount":1,"looping":true,"frameDelay":12,"version":"JQGnzcErBrFSGX_A3__gE0_t_7mj_uYy","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":87},"rootRelativePath":"assets/6cb43ec2-03d6-4cd8-9e70-2f29ba373001.png"},"27596b73-6853-4bf4-8bbd-e93c6e7d6152":{"name":"corona","sourceUrl":null,"frameSize":{"x":60,"y":65},"frameCount":1,"looping":true,"frameDelay":12,"version":"qgRXuQP0zg6uDfrRTrfAtOagXDBP43Q3","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":65},"rootRelativePath":"assets/27596b73-6853-4bf4-8bbd-e93c6e7d6152.png"},"604be495-906c-4cd9-9d3c-0fd2e1ddb311":{"name":"bullet","sourceUrl":null,"frameSize":{"x":20,"y":8},"frameCount":1,"looping":true,"frameDelay":12,"version":"LTpGtrLNnhwoj6ogCTqKd8wH7lruOtpx","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":8},"rootRelativePath":"assets/604be495-906c-4cd9-9d3c-0fd2e1ddb311.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bullet1=createSprite(55,229,30,2);
bullet1.shapeColor="orange";
bullet1.setAnimation("bullet");

var bullet2=createSprite(55,229,30,2);
bullet2.shapeColor="orange";
bullet2.setAnimation("bullet");

var bullet3=createSprite(55,229,30,2);
bullet3.shapeColor="orange";
bullet3.setAnimation("bullet");

var bullet4=createSprite(55,229,30,2);
bullet4.shapeColor="orange";
bullet4.setAnimation("bullet");

var bullet5=createSprite(55,229,30,2);
bullet5.shapeColor="orange";
bullet5.setAnimation("bullet");

var bullet6=createSprite(55,229,30,2);
bullet6.shapeColor="orange";
bullet6.setAnimation("bullet");

var bullet7=createSprite(55,229,30,2);
bullet7.shapeColor="orange";
bullet7.setAnimation("bullet");

var bullet8=createSprite(55,229,30,2);
bullet8.shapeColor="orange";
bullet8.setAnimation("bullet");

var bullet9=createSprite(55,229,30,2);
bullet9.shapeColor="orange";
bullet9.setAnimation("bullet");

var bullet10=createSprite(55,229,30,2);
bullet10.shapeColor="orange";
bullet10.setAnimation("bullet");



var player = createSprite(50,230,10,10);
player.setAnimation("gun5");


// birds
var corona1=createSprite(360,240,40,40);
corona1.setAnimation("corona");
corona1.velocityY=-3;

var corona2 = createSprite(310,100,40,40);
corona2.setAnimation("corona");
corona2.velocityY=-3;

var corona3=createSprite(280,360,40,40);
corona3.setAnimation("corona");
corona3.velocityY=3;

var corona4=createSprite(230,22,40,40);
corona4.setAnimation("corona");
corona4.velocityY= 3;



var bulletsleft = 10;



function draw() {
background("purple");
 createEdgeSprites();

 corona1.bounceOff(edges);
 corona2.bounceOff(edges); 
 corona3.bounceOff(edges);
 corona4.bounceOff(edges);

 fill("yellow");
text("press 0 to launch the first bullet",15,285); 
 text("2 -> 2nd bullet",15,311);
 text("3 -> 3rd bullet",15,323);
 text("4 -> 4th bullet",15,335);
 text("5 -> 5th bullet",15,347);
 text("6 -> 6th bullet",15,359);
 text("7 -> 7th bullet",15,371);
 text("8 -> 8th bullet",15,383);
 text("9 -> 9th bullet",15,395);
 text("0 -> 1st bullet",15,300);
 
 
 
 if(keyDown("1")){
  bullet1.velocityX=10; 
 }
 
 if(keyDown("2")){
  bullet2.velocityX=10; 
 }
 
 if(keyDown("3")){
  bullet3.velocityX=10; 
 }
 
 if(keyDown("4")){
  bullet4.velocityX=10; 
 }
 
 if(keyDown("5")){
  bullet5.velocityX=10; 
 }
 
 if(keyDown("6")){
  bullet6.velocityX=10; 
 }
 
 if(keyDown("7")){
  bullet7.velocityX=10; 
 }
 
 if(keyDown("8")){
  bullet8.velocityX=10; 
 }
 
 if(keyDown("9")){
  bullet9.velocityX=10; 
 }
 
 if(keyDown("0")){
  bullet10.velocityX=10; 
 }
 
 if((corona1.x==800) && (corona2.x==800) && (corona3.x=800) &&(corona4.x==800)){
   textSize(40);
   fill("yellow");
   text("You Win",150,200);
 }
 

 
 if(corona1.isTouching(bullet1)||corona1.isTouching(bullet2)||corona1.isTouching(bullet3)||corona1.isTouching(bullet4)||corona1.isTouching(bullet5)||corona1.isTouching(bullet6)||corona1.isTouching(bullet7)||corona1.isTouching(bullet8)||corona1.isTouching(bullet9)||corona1.isTouching(bullet10)){
  corona1.x=800;
 }
 
 if(corona2.isTouching(bullet1)||corona2.isTouching(bullet2)||corona2.isTouching(bullet3)||corona2.isTouching(bullet4)||corona2.isTouching(bullet5)||corona2.isTouching(bullet6)||corona2.isTouching(bullet7)||corona2.isTouching(bullet8)||corona2.isTouching(bullet9)||corona2.isTouching(bullet10)){
  corona2.x=800;
 }
 
 if(corona3.isTouching(bullet1)||corona3.isTouching(bullet2)||corona3.isTouching(bullet3)||corona3.isTouching(bullet4)||corona3.isTouching(bullet5)||corona3.isTouching(bullet6)||corona3.isTouching(bullet7)||corona3.isTouching(bullet8)||corona3.isTouching(bullet9)||corona3.isTouching(bullet10)){
  corona3.x=800; 
 }
 
 if(corona4.isTouching(bullet1)||corona4.isTouching(bullet2)||corona4.isTouching(bullet3)||corona4.isTouching(bullet4)||corona4.isTouching(bullet5)||corona4.isTouching(bullet6)||corona4.isTouching(bullet7)||corona4.isTouching(bullet8)||corona4.isTouching(bullet9)||corona4.isTouching(bullet10)){
  corona4.x=800;
 }
 
 
 if(bullet1.isTouching(corona1)||bullet1.isTouching(corona2)||bullet1.isTouching(corona3)||bullet1.isTouching(corona4)){
bullet1.x=800;
bulletsleft=bulletsleft-1;
 }
 
 if(bullet2.isTouching(corona1)||bullet2.isTouching(corona2)||bullet2.isTouching(corona3)||bullet2.isTouching(corona4)){
bullet2.x=800;
bulletsleft=bulletsleft-1;
 }
 
 if(bullet3.isTouching(corona1)||bullet3.isTouching(corona2)||bullet3.isTouching(corona3)||bullet3.isTouching(corona4)){
bullet3.x=800;
bulletsleft=bulletsleft-1;
 }
 
 if(bullet4.isTouching(corona1)||bullet4.isTouching(corona2)||bullet4.isTouching(corona3)||bullet4.isTouching(corona4)){
bullet4.x=800;
bulletsleft=bulletsleft-1;
 }
 
 if(bullet5.isTouching(corona1)||bullet5.isTouching(corona2)||bullet5.isTouching(corona3)||bullet5.isTouching(corona4)){
bullet5.x=800;
bulletsleft=bulletsleft-1;
 }
 
 if(bullet6.isTouching(corona1)||bullet6.isTouching(corona2)||bullet6.isTouching(corona3)||bullet6.isTouching(corona4)){
bullet6.x=800;
bulletsleft=bulletsleft-1;
 }
 
 if(bullet7.isTouching(corona1)||bullet7.isTouching(corona2)||bullet7.isTouching(corona3)||bullet7.isTouching(corona4)){
bullet7.x=800;
bulletsleft=bulletsleft-1;
 }
 
 if(bullet8.isTouching(corona1)||bullet8.isTouching(corona2)||bullet8.isTouching(corona3)||bullet8.isTouching(corona4)){
bullet8.x=800;
bulletsleft=bulletsleft-1;
 }
 
 if(bullet9.isTouching(corona1)||bullet9.isTouching(corona2)||bullet9.isTouching(corona3)||bullet9.isTouching(corona4)){
bullet9.x=800;
bulletsleft=bulletsleft-1;
 }
 
 if(bullet10.isTouching(corona1)||bullet10.isTouching(corona2)||bullet10.isTouching(corona3)||bullet10.isTouching(corona4)){
bullet10.x=800;
bulletsleft=bulletsleft-1;
 }
 
 
 
 
 
 
  drawSprites();
}







// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
