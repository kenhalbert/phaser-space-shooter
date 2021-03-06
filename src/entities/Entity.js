import Phaser from 'phaser';

class Entity extends Phaser.GameObjects.Sprite {
  constructor (scene, x, y, spriteKey, type) {
    super(scene, x, y, spriteKey);

    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this, 0);
    this.setData('type', type);
  }
};

export default Entity;