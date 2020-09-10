import Phaser from 'phaser';

class ScrollingBackground {
  constructor (scene, spriteKey, velocityY, offsetX, offsetY) {
    this.scene = scene;
    this.spriteKey = spriteKey;
    this.velocityY = velocityY;
    this.offsetX = offsetX;
    this.offsetY = offsetY;

    this.tiles = this.scene.add.group();

    this.createTiles();
  }

  createTiles () {
    for (let i = 0; i < 2; i++) {
      const tile = this.scene.add.sprite(0, 0, this.spriteKey);

      tile.setDepth(i - 1);

      tile.setScale(2, 2);

      tile.y = 0 - tile.displayHeight * i + this.offsetY;
      tile.x = 0 + this.offsetX;
      
      this.scene.physics.world.enableBody(tile, 0);  // 0 means static body

      tile.body.velocity.y = this.velocityY;

      this.tiles.add(tile);
    }
  }

  update () {
    const threshold = this.scene.physics.world.bounds.height;

    const tiles = this.tiles.children.getArray();

    const tileOverThreshold = tiles.find(
      (t) => t.y >= threshold * 2
    );

    if (tileOverThreshold != null) {
      const tileNotOverThreshold = tiles.find(
        (t) => t !== tileOverThreshold
      );

      tileOverThreshold.y = tileNotOverThreshold.y - tileNotOverThreshold.displayHeight;
    }
  }
}

export default ScrollingBackground;