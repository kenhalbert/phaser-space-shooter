import Phaser from 'phaser';
import createScrollingBackground from '../sceneHelpers/createScrollingBackground';

class MainMenuScene extends Phaser.Scene {
  constructor () {
    super({ key: 'MainMenuScene' });

    this.soundEffects = {
      btnOver: null,
      btnDown: null
    };

    this.btnPlay = null;
    this.title = null;
    this.backgrounds = [];
  }

  preload () {
    this.load.image('sprBg0', 'assets/images/sprBg0.png');
    this.load.image('sprBg1', 'assets/images/sprBg1.png');
    
    this.load.image("sprBtnPlay", "assets/images/sprBtnPlay.png");
    this.load.image("sprBtnPlayHover", "assets/images/sprBtnPlayHover.png");
    this.load.image("sprBtnPlayDown", "assets/images/sprBtnPlayDown.png");

    this.load.audio("sndBtnOver", "assets/audio/sndBtnOver.wav");
    this.load.audio("sndBtnDown", "assets/audio/sndBtnDown.wav");
  }

  create() {
    this.soundEffects.btnOver = this.sound.add("sndBtnOver");
    this.soundEffects.btnDown = this.sound.add("sndBtnDown");

    this.createTitle();
    this.createStartButton();
    
    createScrollingBackground(this, this.backgrounds);
  }

  update() {
    this.backgrounds.forEach(
      (e) => e.update()
    );
  }

  createTitle() {
    this.title = this.add.text(
      this.game.config.width * 0.5,
      128,
      "UNREASONABLY DIFFICULT SPACE SHOOTER",
      {
        fontFamily: 'monospace',
        fontSize: 48,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center',
        wordWrap: true, 
        wordWrap: { width: this.game.config.width * 0.85 }
      }
    );

    this.title.setOrigin(0.5);
  }

  createStartButton() {
    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      "sprBtnPlay"
    );
    this.btnPlay.setInteractive();
    this.btnPlay.on("pointerover", () => {
      this.btnPlay.setTexture("sprBtnPlayHover");
      this.soundEffects.btnOver.play();
    });
    this.btnPlay.on("pointerout", () => {
      this.btnPlay.setTexture("sprBtnPlay");
    });
    this.btnPlay.on("pointerdown", () => {
      this.btnPlay.setTexture("sprBtnPlayDown");
    });
    this.btnPlay.on("pointerup", () => {
      this.btnPlay.setTexture("sprBtnPlayHover");

      this.scene.start('MainScene');
    });
  }
};

export default MainMenuScene;