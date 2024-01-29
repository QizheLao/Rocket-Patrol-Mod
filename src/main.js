// Qizhe Lao
// Rocket Patrol V.1.14514
// 6 HR
// Add your own looping background music(1)
// Create a new scrolling tile sprite for the background (1)
// Create 4 new explosion sound effects and randomize which one plays on impact (3)
// Create a new title screen (e.g., new artwork, typography, layout) (3)
// Implement parallax scrolling for the background (3)
// Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (5)
// Random explosion sound from ChatGPT 'sfx-explosion' + Phaser.Math.Between(1, 4)

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
  }

let game = new Phaser.Game(config)

// set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3

//reserve keyboard bindings
let keyFIRE, keyRESET, keyLEFT, keyRIGHT