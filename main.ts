scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleOuterNorthWest, function (sprite3, location3) {
    tiles.placeOnTile(myCorg, tiles.getTileLocation(1, 4))
    tiles.setCurrentTilemap(tilemap`level8`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenInnerSouthWest, function (sprite42, location42) {
    tiles.setCurrentTilemap(tilemap`level3`)
    tiles.placeOnTile(myCorg, tiles.getTileLocation(1, 4))
    game.splash("level 2 complete")
    game.splash("level 3")
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite8, location8) {
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnTile(myCorg, tiles.getTileLocation(1, 4))
    game.splash("level 1 complete")
    game.splash("level 2")
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDarkDiamond, function (sprite, location) {
    game.splash("level 7 complete")
    game.splash("level 8")
    tiles.placeOnTile(myCorg, tiles.getTileLocation(1, 6))
    tiles.setCurrentTilemap(tilemap`level29`)
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
info.onCountdownEnd(function () {
    game.gameOver(false)
})
controller.combos.attachCombo("up down left right  ", function () {
    game.splash("ahh you've used the Kunami code  ")
    game.splash("well have a free win")
    controller.combos.setTimeout(1)
    tiles.placeOnTile(myCorg, tiles.getTileLocation(8, 0))
    tiles.setCurrentTilemap(tilemap`level27`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite7, location7) {
    scene.cameraShake(4, 500)
    tiles.placeOnTile(myCorg, tiles.getTileLocation(1, 4))
    statusbar.value += -10
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite2, location2) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleOuterSouth2, function (sprite5, location5) {
    tiles.placeOnTile(myCorg, tiles.getTileLocation(1, 5))
    game.splash("level 5 complete")
    game.splash("level 6")
    tiles.setCurrentTilemap(tilemap`level22`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleOuterSouthEast, function (sprite6, location6) {
    tiles.placeOnTile(myCorg, tiles.getTileLocation(1, 4))
    tiles.setCurrentTilemap(tilemap`level8`)
    game.splash("level 3 complete")
    game.splash("level 4")
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleOuterWest2, function (sprite22, location22) {
    tiles.setCurrentTilemap(tilemap`level13`)
    tiles.placeOnTile(myCorg, tiles.getTileLocation(1, 4))
    game.splash("level 4 complete")
    game.splash("level 5")
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
