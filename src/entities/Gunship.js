import Phaser from 'phaser';
import Ship from './Ship';
import EnemyLaser from './EnemyLaser';

class Gunship extends Ship {
  constructor (scene, x, y) {
    super(scene, x, y, 'sprEnemy0', 'Gunship');

    this.play('sprEnemy0');
    this.body.velocity.y = Phaser.Math.Between(50, 100);

    this.shootTimer = this.scene.time.addEvent({
      delay: 1000,
      callback: function() {
        var laser = new EnemyLaser(
          this.scene,
          this.x,
          this.y
        );
        laser.setScale(this.scaleX);
        this.scene.enemyLasers.add(laser);

        this.scene.soundEffects.laser.play();
      },
      callbackScope: this,
      loop: true
    });
  }

  onDestroy () {
    if (this.shootTimer)
      this.shootTimer.remove();
  }
};

export default Gunship;