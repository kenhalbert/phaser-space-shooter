import Phaser from 'phaser';
import Entity from './Entity';

class EnemyLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, "sprLaserEnemy0");
    this.body.velocity.y = 400;
  }
};

export default EnemyLaser;