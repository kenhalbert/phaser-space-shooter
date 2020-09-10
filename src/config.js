import Phaser from 'phaser';
import GameOverScene from './scenes/GameOverScene';
import MainScene from './scenes/MainScene';
import MainMenuScene from './scenes/MainMenuScene';

export default {
  type: Phaser.WEBGL,
  width: 480,
  height: 640,
  backgroundColor: "black",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 0 }
    }
  },
  scene: [MainMenuScene, MainScene, GameOverScene],
  pixelArt: true,
  roundPixels: true
};