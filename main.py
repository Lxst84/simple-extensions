def on_overlap_tile(sprite3, location3):
    tiles.place_on_tile(myCorg, tiles.get_tile_location(1, 4))
    tiles.set_current_tilemap(tilemap("""
        level8
    """))
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.purple_outer_north_west,
    on_overlap_tile)

def on_overlap_tile2(sprite8, location8):
    tiles.set_current_tilemap(tilemap("""
        level2
    """))
    tiles.place_on_tile(myCorg, tiles.get_tile_location(1, 4))
    game.splash("level 1 complete")
    game.splash("level 2")
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_insignia,
    on_overlap_tile2)

def on_overlap_tile3(sprite, location):
    game.game_over(True)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.floor_dark_diamond,
    on_overlap_tile3)

def on_a_pressed():
    global projectile_2
    projectile_2 = sprites.create_projectile_from_sprite(img("""
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
        """),
        myCorg,
        200,
        0)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_overlap_tile4(sprite2, location2):
    tiles.set_current_tilemap(tilemap("""
        level13
    """))
    tiles.place_on_tile(myCorg, tiles.get_tile_location(1, 4))
    game.splash("level 4 complete")
    game.splash("level 5")
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.purple_outer_west2,
    on_overlap_tile4)

def on_countdown_end():
    game.game_over(False)
info.on_countdown_end(on_countdown_end)

def on_overlap_tile5(sprite7, location7):
    info.change_life_by(-1)
    scene.camera_shake(2, 500)
    tiles.place_on_tile(myCorg, tiles.get_tile_location(1, 4))
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.hazard_lava1,
    on_overlap_tile5)

def on_life_zero():
    game.game_over(False)
info.on_life_zero(on_life_zero)

def on_overlap_tile6(sprite5, location5):
    tiles.place_on_tile(myCorg, tiles.get_tile_location(1, 5))
    game.splash("level 5 complete")
    game.splash("level 6")
    tiles.set_current_tilemap(tilemap("""
        level22
    """))
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.purple_outer_south2,
    on_overlap_tile6)

def on_overlap_tile7(sprite4, location4):
    tiles.set_current_tilemap(tilemap("""
        level3
    """))
    tiles.place_on_tile(myCorg, tiles.get_tile_location(1, 4))
    game.splash("level 2 complete")
    game.splash("level 3")
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.green_inner_south_west,
    on_overlap_tile7)

def on_overlap_tile8(sprite6, location6):
    tiles.place_on_tile(myCorg, tiles.get_tile_location(1, 4))
    tiles.set_current_tilemap(tilemap("""
        level8
    """))
    game.splash("level 3 complete")
    game.splash("level 4")
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.purple_outer_south_east,
    on_overlap_tile8)

projectile_2: Sprite = None
myCorg: Corgio = None
game.splash("to move press w a s d or the arrow keys")
controller.move_sprite(myCorg, 100, 0)
myCorg = corgio.create(SpriteKind.player)
myCorg.horizontal_movement()
myCorg.vertical_movement()
myCorg.update_sprite()
tiles.set_tilemap(tilemap("""
    level1
"""))
scene.camera_follow_sprite(myCorg)
info.set_life(10)
info.start_countdown(90)