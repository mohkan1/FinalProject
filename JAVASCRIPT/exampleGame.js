function update() {
  var idoc = document.getElementById('iframe').contentWindow.document;

  idoc.open();
  editor.setValue('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"> <script src="https://cdn.jsdelivr.net/npm/phaser@3.15.1/dist/phaser-arcade-physics.min.js"></script> <script src="3d3.js"></script> <title>Document</title></head><style>*{text-align:center;margin:0;background-color:black;color:white}</style><body><h1>HUNTER</h1> <script>var config={type:Phaser.AUTO,width:600,height:300,scene:{preload:preload,create:create,update:update},physics:{default:"arcade",arcade:{debug:!1}}},game=new Phaser.Game(config);const gameState={score:0};var bugs,bugsLeft,bugsRight,timer,bonusTimer,bonus,bonusLeft,bonuRight,makingPlayerSmaller=1;function preload(){this.load.image("bug","https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/bug_3.png"),this.load.image("sky","https://mohkan1.github.io/games/assets/road.png"),this.load.image("star","https://mohkan1.github.io/games/assets/star.png"),this.load.image("shot","https://mohkan1.github.io/games/assets/bomb.png"),this.load.spritesheet("dude","https://mohkan1.github.io/games/assets/dude.png",{frameWidth:32,frameHeight:48}),this.load.image("heart","https://mohkan1.github.io/games/assets/heart.jpg")}function create(){function e(e){var t=.5;gameState.makeBugsBiggerTimer=setInterval(function(){e.setScale(t),t+=.01},20)}function t(e){var t=.5;gameState.makeBonusBiggerTimer=setInterval(function(){e.setScale(t),t+=.01},20)}function a(){Math.random();switch(parseInt(4*Math.random())){case 1:var t=bugsLeft.create(270,120,"bug").setScale(.5);bugsLeft.setVelocityY(100),bugsLeft.setVelocityX(-100),e(t);break;case 2:t=bugs.create(300,120,"bug").setScale(.5);bugs.setVelocityY(100),e(t);break;case 3:t=bugsRight.create(330,120,"bug").setScale(.5);bugsRight.setVelocityY(100),bugsRight.setVelocityX(100),e(t)}}gameState.keys=this.input.keyboard.addKeys("W,D,S,A"),this.add.image(300,100,"sky").setScale(2),gameState.player=this.physics.add.sprite(225,270,"dude"),gameState.player.setCollideWorldBounds(!0),gameState.cursors=this.input.keyboard.createCursorKeys(),gameState.heart=this.add.image(450,20,"heart"),gameState.heart2=this.add.image(500,20,"heart"),gameState.heart3=this.add.image(550,20,"heart"),gameState.life=3,this.anims.create({key:"left",frames:this.anims.generateFrameNumbers("dude",{start:0,end:3}),frameRate:10,repeat:-1}),this.anims.create({key:"turn",frames:[{key:"dude",frame:4}],frameRate:20}),this.anims.create({key:"right",frames:this.anims.generateFrameNumbers("dude",{start:5,end:8}),frameRate:10,repeat:-1}),bugs=this.physics.add.group(),bugsLeft=this.physics.add.group(),bugsRight=this.physics.add.group(),bonus=this.physics.add.group(),bonuRight=this.physics.add.group(),bonusLeft=this.physics.add.group(),a(),timer=this.time.addEvent({delay:500,callback:a,callbackscope:this,loop:!0}),bonusTimer=this.time.addEvent({delay:700,callback:function(){switch(Math.random(),parseInt(4*Math.random())){case 1:var e=bonusLeft.create(270,120,"star").setScale(.5);bonusLeft.setVelocityY(100),bonusLeft.setVelocityX(-80),t(e);break;case 2:e=bonus.create(300,120,"star").setScale(.5),bonus.setVelocityY(100),t(e);break;case 3:e=bonuRight.create(330,120,"star").setScale(.5),bonuRight.setVelocityY(100),bonuRight.setVelocityX(80),t(e)}},callbackscope:this,loop:!0}),gameState.scoreText=this.add.text(20,20,"Score: "+gameState.score+"/500",{fontSize:"16px",fill:"black"}),this.physics.add.overlap(bugs,gameState.player,(e,t)=>{t.destroy(),gameState.life--}),this.physics.add.overlap(bugsRight,gameState.player,(e,t)=>{t.destroy(),gameState.life--}),this.physics.add.overlap(bugsLeft,gameState.player,(e,t)=>{gameState.life--,t.destroy()}),this.physics.add.overlap(bonus,gameState.player,(e,t)=>{gameState.score+=10,t.destroy()}),this.physics.add.overlap(bonuRight,gameState.player,(e,t)=>{gameState.score+=10,t.destroy()}),this.physics.add.overlap(bonusLeft,gameState.player,(e,t)=>{gameState.score+=10,t.destroy()})}function update(){switch(gameState.scoreText.setText(`Score: ${gameState.score}/500`),gameState.cursors.right.isDown||gameState.keys.D.isDown?(gameState.player.setVelocityX(200),gameState.player.anims.play("right")):gameState.cursors.left.isDown||gameState.keys.A.isDown?(gameState.player.setVelocityX(-200),gameState.player.anims.play("left")):gameState.cursors.up.isDown||gameState.keys.W.isDown?(gameState.player.setScale(makingPlayerSmaller),makingPlayerSmaller-=.005,gameState.player.setVelocityY(-50)):gameState.cursors.down.isDown||gameState.keys.S.isDown?(makingPlayerSmaller+=.005,gameState.player.setScale(makingPlayerSmaller),gameState.player.setVelocityY(50)):(gameState.player.setVelocityX(0),gameState.player.setVelocityY(0),gameState.player.anims.play("turn")),gameState.life){case 2:gameState.heart.destroy();break;case 1:gameState.heart2.destroy();break;case 0:gameState.heart3.destroy(),gameState.scoreText.setText("Game Over! click to start again"),game.paused=!0,this.input.on("pointerup",()=>{this.scene.restart()}),timer.destroy(),bonusTimer.destroy(),clearInterval(gameState.makeBugsBiggerTimer),clearInterval(gameState.makeBonusBiggerTimer)}gameState.score>=500&&(gameState.scoreText.setText("Cong! Click to start again"),game.paused=!0,this.input.on("pointerup",()=>{this.scene.restart(),gameState.score=0}),timer.destroy(),bonusTimer.destroy(),clearInterval(gameState.makeBugsBiggerTimer),clearInterval(gameState.makeBonusBiggerTimer))}</script> </body></html>');
  idoc.write(editor.getValue());
  idoc.close();



}



function setupEditor() {
  window.editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/html");
  editor.setValue(``, 1); //1 = moves cursor to end



  editor.focus();


  editor.setOptions({
      fontSize: "14pt",
      showLineNumbers: true,
      showGutter: true,
      vScrollBarAlwaysVisible: true,
      enableBasicAutocompletion: false,
      enableLiveAutocompletion: false
  });

  editor.setShowPrintMargin(false);
  editor.setBehavioursEnabled(false);
}

setupEditor();
update();


function keyCode(event) {
  update();

}