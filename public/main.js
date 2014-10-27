var game = new Phaser.Game(800, 600, Phaser.AUTO, 'roundup');

var menu = (function(){
  var o ={
    l : {},
    preload: function(){
      game.load.image('background', '/assets/background.png');
      game.load.image('start', '/assets/start.png');
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
  var o = {};
  return o;
})();

game.state.add('menu', menu);
game.state.add('level1', level1);
game.state.start('menu');
