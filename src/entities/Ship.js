import Phaser from 'phaser';
import Entity from './Entity';

class Ship extends Entity {
  constructor (scene, x, y, spriteKey, type) {
    super(scene, x, y, spriteKey);

    this.setData('isDead', false);
  }

  explode () {
    if (!this.getData('isDead')) {
      this.setTexture('sprExplosion');
      this.play('sprExplosion');

      this
        .scene
        .soundEffects
        .explosions[
          Phaser.Math.Between(0, this.scene.soundEffects.explosions.length - 1)
        ]
        .play();

      if (this.onDestroy) this.onDestroy();

      this.setAngle(0);
      this.body.setVelocity(0, 0);

      this.on('animationComplete', () => {
        this.destroy();
      });

      this.setData('isDead', true);
    }
  }
};

export default Ship;