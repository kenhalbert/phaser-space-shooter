import Phaser from 'phaser';
import Ship from './Ship';

class ChaserShip extends Ship {
  constructor (scene, x, y) {
    super(scene, x, y, 'sprEnemy1', 'ChaserShip');

    this.states = {
      MOVE_DOWN: 'MOVE_DOWN',
      CHASE: 'CHASE'
    };

    this.state = this.states.MOVE_DOWN;
  }

  update () {
    const canChase = !this.getData('isDead') 
      && !this.scene.player.getData('isDead');

    if (canChase && Phaser.Math.Distance.Between(
        this.x,
        this.y,
        this.scene.player.x,
        this.scene.player.y
      ) < 300) {
      this.state = this.states.CHASE;
    } else {
      this.state = this.states.MOVE_DOWN;
    }
    
    if (this.state === this.states.CHASE) {
      const dx = this.scene.player.x - this.x;
      const dy = this.scene.player.y - this.y;

      // angle between positive x axis and ray from (0,0) to specified point
        // i.e. the acute angle in the hypothetical triangle used below
      const angle = Math.atan2(dy, dx);

      const speed = 200;
      this.body.setVelocity(
        Math.cos(angle) * speed,
        Math.sin(angle) * speed
      );
    } else { 
      this.body.velocity.y = Phaser.Math.Between(50, 100);
      this.body.velocity.x = 0;
    }

    if (this.x < this.scene.player.x) {
      this.angle -= 5;
    } else {
      this.angle += 5;
    }
  }
};

export default ChaserShip;