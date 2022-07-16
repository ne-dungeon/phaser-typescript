import Phaser from 'phaser'
import MineWallsTileset from '../assets/MineWallsTileset.png'

const mineWallsTileset = 'MineWallsTileset'

class MyGame extends Phaser.Scene {
  preload (): void {
    this.load.image(mineWallsTileset, MineWallsTileset)
  }

  create (): void {
    const logo = this.add.image(400, 150, mineWallsTileset)
    // const logo = this.add.rectangle(200, 400, 148, 148, 0xff6699)

    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: 'Power2',
      yoyo: true,
      loop: -1
    })
  }
}

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  scene: MyGame
}

const game = new Phaser.Game(config)

const test: string = 'test string'
console.log(test)
