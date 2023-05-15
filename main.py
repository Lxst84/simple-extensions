def on_overlap_tile(sprite3, location3):
    tiles.place_on_tile(myCorg, tiles.get_tile_location(1, 4))
    tiles.set_current_tilemap(tilemap("""
        level8
    """))
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.purple_outer_north_west,
    on_overlap_tile)

def on_overlap_tile2(sprite42, location42):
    tiles.set_current_tilemap(tilemap("""
        level3
    """))
    tiles.place_on_tile(myCorg, tiles.get_tile_location(1, 4))
    game.splash("level 2 complete")
    game.splash("level 3")
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.green_inner_south_west,
    on_overlap_tile2)

def on_combos_attach_combo():
    game.splash("ahh you've used the Kunami code  ")
    game.splash("well have a free win")
    controller.combos.set_timeout(1)
    tiles.place_on_tile(myCorg, tiles.get_tile_location(8, 0))
    tiles.set_current_tilemap(tilemap("""
        level27
    """))
controller.combos.attach_combo("up down left right", on_combos_attach_combo)

def on_overlap_tile3(sprite8, location8):
    tiles.set_current_tilemap(tilemap("""
        level2
    """))
    tiles.place_on_tile(myCorg, tiles.get_tile_location(1, 4))
    game.splash("level 1 complete")
    game.splash("level 2")
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_insignia,
    on_overlap_tile3)

def on_overlap_tile4(sprite, location):
    game.game_over(True)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.floor_dark_diamond,
    on_overlap_tile4)

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

def on_countdown_end():
    game.game_over(False)
info.on_countdown_end(on_countdown_end)

def on_overlap_tile5(sprite7, location7):
    scene.camera_shake(4, 500)
    tiles.place_on_tile(myCorg, tiles.get_tile_location(1, 4))
    statusbar.value += -10
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.hazard_lava1,
    on_overlap_tile5)

def on_on_zero(status):
    game.game_over(False)
statusbars.on_zero(StatusBarKind.health, on_on_zero)

def on_overlap_tile6(sprite2, location2):
    game.game_over(True)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile7
    """),
    on_overlap_tile6)

def on_overlap_tile7(sprite5, location5):
    tiles.place_on_tile(myCorg, tiles.get_tile_location(1, 5))
    game.splash("level 5 complete")
    game.splash("level 6")
    tiles.set_current_tilemap(tilemap("""
        level22
    """))
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.purple_outer_south2,
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

def on_overlap_tile9(sprite22, location22):
    tiles.set_current_tilemap(tilemap("""
        level13
    """))
    tiles.place_on_tile(myCorg, tiles.get_tile_location(1, 4))
    game.splash("level 4 complete")
    game.splash("level 5")
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.purple_outer_west2,
    on_overlap_tile9)

projectile_2: Sprite = None
myCorg: Corgio = None
statusbar: StatusBarSprite = None
statusbar = statusbars.create(20, 4, StatusBarKind.health)
statusbar.set_label("HP")
statusbar.attach_to_sprite(myCorg)
statusbar.position_direction(CollisionDirection.TOP)
statusbar.set_status_bar_flag(StatusBarFlag.SMOOTH_TRANSITION, True)
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