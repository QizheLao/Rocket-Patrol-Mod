class Menu extends Phaser.Scene {
    constructor() {
      super("menuScene")
    }

    preload() {
        // load images/tile sprites
        this.load.image('menubackground', './assets/menubackground.jpg');
        this.load.image('background', './assets/background.png');
        this.load.image('rocket', './assets/rocket.png')
        this.load.image('spaceship', './assets/spaceship.png')
        this.load.image('starfield', './assets/starfield.png')
        this.load.image('foreground', './assets/foreground.png')
        this.load.image('specialship', './assets/specialship.png')
        // load spritesheet
        this.load.spritesheet('explosion', './assets/explosion.png', {
          frameWidth: 64,
          frameHeight: 32,
          startFrame: 0,
          endFrame: 9
        })
        // load audio
        this.load.audio('sfx-select', './assets/sfx-select.wav')
        this.load.audio('sfx-explosion', './assets/sfx-explosion.wav')
        this.load.audio('sfx-explosion1', './assets/explosion1.wav')
        this.load.audio('sfx-explosion2', './assets/explosion2.wav')
        this.load.audio('sfx-explosion3', './assets/explosion3.wav')
        this.load.audio('sfx-explosion4', './assets/explosion4.wav')
        this.load.audio('sfx-shot', './assets/sfx-shot.wav')
        this.load.audio('bgm', './assets/maou_bgm_8bit25.mp3')                                                                                                                                                                                                                                                                                                   
      }

      
    create() {
      // animation configuration
      this.add.image(320, 240, 'menubackground').setScale(0.5);
      this.anims.create({
        key: 'explode',
        frames: this.anims.generateFrameNumbers('explosion', {
          start: 0,
          end: 9,
          first: 0
        }),
        frameRate: 30
      })

      let menuConfig = {
        fontFamily: 'Courier',
        fontSize: '28px',
        backgroundColor: '#C9C9C9',
        color: '#463734',
        align: 'right',
        padding: {

            top: 5,
            bottom: 5,
        },
        fixedWidth: 0
      }
      // display menutext
      this.add.text(game.config.width/2, game.config.height/1.8 - borderUISize - borderPadding, 'ROCKET PATROL',
      menuConfig).setOrigin(0.5)
      this.add.text(game.config.width/2, game.config.height/1.7, 'Use arrows to move & (F) to fire', menuConfig).
      setOrigin(0.5)
      menuConfig.backgroundColor = '#26B0FF'
      menuConfig.color = "#008"
      this.add.text(game.config.width/2, game.config.height/1.6 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5)
      // define keys
      keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
      keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
    }

    update() {
      if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
        // easy mode
        game.settings = {
          spaceshipSpeed: 3,
          gameTimer: 60000    
        }
        this.sound.play('sfx-select')
        this.scene.start('playScene')    
      }
      if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
        // hard mode
        game.settings = {
          spaceshipSpeed: 4,
          gameTimer: 45000    
        }
        this.sound.play('sfx-select')
        this.scene.start('playScene')    
      }
    }
  }