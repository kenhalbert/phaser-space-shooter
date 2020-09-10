import Phaser from 'phaser';
import Entity from './Entity';

class PlayerLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, "sprLaserPlayer");
    this.body.velocity.y = -400;
  }
};

export default PlayerLaser;