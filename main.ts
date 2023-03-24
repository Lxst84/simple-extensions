scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleOuterNorthWest, function (sprite3, location3) {
    tiles.placeOnTile(myCorg, tiles.getTileLocation(1, 4))
    tiles.setCurrentTilemap(tilemap`level8`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite8, location8) {
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnTile(myCorg, tiles.getTileLocation(1, 4))
    game.splash("level 1 complete")
    game.splash("level 2")
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDarkDiamond, function (sprite, location) {
    game.gameOver(true)
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
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleOuterWest2, function (sprite2, location2) {
    tiles.setCurrentTilemap(tilemap`level13`)
    tiles.placeOnTile(myCorg, tiles.getTileLocation(1, 4))
    game.splash("level 4 complete")
    game.splash("level 5")
})
info.onCountdownEnd(function () {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite7, location7) {
    scene.cameraShake(2, 500)
    tiles.placeOnTile(myCorg, tiles.getTileLocation(1, 4))
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    statusbar.value += -10
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleOuterSouth2, function (sprite5, location5) {
    tiles.placeOnTile(myCorg, tiles.getTileLocation(1, 5))
    game.splash("level 5 complete")
    game.splash("level 6")
    tiles.setCurrentTilemap(tilemap`level22`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenInnerSouthWest, function (sprite4, location4) {
    tiles.setCurrentTilemap(tilemap`level3`)
    tiles.placeOnTile(myCorg, tiles.getTileLocation(1, 4))
    game.splash("level 2 complete")
    game.splash("level 3")
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleOuterSouthEast, function (sprite6, location6) {
    tiles.placeOnTile(myCorg, tiles.getTileLocation(1, 4))
    tiles.setCurrentTilemap(tilemap`level8`)
    game.splash("level 3 complete")
    game.splash("level 4")
})
let projectile_2: Sprite = null
let myCorg: Corgio = null
let statusbar: StatusBarSprite = null
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.setLabel("HP")
statusbar.attachToSprite(myCorg)
statusbar.positionDirection(CollisionDirection.Top)
statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
game.splash("to move press w a s d or the arrow keys")
controller.moveSprite(myCorg, 100, 0)
myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(myCorg)
