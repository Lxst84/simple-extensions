scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDarkDiamond, function (sprite, location) {
    game.splash("boss fight")
    game.splash("to shoot press space")
    tiles.setCurrentTilemap(tilemap`level23`)
    for (let index = 0; index < 10; index++) {
        myEnemy = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.Enemy)
        myEnemy.setFlag(SpriteFlag.AutoDestroy, false)
        myEnemy.setPosition(160, randint(5, 115))
        myEnemy.setVelocity(-100, 0)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile_2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        2 2 2 . 2 2 2 . 2 2 2 . 2 2 2 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, myCorg, 200, 0)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleOuterWest2, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level13`)
    tiles.placeOnTile(myCorg, tiles.getTileLocation(1, 4))
    game.splash("level 4 complete")
    game.splash("level 5")
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleOuterNorthWest, function (sprite, location) {
    tiles.placeOnTile(myCorg, tiles.getTileLocation(1, 4))
    tiles.setCurrentTilemap(tilemap`level8`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenInnerSouthWest, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level3`)
    tiles.placeOnTile(myCorg, tiles.getTileLocation(1, 4))
    game.splash("level 2 complete")
    game.splash("level 3")
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleOuterSouth2, function (sprite, location) {
    tiles.placeOnTile(myCorg, tiles.getTileLocation(1, 5))
    game.splash("level 5 complete")
    game.splash("level 6")
    tiles.setCurrentTilemap(tilemap`level22`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleOuterSouthEast, function (sprite, location) {
    tiles.placeOnTile(myCorg, tiles.getTileLocation(1, 4))
    tiles.setCurrentTilemap(tilemap`level8`)
    game.splash("level 3 complete")
    game.splash("level 4")
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    sprites.destroy(myEnemy, effects.fire, 500)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    info.changeLifeBy(-1)
    scene.cameraShake(2, 500)
    tiles.placeOnTile(myCorg, tiles.getTileLocation(1, 4))
})
info.onLifeZero(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -10
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnTile(myCorg, tiles.getTileLocation(1, 4))
    game.splash("level 1 complete")
    game.splash("level 2")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
})
let projectile_2: Sprite = null
let myEnemy: Sprite = null
let statusbar: StatusBarSprite = null
let myCorg: Corgio = null
game.splash("to move press w a s d or the arrow keys")
controller.moveSprite(myCorg, 100, 0)
myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(myCorg)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(myEnemy)
info.setLife(10)
