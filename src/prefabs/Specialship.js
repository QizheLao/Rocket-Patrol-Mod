// Specialship prefab
class Specialship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame)
        scene.add.existing(this)
        this.points = pointValue
        this.moveSpeed = game.settings.spaceshipSpeed + 3
    }

    update() {
        // move Specialship left
        this.x -= this.moveSpeed

        // wrap form left to right edge
        if(this.x <= 0 - this.width) {
            this.x = game.config.width
        }
    }

    // reset position
    reset() {
        this.x = game.config.width
    }
}