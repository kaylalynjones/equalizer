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

  var platforms, player;

    preload: function(){
      game.load.image('background', '/assets/sky.png');
      game.load.image('start', '/assets/star.png');
      game.load.image('ground', '/assets/platform.png');
      game.load.spritesheet('fighter', '/assets/fighter.png', 50, 50); //Kayla enter info here
    },
    create: function(){
      game.physics.startSystem(Phaser.Physics.ARCADE);
      // Ledges
      platforms = game.add.group();
      platforms.enableBody = true;

      var ground = platforms.create(0, game.world.height -64, 'ground');
      ground.scale.setTo(2, 2);
      ground.body.immovable = true;

      var ledge = platforms.create(-250, 400, 'ground');
      ledge.body.immovable = true;

      var ledge = platforms.create(-150, 200, 'ground');
      ledge.body.immovable = true;

      var ledge = platforms.create(450, 150, 'ground');
      ledge.body.immovable = true;

      var ledge = platforms.create(600, 300, 'ground');
      ledge.body.immovable = true;

      //Fighter
      player = game.add.sprite(game.world.centerX, game.world.height - 150, 'fighter');
      game.physics.arcade.enable(player);

      player.body.bounce.y = 0.2;
      player.body.gravity.y = 300;
      player.body.collideWorldBounds = true;

      player.animations.add('left', [], 10, true); //Kayla
      player.animations.add('right', [], 10, true); //Kayla
      cursors = game.input.keyboard.createCursorKeys();

      scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
      scoreText = game.add.text(game.world.width + 16, game.world.height + 16, 'score: 0', { fontSize: '32px', fill: '#000' });

      baddiesX = game.add.group();
      baddiesX.enableBody = true;

      for(var i = 0; i < 10; i++){
        var baddieX = baddiesX.create(i * 70, 0, 'baddiesX');
        baddieX.body.gravity.y = 6;
        baddieX.body.bounce.y = 0.7 + Math.random() * 0.2;
      }
    }
  };
  return o;
})();

game.state.add('menu', menu);
game.state.add('level1', level1);
game.state.start('menu');
