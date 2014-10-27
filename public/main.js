var game = new Phaser.Game(800, 600, Phaser.AUTO, 'roundup');

var menu = (function(){
  var o ={
    l : {},
    preload: function(){
      game.load.image('background', '/assets/sky.png');
      game.load.image('start', '/assets/star.png');

    },
    create: function(){
      game.add.sprite(0,0, 'background');

      var button = game.add.button(game.world.centerX, game.world.centerY, 'start', o.l.startGame);
      button.anchor.setTo(0.5);
      button.scale.setTo(0.5);

      var text = game.add.text(game.world.centerX, game.world.centerY - button.height, 'RoundUp');
      text.anchor.setTo(0.5);
    },
  };

  o.l.startGame = function(){
    game.state.start('level1');
  };

  return o;
})();

var level1 = (function(){
  var o = {
    l :{},

    preload: function(){
      game.load.image('background', '/assets/sky.png');
      game.load.image('start', '/assets/star.png');
      game.load.image('ground', '/assets/platform.png');
    },
    create: function(){
      game.physics.startSystem(Phaser.Physics.ARCADE);

      var platforms;
      platforms = game.add.group();
      platforms.enableBody = true;

      var ground = platforms.create(0, game.world.height -64, 'ground');
      ground.scale.setTo(2, 2);
      ground.body.immovable = true;

      var ledge = platforms.create(-150, 400, 'ground');
      ledge.body.immovable = true;

      var ledge = platforms.create(500, 400, 'ground');
      ledge.body.immovable = true;


      var ledge = platforms.create(-50, 250, 'ground');
      ledge.body.immovable = true;


      var ledge2 = platforms.create(200, 75, 'ground');
      ledge2.scale.setTo(0.2, 2);
      ledge2.body.immovable = true;

      var ledge3 = platforms.create(400, 150, 'ground');
      ledge3.scale.setTo(0.4, 1.5);
      ledge3.body.immovable = true;

      var ledge4 = platforms.create(600, 50, 'ground');
      ledge4.scale.setTo(0.3, 2.5);
      ledge4.body.immovable = true;
    }
  };
  return o;
})();

game.state.add('menu', menu);
game.state.add('level1', level1);
game.state.start('menu');
