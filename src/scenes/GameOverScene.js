import Phaser from 'phaser';
import createScrollingBackground from '../sceneHelpers/createScrollingBackground';

class GameOverScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameOverScene" });

    this.soundEffects = {
      btnOver: null,
      btnDown: null
    };

    this.btnRestart = null;
    this.gameOverText = null;
  }

  preload () {
    this.load.image('sprBg0', 'assets/images/sprBg0.png');
    this.load.image('sprBg1', 'assets/images/sprBg1.png');
    
    this.load.image("sprBtnRestart", "assets/images/sprBtnRestart.png");
    this.load.image("sprBtnRestartHover", "assets/images/sprBtnRestartHover.png");
    this.load.image("sprBtnRestartDown", "assets/images/sprBtnRestartDown.png");

    this.load.audio("sndBtnOver", "assets/audio/sndBtnOver.wav");
    this.load.audio("sndBtnDown", "assets/audio/sndBtnDown.wav");
  }

  create() {
    this.soundEffects.btnOver = this.sound.add("sndBtnOver");
    this.soundEffects.btnDown = this.sound.add("sndBtnDown");

    this.createGameOverText();
    this.createRestartButton();

    this.backgrounds = [];
    createScrollingBackground(this, this.backgrounds);
  }

  update() {
    this.backgrounds.forEach((e) => e.update());
  }

  createGameOverText() {
    this.gameOverText = this.add.text(
      this.game.config.width * 0.5,
      128,
      "GAME OVER",
      {
        fontFamily: 'monospace',
        fontSize: 48,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center'
      }
    );

    this.gameOverText.setOrigin(0.5);
  }

  createRestartButton() {
    this.btnRestart = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      "sprBtnRestart"
    );
    this.btnRestart.setInteractive();

    this.btnRestart.on("pointerover", () => {
      this.btnRestart.setTexture("sprBtnRestartHover");
      this.soundEffects.btnOver.play();
    });
    this.btnRestart.on("pointerout", () => {
      this.btnRestart.setTexture("sprBtnRestart");
    });
    this.btnRestart.on("pointerdown", () => {
      this.btnRestart.setTexture("sprBtnRestartDown");
    });
    this.btnRestart.on("pointerup", () => {
      this.btnRestart.setTexture("sprBtnRestartHover");

      this.scene.start('MainScene');
    });
  }
}

export default GameOverScene;