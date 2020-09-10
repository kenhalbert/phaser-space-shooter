import Ship from './Ship';
import PlayerLaser from './PlayerLaser';

class Player extends Ship {
  constructor (scene, x, y, spriteKey) {
    super(scene, x, y, spriteKey, 'Player');

    this.setData("speed", 200);
    this.setData("isShootCoolingDown", false);
    this.shootCooldownTimer = null;

    this.play("sprPlayer");
  }

  moveUp() {
    this.body.velocity.y = 0 - this.getData('speed');
  }

  moveDown() {
    this.body.velocity.y = this.getData('speed');
  }

  moveLeft() {
    this.body.velocity.x = 0 - this.getData('speed');
  }

  moveRight() {
    this.body.velocity.x = this.getData('speed');
  }

  update() {
    // stop player if movement keys not being pressed
    this.body.setVelocity(0, 0);

    // constrain player to world dimensions
    this.x = Phaser.Math.Clamp(this.x, 0, this.scene.game.config.width);
    this.y = Phaser.Math.Clamp(this.y, 0, this.scene.game.config.height);

    // emit lasers if player is shooting
    if (this.getData('isShooting') && !this.getData('isShootCoolingDown')) {
      this.scene.playerLasers.add(
        new PlayerLaser(
          this.scene,
          this.x,
          this.y
        )
      );

      this.scene.soundEffects.playerLaser.play();

      this.setData('isShootCoolingDown', true);

      this.shootCooldownTimer = this.scene.time.addEvent({
        delay: 100,
        callback: function() {
          this.setData('isShootCoolingDown', false);
        },
        callbackScope: this,
        loop: false
      });
    }
  }
};

export default Player;