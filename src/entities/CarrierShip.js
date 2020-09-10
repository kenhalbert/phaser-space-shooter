import Phaser from 'phaser';
import Ship from './Ship';

class CarrierShip extends Ship {
  constructor (scene, x, y) {
    super(scene, x, y, 'sprEnemy2', 'CarrierShip');

    this.play('sprEnemy2');
    this.body.velocity.y = Phaser.Math.Between(150, 300);
  }
};

export default CarrierShip;