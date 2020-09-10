import Phaser from 'phaser';
import Player from '../entities/Player';
import Gunship from '../entities/Gunship';
import CarrierShip from '../entities/CarrierShip';
import ChaserShip from '../entities/ChaserShip';
import createScrollingBackground from '../sceneHelpers/createScrollingBackground';

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: "MainScene" });

    this.soundEffects = {
      explosions: [],
      laser: null,
      playerLaser: null
    };

    this.player = null;
    
    this.keyW = null;
    this.keyS = null;
    this.keyA = null;
    this.keyD = null;
    this.keySpace = null;

    this.enemies = null;
    this.playerLasers = null;
    this.enemyLasers = null;

    this.backgrounds = null;
  }

  preload () {
    this.load.image('sprBg0', 'assets/images/sprBg0.png');
    this.load.image('sprBg1', 'assets/images/sprBg1.png');
    this.load.image('sprEnemy1', 'assets/images/sprEnemy1.png');
    this.load.image("sprLaserEnemy0", "assets/images/sprLaserEnemy0.png");
    this.load.image("sprLaserPlayer", "assets/images/sprLaserPlayer.png");
    this.load.spritesheet(
      'sprExplosion',
      'assets/images/sprExplosion.png',
      {
        frameWidth: 32,
        frameHeight: 32
      }
    );
    this.load.spritesheet(
      'sprEnemy0',
      'assets/images/sprEnemy0.png',
      {
        frameWidth: 16,
        frameHeight: 16
      }
    );
    this.load.spritesheet("sprEnemy2", "assets/images/sprEnemy2.png", {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.spritesheet("sprPlayer", "assets/images/sprPlayer.png", {
      frameWidth: 16,
      frameHeight: 16
    });

    this.load.audio("sndExplode0", "assets/audio/sndExplode0.wav");
    this.load.audio("sndExplode1", "assets/audio/sndExplode1.wav");
    this.load.audio("sndLaser", "assets/audio/sndLaser.wav");
  }

  create() { 
    this.anims.create({
      key: "sprEnemy0",
      frames: this.anims.generateFrameNumbers("sprEnemy0"),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "sprEnemy2",
      frames: this.anims.generateFrameNumbers("sprEnemy2"),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "sprExplosion",
      frames: this.anims.generateFrameNumbers("sprExplosion"),
      frameRate: 20,
      repeat: 0
    });

    this.anims.create({
      key: "sprPlayer",
      frames: this.anims.generateFrameNumbers("sprPlayer"),
      frameRate: 20,
      repeat: -1
    });

    this.soundEffects.explosions.push(this.sound.add('sndExplode0'));
    this.soundEffects.explosions.push(this.sound.add('sndExplode1'));
    this.soundEffects.laser = this.sound.add('sndLaser', { volume: 0.1 });
    this.soundEffects.playerLaser = this.sound.add('sndLaser', { volume: 1 });

    this.player = new Player(
      this, 
      1 + this.game.config.width * 0.5, // +1 here as workaround to issue preventing shooting at starting position
      this.game.config.height * 0.5,
      'sprPlayer'
    );

    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.enemies = this.add.group();
    this.enemyLasers = this.add.group();
    this.playerLasers = this.add.group();

    this.physics.add.collider(this.enemies, this.playerLasers, (enemy, laser) => {
      enemy.explode();

      laser.destroy();
    });

    this.physics.add.collider(this.player, this.enemyLasers, (player, laser) => {
      this.killPlayer();

      laser.destroy();
    });

    this.physics.add.overlap(this.player, this.enemies, (player, enemy) => {
      if (!player.getData("isDead") && !enemy.getData("isDead")) {
        this.killPlayer();

        enemy.explode();
      }
    });

    this.time.addEvent({
      delay: 350,
      callbackScope: this,
      loop: true,
      callback: this.spawn
    });

    this.backgrounds = [];  // need this here since ctor is only run once during game execution
    createScrollingBackground(this, this.backgrounds);
  }

  update () {
    this.updatePlayer();
    this.updateEnvironment();
  }

  killPlayer() {
    this.player.explode();

    this.time.addEvent({
      delay: 1000,
      callbackScope: this,
      loop: false,
      callback: () => {
        this.scene.start('GameOverScene');
      }
    });
  }

  updatePlayer () {
    if (this.player.getData('isDead')) return;

    if (this.keySpace.isDown) {
      this.player.setData('isShooting', true);
    } else {
      this.player.setData('isShooting', false);
    }

    this.player.update();

    if (this.keyW.isDown) this.player.moveUp();
    else if (this.keyA.isDown) this.player.moveLeft();
    else if (this.keyS.isDown) this.player.moveDown();
    else if (this.keyD.isDown) this.player.moveRight();
  }

  updateEnvironment () {
    const updateEntity = (e) => {
      this.updateEntity(e);
    };

    this.enemies.children.iterate(updateEntity);
    this.enemyLasers.children.iterate(updateEntity);
    this.playerLasers.children.iterate(updateEntity);

    this.backgrounds.forEach((e) => {
      e.update();
    });
  }

  spawn () {
    const roll = Phaser.Math.Between(0, 10);
    
    let newEnemy = null;

    if (roll <= 5) {
      newEnemy = new Gunship(
        this,
        Phaser.Math.Between(0, this.game.config.width),
        0
      )
    } else if (roll <= 8) {
      newEnemy = new ChaserShip(
        this,
        Phaser.Math.Between(0, this.game.config.width),
        0      
      );
    } else {
      newEnemy = new CarrierShip(
        this, 
        Phaser.Math.Between(0, this.game.config.width),
        0
      );
    }

    this.enemies.add(newEnemy);
  }

  updateEntity (obj) {
    if (obj && obj.update) { 
      obj.update();

      this.destroyIfOutOfBounds(obj);
    }
  }

  destroyIfOutOfBounds (obj) {
    if (!Phaser.Geom.Rectangle.Overlaps(this.physics.world.bounds, obj.getBounds())) {
      if (obj.onDestroy) obj.onDestroy();

      obj.destroy();
    }
  }

  getEnemiesByType (type) {
    return this
      .enemies
      .children
      .filter(
        (c) => c.getData('type') === type
      );
  }
};

export default MainScene;