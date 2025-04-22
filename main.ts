namespace SpriteKind {
    export const Friend = SpriteKind.create()
    export const Part1 = SpriteKind.create()
    export const Part2 = SpriteKind.create()
    export const Part3 = SpriteKind.create()
    export const mutated = SpriteKind.create()
}
function level8 () {
    sprites.destroyAllSpritesOfKind(SpriteKind.mutated)
    lvl7 = false
    lvl8 = true
    tiles.setCurrentTilemap(tilemap`level6`)
    Cure1 = false
    cure2 = false
    Cure3 = false
    final_level = false
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    one = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .........bb.........
        ........cccc........
        ........cccc........
        .........ff.........
        .........bf.........
        .........bb.........
        ........bbbb........
        .......bbbbbb.......
        .......bbbbbb.......
        .......bbbbbb.......
        .......bbbbbc.......
        ........cccc........
        ....................
        ....................
        `, SpriteKind.Part1)
    tiles.placeOnTile(one, tiles.getTileLocation(8, 7))
    Two = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ........4eee........
        .......eeeeee.......
        .........cc.........
        .........ec.........
        ........eeee........
        .......ee4eee.......
        ......ee4eeeee......
        .....ee4eeeeeee.....
        .....eeeeeeeeee.....
        .....eeeeeeeecc.....
        ......eeeeeecc......
        .......eccccc.......
        ....................
        ....................
        `, SpriteKind.Part2)
    tiles.placeOnTile(Two, tiles.getTileLocation(10, 14))
    tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 3))
    Three = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .........888........
        .........888........
        ......888888888.....
        ........fffff.......
        .......9999999......
        .......9999999......
        .......9999999......
        .......9999999......
        .......9999999......
        .......9999999......
        ......888888888.....
        ......fffffffff.....
        ....................
        ....................
        `, SpriteKind.Part3)
    tiles.placeOnTile(Three, tiles.getTileLocation(12, 0))
    duck4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 8 7 b . . . 
        . . . . . . . . . 8 7 8 . . . . 
        . . . . . . 8 8 8 8 8 8 . . . . 
        . . . . . 8 8 7 7 7 7 7 8 . . . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . . 
        . . 8 7 7 8 7 5 1 2 7 5 4 2 . . 
        . . 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 . 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        . . c 8 5 5 5 5 5 7 7 7 8 8 . . 
        . . . c c c c c c c c 8 8 . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(duck4, tiles.getTileLocation(2, 0))
    duck4.follow(mySprite, 5)
    fight = true
    enimies = true
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(3, 1))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(4, 4))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(6, 2))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(5, 4))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(8, 2))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(9, 4))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(9, 5))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(7, 6))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(7, 7))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(4, 10))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(5, 10))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(6, 10))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(3, 11))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(1, 12))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(3, 15))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(5, 13))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(6, 13))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(8, 15))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(9, 13))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(10, 13))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(13, 11))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(11, 12))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(11, 10))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(13, 9))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(11, 7))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(13, 6))
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    while (controller.up.isPressed()) {
        x = mySprite.x
        y = mySprite.y
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 2 2 f f f f . . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f f 2 f e f . . 
            . . f f f 2 f e e 2 2 f f f . . 
            . . f e 2 f f e e 2 f e e f . . 
            . f f e f f e e e f e e e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . . e f f f f f f f f 4 e . . 
            . . . 4 f 2 2 2 2 2 e d d 4 . . 
            . . . e f f f f f f e e 4 . . . 
            . . . . f f f . . . . . . . . . 
            `, SpriteKind.Player)
        mySprite.x = x
        mySprite.y = y
        pause(100)
        x = mySprite.x
        y = mySprite.y
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player)
        mySprite.x = x
        mySprite.y = y
        pause(100)
        x = mySprite.x
        y = mySprite.y
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 2 2 f f f f . . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e f 2 f f f 2 f 2 e f . . 
            . . f f f 2 2 e e f 2 f f f . . 
            . . f e e f 2 e e f f 2 e f . . 
            . f f e e e f e e e f f e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f e . . . 
            . . 4 d d e 2 2 2 2 2 f 4 . . . 
            . . . 4 e e f f f f f f e . . . 
            . . . . . . . . . f f f . . . . 
            `, SpriteKind.Player)
        mySprite.x = x
        mySprite.y = y
        pause(100)
        x = mySprite.x
        y = mySprite.y
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player)
        mySprite.x = x
        mySprite.y = y
        pause(100)
    }
})
function level4 () {
    game.showLongText("The mutated duck is now slightly faster!", DialogLayout.Full)
    lvl4 = true
    tiles.setCurrentTilemap(tilemap`level0`)
    Cure1 = false
    cure2 = false
    Cure3 = false
    final_level = false
    lvl3 = false
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
    for (let index = 0; index < 15; index++) {
        Normal = sprites.create(img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 5 d f . . 
            . . . . b 5 5 1 f f 5 d 4 c . . 
            . . . . b 5 5 d f b d d 4 4 . . 
            . b b b d 5 5 5 5 5 4 4 4 4 4 b 
            b d d d b b d 5 5 4 4 4 4 4 b . 
            b b d 5 5 5 b 5 5 5 5 5 5 b . . 
            c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
            c b d c d 5 5 b 5 5 5 5 5 5 b . 
            . c d d c c b d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Friend)
        tiles.placeOnRandomTile(Normal, sprites.dungeon.hazardWater)
    }
    one = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .........bb.........
        ........cccc........
        ........cccc........
        .........ff.........
        .........bf.........
        .........bb.........
        ........bbbb........
        .......bbbbbb.......
        .......bbbbbb.......
        .......bbbbbb.......
        .......bbbbbc.......
        ........cccc........
        ....................
        ....................
        `, SpriteKind.Part1)
    tiles.placeOnRandomTile(one, sprites.dungeon.hazardWater)
    Two = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ........4eee........
        .......eeeeee.......
        .........cc.........
        .........ec.........
        ........eeee........
        .......ee4eee.......
        ......ee4eeeee......
        .....ee4eeeeeee.....
        .....eeeeeeeeee.....
        .....eeeeeeeecc.....
        ......eeeeeecc......
        .......eccccc.......
        ....................
        ....................
        `, SpriteKind.Part2)
    tiles.placeOnRandomTile(Two, sprites.dungeon.hazardWater)
    Three = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .........888........
        .........888........
        ......888888888.....
        ........fffff.......
        .......9999999......
        .......9999999......
        .......9999999......
        .......9999999......
        .......9999999......
        .......9999999......
        ......888888888.....
        ......fffffffff.....
        ....................
        ....................
        `, SpriteKind.Part3)
    tiles.placeOnRandomTile(Three, sprites.dungeon.hazardWater)
    duck4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 8 7 b . . . 
        . . . . . . . . . 8 7 8 . . . . 
        . . . . . . 8 8 8 8 8 8 . . . . 
        . . . . . 8 8 7 7 7 7 7 8 . . . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . . 
        . . 8 7 7 8 7 5 1 2 7 5 4 2 . . 
        . . 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 . 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        . . c 8 5 5 5 5 5 7 7 7 8 8 . . 
        . . . c c c c c c c c 8 8 . . . 
        `, SpriteKind.Enemy)
    fight = true
    enimies = true
    duck4.follow(mySprite, 5)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.mutated, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
function level6 () {
    game.showLongText("Don't run into stationary mutated ducks.", DialogLayout.Full)
    lvl6 = true
    tiles.setCurrentTilemap(tilemap`level1`)
    lvl5 = false
    Cure1 = false
    cure2 = false
    Cure3 = false
    final_level = false
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
    for (let index = 0; index < 15; index++) {
        Normal = sprites.create(img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 5 d f . . 
            . . . . b 5 5 1 f f 5 d 4 c . . 
            . . . . b 5 5 d f b d d 4 4 . . 
            . b b b d 5 5 5 5 5 4 4 4 4 4 b 
            b d d d b b d 5 5 4 4 4 4 4 b . 
            b b d 5 5 5 b 5 5 5 5 5 5 b . . 
            c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
            c b d c d 5 5 b 5 5 5 5 5 5 b . 
            . c d d c c b d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Friend)
        tiles.placeOnRandomTile(Normal, assets.tile`myTile4`)
    }
    for (let index = 0; index < 10; index++) {
        sittingDucks = sprites.create(img`
            2 . . 2 . . 2 . . 2 . . 2 . 2 . 
            . 2 . . 2 . . 2 . . 8 7 b 2 . . 
            . . 2 . . 2 . . 2 8 7 8 2 . . . 
            . . . 2 . . 8 8 8 8 8 8 . . . 2 
            2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
            . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
            . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
            2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
            . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
            8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
            8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
            c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
            c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
            . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
            2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
            . 2 . c c c c c c c c 8 8 . 2 . 
            `, SpriteKind.mutated)
        tiles.placeOnRandomTile(sittingDucks, assets.tile`myTile1`)
    }
    one = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .........bb.........
        ........cccc........
        ........cccc........
        .........ff.........
        .........bf.........
        .........bb.........
        ........bbbb........
        .......bbbbbb.......
        .......bbbbbb.......
        .......bbbbbb.......
        .......bbbbbc.......
        ........cccc........
        ....................
        ....................
        `, SpriteKind.Part1)
    tiles.placeOnRandomTile(one, assets.tile`myTile2`)
    Two = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ........4eee........
        .......eeeeee.......
        .........cc.........
        .........ec.........
        ........eeee........
        .......ee4eee.......
        ......ee4eeeee......
        .....ee4eeeeeee.....
        .....eeeeeeeeee.....
        .....eeeeeeeecc.....
        ......eeeeeecc......
        .......eccccc.......
        ....................
        ....................
        `, SpriteKind.Part2)
    tiles.placeOnRandomTile(Two, assets.tile`myTile0`)
    Three = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .........888........
        .........888........
        ......888888888.....
        ........fffff.......
        .......9999999......
        .......9999999......
        .......9999999......
        .......9999999......
        .......9999999......
        .......9999999......
        ......888888888.....
        ......fffffffff.....
        ....................
        ....................
        `, SpriteKind.Part3)
    tiles.placeOnRandomTile(Three, assets.tile`myTile0`)
    duck4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 8 7 b . . . 
        . . . . . . . . . 8 7 8 . . . . 
        . . . . . . 8 8 8 8 8 8 . . . . 
        . . . . . 8 8 7 7 7 7 7 8 . . . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . . 
        . . 8 7 7 8 7 5 1 2 7 5 4 2 . . 
        . . 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 . 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        . . c 8 5 5 5 5 5 7 7 7 8 8 . . 
        . . . c c c c c c c c 8 8 . . . 
        `, SpriteKind.Enemy)
    fight = true
    enimies = true
    duck4.follow(mySprite, 5)
}
function level5 () {
    game.showLongText("Don't run into stationary mutated ducks.", DialogLayout.Full)
    lvl5 = true
    tiles.setCurrentTilemap(tilemap`level3`)
    lvl4 = false
    Cure1 = false
    cure2 = false
    Cure3 = false
    final_level = false
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
    for (let index = 0; index < 15; index++) {
        Normal = sprites.create(img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 5 d f . . 
            . . . . b 5 5 1 f f 5 d 4 c . . 
            . . . . b 5 5 d f b d d 4 4 . . 
            . b b b d 5 5 5 5 5 4 4 4 4 4 b 
            b d d d b b d 5 5 4 4 4 4 4 b . 
            b b d 5 5 5 b 5 5 5 5 5 5 b . . 
            c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
            c b d c d 5 5 b 5 5 5 5 5 5 b . 
            . c d d c c b d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Friend)
        tiles.placeOnRandomTile(Normal, assets.tile`myTile4`)
    }
    for (let index = 0; index < 5; index++) {
        sittingDucks = sprites.create(img`
            2 . . 2 . . 2 . . 2 . . 2 . 2 . 
            . 2 . . 2 . . 2 . . 8 7 b 2 . . 
            . . 2 . . 2 . . 2 8 7 8 2 . . . 
            . . . 2 . . 8 8 8 8 8 8 . . . 2 
            2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
            . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
            . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
            2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
            . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
            8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
            8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
            c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
            c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
            . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
            2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
            . 2 . c c c c c c c c 8 8 . 2 . 
            `, SpriteKind.mutated)
        tiles.placeOnRandomTile(sittingDucks, assets.tile`myTile0`)
    }
    one = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .........bb.........
        ........cccc........
        ........cccc........
        .........ff.........
        .........bf.........
        .........bb.........
        ........bbbb........
        .......bbbbbb.......
        .......bbbbbb.......
        .......bbbbbb.......
        .......bbbbbc.......
        ........cccc........
        ....................
        ....................
        `, SpriteKind.Part1)
    tiles.placeOnRandomTile(one, assets.tile`myTile2`)
    Two = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ........4eee........
        .......eeeeee.......
        .........cc.........
        .........ec.........
        ........eeee........
        .......ee4eee.......
        ......ee4eeeee......
        .....ee4eeeeeee.....
        .....eeeeeeeeee.....
        .....eeeeeeeecc.....
        ......eeeeeecc......
        .......eccccc.......
        ....................
        ....................
        `, SpriteKind.Part2)
    tiles.placeOnRandomTile(Two, assets.tile`myTile2`)
    Three = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .........888........
        .........888........
        ......888888888.....
        ........fffff.......
        .......9999999......
        .......9999999......
        .......9999999......
        .......9999999......
        .......9999999......
        .......9999999......
        ......888888888.....
        ......fffffffff.....
        ....................
        ....................
        `, SpriteKind.Part3)
    tiles.placeOnRandomTile(Three, assets.tile`myTile2`)
    duck4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 8 7 b . . . 
        . . . . . . . . . 8 7 8 . . . . 
        . . . . . . 8 8 8 8 8 8 . . . . 
        . . . . . 8 8 7 7 7 7 7 8 . . . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . . 
        . . 8 7 7 8 7 5 1 2 7 5 4 2 . . 
        . . 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 . 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        . . c 8 5 5 5 5 5 7 7 7 8 8 . . 
        . . . c c c c c c c c 8 8 . . . 
        `, SpriteKind.Enemy)
    fight = true
    enimies = true
    duck4.follow(mySprite, 5)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    while (controller.left.isPressed()) {
        x = mySprite.x
        y = mySprite.y
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 2 2 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `, SpriteKind.Player)
        mySprite.x = x
        mySprite.y = y
        pause(100)
        x = mySprite.x
        y = mySprite.y
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `, SpriteKind.Player)
        mySprite.x = x
        mySprite.y = y
        pause(100)
    }
})
function level3 () {
    game.showLongText("The mutated duck is now slightly faster!", DialogLayout.Full)
    lvl3 = true
    tiles.setCurrentTilemap(tilemap`level0`)
    Cure1 = false
    cure2 = false
    Cure3 = false
    final_level = false
    lvl2 = false
    lvl4 = false
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
    for (let index = 0; index < 10; index++) {
        Normal = sprites.create(img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 5 d f . . 
            . . . . b 5 5 1 f f 5 d 4 c . . 
            . . . . b 5 5 d f b d d 4 4 . . 
            . b b b d 5 5 5 5 5 4 4 4 4 4 b 
            b d d d b b d 5 5 4 4 4 4 4 b . 
            b b d 5 5 5 b 5 5 5 5 5 5 b . . 
            c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
            c b d c d 5 5 b 5 5 5 5 5 5 b . 
            . c d d c c b d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Friend)
        tiles.placeOnRandomTile(Normal, sprites.dungeon.hazardWater)
    }
    one = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .........bb.........
        ........cccc........
        ........cccc........
        .........ff.........
        .........bf.........
        .........bb.........
        ........bbbb........
        .......bbbbbb.......
        .......bbbbbb.......
        .......bbbbbb.......
        .......bbbbbc.......
        ........cccc........
        ....................
        ....................
        `, SpriteKind.Part1)
    tiles.placeOnRandomTile(one, sprites.dungeon.hazardWater)
    Two = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ........4eee........
        .......eeeeee.......
        .........cc.........
        .........ec.........
        ........eeee........
        .......ee4eee.......
        ......ee4eeeee......
        .....ee4eeeeeee.....
        .....eeeeeeeeee.....
        .....eeeeeeeecc.....
        ......eeeeeecc......
        .......eccccc.......
        ....................
        ....................
        `, SpriteKind.Part2)
    tiles.placeOnRandomTile(Two, sprites.dungeon.hazardWater)
    Three = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .........888........
        .........888........
        ......888888888.....
        ........fffff.......
        .......9999999......
        .......9999999......
        .......9999999......
        .......9999999......
        .......9999999......
        .......9999999......
        ......888888888.....
        ......fffffffff.....
        ....................
        ....................
        `, SpriteKind.Part3)
    tiles.placeOnRandomTile(Three, sprites.dungeon.hazardWater)
    duck4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 8 7 b . . . 
        . . . . . . . . . 8 7 8 . . . . 
        . . . . . . 8 8 8 8 8 8 . . . . 
        . . . . . 8 8 7 7 7 7 7 8 . . . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . . 
        . . 8 7 7 8 7 5 1 2 7 5 4 2 . . 
        . . 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 . 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        . . c 8 5 5 5 5 5 7 7 7 8 8 . . 
        . . . c c c c c c c c 8 8 . . . 
        `, SpriteKind.Enemy)
    fight = true
    enimies = true
    duck4.follow(mySprite, 5)
}
function level_2 () {
    game.showLongText("You are now entering the main section of the grassland save as many normal ducks as you can and cure the rest. ", DialogLayout.Full)
    tiles.setCurrentTilemap(tilemap`level8`)
    lvl1 = false
    Cure1 = false
    cure2 = false
    Cure3 = false
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    lvl2 = true
    lvl3 = false
    lvl4 = false
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
    for (let index = 0; index < 10; index++) {
        Normal = sprites.create(img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 5 d f . . 
            . . . . b 5 5 1 f f 5 d 4 c . . 
            . . . . b 5 5 d f b d d 4 4 . . 
            . b b b d 5 5 5 5 5 4 4 4 4 4 b 
            b d d d b b d 5 5 4 4 4 4 4 b . 
            b b d 5 5 5 b 5 5 5 5 5 5 b . . 
            c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
            c b d c d 5 5 b 5 5 5 5 5 5 b . 
            . c d d c c b d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Friend)
        tiles.placeOnRandomTile(Normal, sprites.castle.tileDarkGrass2)
    }
    one = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .........bb.........
        ........cccc........
        ........cccc........
        .........ff.........
        .........bf.........
        .........bb.........
        ........bbbb........
        .......bbbbbb.......
        .......bbbbbb.......
        .......bbbbbb.......
        .......bbbbbc.......
        ........cccc........
        ....................
        ....................
        `, SpriteKind.Part1)
    tiles.placeOnRandomTile(one, sprites.castle.tileGrass2)
    Two = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ........4eee........
        .......eeeeee.......
        .........cc.........
        .........ec.........
        ........eeee........
        .......ee4eee.......
        ......ee4eeeee......
        .....ee4eeeeeee.....
        .....eeeeeeeeee.....
        .....eeeeeeeecc.....
        ......eeeeeecc......
        .......eccccc.......
        ....................
        ....................
        `, SpriteKind.Part2)
    tiles.placeOnRandomTile(Two, sprites.castle.tileGrass1)
    Three = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .........888........
        .........888........
        ......888888888.....
        ........fffff.......
        .......9999999......
        .......9999999......
        .......9999999......
        .......9999999......
        .......9999999......
        .......9999999......
        ......888888888.....
        ......fffffffff.....
        ....................
        ....................
        `, SpriteKind.Part3)
    tiles.placeOnRandomTile(Three, sprites.castle.tileDarkGrass2)
    duck4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 8 7 b . . . 
        . . . . . . . . . 8 7 8 . . . . 
        . . . . . . 8 8 8 8 8 8 . . . . 
        . . . . . 8 8 7 7 7 7 7 8 . . . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . . 
        . . 8 7 7 8 7 5 1 2 7 5 4 2 . . 
        . . 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 . 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        . . c 8 5 5 5 5 5 7 7 7 8 8 . . 
        . . . c c c c c c c c 8 8 . . . 
        `, SpriteKind.Enemy)
    fight = true
    enimies = true
    duck4.follow(mySprite, 5)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Part2, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    cure2 = true
    sprites.destroy(otherSprite)
})
function level_9 () {
    lvl9 = true
    lvl8 = false
    scene.setBackgroundColor(7)
    tiles.setCurrentTilemap(tilemap`level9`)
    Cure1 = false
    cure2 = false
    Cure3 = false
    final_level = false
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    one = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .........bb.........
        ........cccc........
        ........cccc........
        .........ff.........
        .........bf.........
        .........bb.........
        ........bbbb........
        .......bbbbbb.......
        .......bbbbbb.......
        .......bbbbbb.......
        .......bbbbbc.......
        ........cccc........
        ....................
        ....................
        `, SpriteKind.Part1)
    tiles.placeOnTile(one, tiles.getTileLocation(5, 4))
    Two = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ........4eee........
        .......eeeeee.......
        .........cc.........
        .........ec.........
        ........eeee........
        .......ee4eee.......
        ......ee4eeeee......
        .....ee4eeeeeee.....
        .....eeeeeeeeee.....
        .....eeeeeeeecc.....
        ......eeeeeecc......
        .......eccccc.......
        ....................
        ....................
        `, SpriteKind.Part2)
    tiles.placeOnTile(Two, tiles.getTileLocation(5, 20))
    Three = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .........888........
        .........888........
        ......888888888.....
        ........fffff.......
        .......9999999......
        .......9999999......
        .......9999999......
        .......9999999......
        .......9999999......
        .......9999999......
        ......888888888.....
        ......fffffffff.....
        ....................
        ....................
        `, SpriteKind.Part3)
    tiles.placeOnTile(Three, tiles.getTileLocation(23, 10))
    duck4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 8 7 b . . . 
        . . . . . . . . . 8 7 8 . . . . 
        . . . . . . 8 8 8 8 8 8 . . . . 
        . . . . . 8 8 7 7 7 7 7 8 . . . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . . 
        . . 8 7 7 8 7 5 1 2 7 5 4 2 . . 
        . . 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 . 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        . . c 8 5 5 5 5 5 7 7 7 8 8 . . 
        . . . c c c c c c c c 8 8 . . . 
        `, SpriteKind.Enemy)
    for (let index = 0; index < 30; index++) {
        Normal = sprites.create(img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 5 d f . . 
            . . . . b 5 5 1 f f 5 d 4 c . . 
            . . . . b 5 5 d f b d d 4 4 . . 
            . b b b d 5 5 5 5 5 4 4 4 4 4 b 
            b d d d b b d 5 5 4 4 4 4 4 b . 
            b b d 5 5 5 b 5 5 5 5 5 5 b . . 
            c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
            c b d c d 5 5 b 5 5 5 5 5 5 b . 
            . c d d c c b d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Friend)
        tiles.placeOnRandomTile(Normal, sprites.swamp.swampTile1)
    }
    for (let index = 0; index < 10; index++) {
        sittingDucks = sprites.create(img`
            2 . . 2 . . 2 . . 2 . . 2 . 2 . 
            . 2 . . 2 . . 2 . . 8 7 b 2 . . 
            . . 2 . . 2 . . 2 8 7 8 2 . . . 
            . . . 2 . . 8 8 8 8 8 8 . . . 2 
            2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
            . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
            . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
            2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
            . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
            8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
            8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
            c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
            c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
            . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
            2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
            . 2 . c c c c c c c c 8 8 . 2 . 
            `, SpriteKind.mutated)
        tiles.placeOnRandomTile(sittingDucks, sprites.castle.tileDarkGrass2)
    }
    fight = true
    enimies = true
    duck4.follow(mySprite, 5)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Friend, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite, effects.fire, 500)
})
function Level_1 () {
    tiles.setCurrentTilemap(tilemap`level4`)
    Cure1 = false
    cure2 = false
    Cure3 = false
    duck4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 8 7 b . . . 
        . . . . . . . . . 8 7 8 . . . . 
        . . . . . . 8 8 8 8 8 8 . . . . 
        . . . . . 8 8 7 7 7 7 7 8 . . . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . . 
        . . 8 7 7 8 7 5 1 2 7 5 4 2 . . 
        . . 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 . 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        . . c 8 5 5 5 5 5 7 7 7 8 8 . . 
        . . . c c c c c c c c 8 8 . . . 
        `, SpriteKind.Enemy)
    fight = true
    enimies = true
    lvl1 = true
    lvl2 = false
    lvl3 = false
    lvl4 = false
    sprites.destroy(mySprite)
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
    tiles.placeOnTile(duck4, tiles.getTileLocation(5, 5))
    duck4.follow(mySprite, 25)
    one = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .........bb.........
        ........cccc........
        ........cccc........
        .........ff.........
        .........bf.........
        .........bb.........
        ........bbbb........
        .......bbbbbb.......
        .......bbbbbb.......
        .......bbbbbb.......
        .......bbbbbc.......
        ........cccc........
        ....................
        ....................
        `, SpriteKind.Part1)
    tiles.placeOnRandomTile(one, sprites.castle.tileDarkGrass3)
    Two = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ........4eee........
        .......eeeeee.......
        .........cc.........
        .........ec.........
        ........eeee........
        .......ee4eee.......
        ......ee4eeeee......
        .....ee4eeeeeee.....
        .....eeeeeeeeee.....
        .....eeeeeeeecc.....
        ......eeeeeecc......
        .......eccccc.......
        ....................
        ....................
        `, SpriteKind.Part2)
    tiles.placeOnRandomTile(Two, sprites.castle.tileDarkGrass2)
    Three = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .........888........
        .........888........
        ......888888888.....
        ........fffff.......
        .......9999999......
        .......9999999......
        .......9999999......
        .......9999999......
        .......9999999......
        .......9999999......
        ......888888888.....
        ......fffffffff.....
        ....................
        ....................
        `, SpriteKind.Part3)
    tiles.placeOnRandomTile(Three, sprites.castle.tileDarkGrass1)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    while (controller.right.isPressed()) {
        x = mySprite.x
        y = mySprite.y
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 2 2 2 2 f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `, SpriteKind.Player)
        mySprite.x = x
        mySprite.y = y
        pause(100)
        x = mySprite.x
        y = mySprite.y
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `, SpriteKind.Player)
        mySprite.x = x
        mySprite.y = y
        pause(100)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    while (controller.down.isPressed()) {
        x = mySprite.x
        y = mySprite.y
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . . f e 4 d d d d 4 e f e . . 
            . . f e f 2 2 2 2 e d d 4 e . . 
            . . e 4 f 2 2 2 2 e d d e . . . 
            . . . . f 4 4 5 5 f e e . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `, SpriteKind.Player)
        mySprite.x = x
        mySprite.y = y
        pause(100)
        x = mySprite.x
        y = mySprite.y
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player)
        mySprite.x = x
        mySprite.y = y
        pause(100)
        x = mySprite.x
        y = mySprite.y
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f e 4 d d d d 4 e f . . . 
            . . e 4 d d e 2 2 2 2 f e f . . 
            . . . e d d e 2 2 2 2 f 4 e . . 
            . . . . e e f 5 5 4 4 f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `, SpriteKind.Player)
        mySprite.x = x
        mySprite.y = y
        pause(100)
        x = mySprite.x
        y = mySprite.y
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player)
        mySprite.x = x
        mySprite.y = y
        pause(100)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Part1, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Cure1 = true
    sprites.destroy(otherSprite)
})
info.onLifeZero(function () {
    game.setGameOverEffect(false, effects.melt)
    game.gameOver(false)
})
function prologue () {
    game.setDialogFrame(img`
        88888..8888888888888888....88888.
        87768888777877787778777888867778.
        87777686767876767678767688777778.
        87767767667676676676766786776768.
        8677676767767767677677678676778..
        .877768777686767776867678667768..
        .886668888888888888888888886688..
        .888888866666666666666668877768..
        88677786666666666666666668766778.
        87766686666666666666666668776678.
        87667786666666666666666668677778.
        87777686666666666666666668866888.
        88866886666666666666666668677778.
        87777686666666666666666668776678.
        87667786666666666666666668666778.
        87766786666666666666666668777688.
        88677786666666666666666668766778.
        87766686666666666666666668776678.
        87667786666666666666666668677778.
        87777686666666666666666668866888.
        88866886666666666666666668677778.
        87777686666666666666666668776678.
        87667786666666666666666668666778.
        87766786666666666666666668777688.
        .867778866666666666666668888888..
        .886688888888888888888888866688..
        .867766876768677767686777867778..
        .8776768767767767677677676767768.
        86767768766767667667676676776778.
        87777788676787676767876768677778.
        87776888877787778777877788886778.
        88888..88888888888888888....8888.
        .................................
        `)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999777779999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999777779999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999777779999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999777779999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999997777799999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999977777999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999777779999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999777779999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999997777799999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999977777999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999977777999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999977777999999999999999999999999999999999999999fffff3fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff999999999999997777799999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999977777999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999777779999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999777779999999999999999999ffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999777779999999999999999999ffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999997777799999999999999999999fffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999997777799999999999999999999fffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999997777799999999999999999999fffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999777779999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999977777999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999977777999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999997777799999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999777779999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999777779999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999777779999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff999999999999997777799999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999777779999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999777779999977777999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999997777799999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999977777999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999997777799999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999997777799999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    duck = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 d 4 c . . 
        . . . . b 5 5 1 f f d d 4 4 4 b 
        . . . . b 5 5 d f b 4 4 4 4 b . 
        . . . b d 5 5 5 5 4 4 4 4 b . . 
        . . b d d 5 5 5 5 5 5 5 5 b . . 
        . b d d d d 5 5 5 5 5 5 5 5 b . 
        b d d d b b b 5 5 5 5 5 5 5 b . 
        c d d b 5 5 d c 5 5 5 5 5 5 b . 
        c b b d 5 d c d 5 5 5 5 5 5 b . 
        . b 5 5 b c d d 5 5 5 5 5 d b . 
        b b c c c d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Friend)
    duck1 = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 d 4 c . . 
        . . . . b 5 5 1 f f d d 4 4 4 b 
        . . . . b 5 5 d f b 4 4 4 4 b . 
        . . . b d 5 5 5 5 4 4 4 4 b . . 
        . . b d d 5 5 5 5 5 5 5 5 b . . 
        . b d d d d 5 5 5 5 5 5 5 5 b . 
        b d d d b b b 5 5 5 5 5 5 5 b . 
        c d d b 5 5 d c 5 5 5 5 5 5 b . 
        c b b d 5 d c d 5 5 5 5 5 5 b . 
        . b 5 5 b c d d 5 5 5 5 5 d b . 
        b b c c c d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Friend)
    duck2 = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 d 4 c . . 
        . . . . b 5 5 1 f f d d 4 4 4 b 
        . . . . b 5 5 d f b 4 4 4 4 b . 
        . . . b d 5 5 5 5 4 4 4 4 b . . 
        . . b d d 5 5 5 5 5 5 5 5 b . . 
        . b d d d d 5 5 5 5 5 5 5 5 b . 
        b d d d b b b 5 5 5 5 5 5 5 b . 
        c d d b 5 5 d c 5 5 5 5 5 5 b . 
        c b b d 5 d c d 5 5 5 5 5 5 b . 
        . b 5 5 b c d d 5 5 5 5 5 d b . 
        b b c c c d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Friend)
    duck3 = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 d 4 c . . 
        . . . . b 5 5 1 f f d d 4 4 4 b 
        . . . . b 5 5 d f b 4 4 4 4 b . 
        . . . b d 5 5 5 5 4 4 4 4 b . . 
        . . b d d 5 5 5 5 5 5 5 5 b . . 
        . b d d d d 5 5 5 5 5 5 5 5 b . 
        b d d d b b b 5 5 5 5 5 5 5 b . 
        c d d b 5 5 d c 5 5 5 5 5 5 b . 
        c b b d 5 d c d 5 5 5 5 5 5 b . 
        . b 5 5 b c d d 5 5 5 5 5 d b . 
        b b c c c d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Friend)
    duck4 = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 d 4 c . . 
        . . . . b 5 5 1 f f d d 4 4 4 b 
        . . . . b 5 5 d f b 4 4 4 4 b . 
        . . . b d 5 5 5 5 4 4 4 4 b . . 
        . . b d d 5 5 5 5 5 5 5 5 b . . 
        . b d d d d 5 5 5 5 5 5 5 5 b . 
        b d d d b b b 5 5 5 5 5 5 5 b . 
        c d d b 5 5 d c 5 5 5 5 5 5 b . 
        c b b d 5 d c d 5 5 5 5 5 5 b . 
        . b 5 5 b c d d 5 5 5 5 5 d b . 
        b b c c c d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Friend)
    duck.setPosition(19, 15)
    duck1.setPosition(136, 12)
    duck2.setPosition(14, 97)
    duck3.setPosition(138, 98)
    duck4.setPosition(78, 64)
    game.showLongText("In the anual meeting of Ducks United, the main representatives from all five major biomes were there. ", DialogLayout.Bottom)
    game.showLongText("All of a sudden the duck from the desert biome got a mouthful of water and turned a different collor", DialogLayout.Bottom)
    sprites.destroy(duck4)
    duck4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 8 7 b . . . 
        . . . . . . . . . 8 7 8 . . . . 
        . . . . . . 8 8 8 8 8 8 . . . . 
        . . . . . 8 8 7 7 7 7 7 8 . . . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . . 
        . . 8 7 7 8 7 5 1 2 7 5 4 2 . . 
        . . 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 . 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        . . c 8 5 5 5 5 5 7 7 7 8 8 . . 
        . . . c c c c c c c c 8 8 . . . 
        `, SpriteKind.Enemy)
    game.showLongText("The duck went crazy and chased all the other ducks away.", DialogLayout.Bottom)
    duck.setVelocity(-50, 0)
    duck4.follow(duck)
    pause(500)
    duck1.setVelocity(0, -50)
    duck1.follow(duck3)
    pause(500)
    duck2.setVelocity(-92, 0)
    duck4.follow(duck2)
    pause(500)
    duck3.setVelocity(0, 100)
    duck4.follow(duck3)
    pause(2000)
    sprites.destroy(duck4)
    game.showLongText("Your job is to collect the three items for the cure in each level and once you have all three you need to cure the infected ducks.", DialogLayout.Full)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.mutated, function (sprite, otherSprite) {
    if (Cure1 && (cure2 && Cure3)) {
        sprites.destroy(otherSprite)
    } else {
        info.changeLifeBy(-1)
        sprites.destroy(otherSprite)
    }
})
function level7 () {
    game.showLongText("Make it through the \"Maze\" of mutated ducks.", DialogLayout.Full)
    lvl7 = true
    tiles.setCurrentTilemap(tilemap`level7`)
    lvl6 = false
    Cure1 = false
    cure2 = false
    Cure3 = false
    final_level = false
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    one = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .........bb.........
        ........cccc........
        ........cccc........
        .........ff.........
        .........bf.........
        .........bb.........
        ........bbbb........
        .......bbbbbb.......
        .......bbbbbb.......
        .......bbbbbb.......
        .......bbbbbc.......
        ........cccc........
        ....................
        ....................
        `, SpriteKind.Part1)
    tiles.placeOnTile(one, tiles.getTileLocation(2, 5))
    Two = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ........4eee........
        .......eeeeee.......
        .........cc.........
        .........ec.........
        ........eeee........
        .......ee4eee.......
        ......ee4eeeee......
        .....ee4eeeeeee.....
        .....eeeeeeeeee.....
        .....eeeeeeeecc.....
        ......eeeeeecc......
        .......eccccc.......
        ....................
        ....................
        `, SpriteKind.Part2)
    tiles.placeOnTile(Two, tiles.getTileLocation(2, 7))
    tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 3))
    Three = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .........888........
        .........888........
        ......888888888.....
        ........fffff.......
        .......9999999......
        .......9999999......
        .......9999999......
        .......9999999......
        .......9999999......
        .......9999999......
        ......888888888.....
        ......fffffffff.....
        ....................
        ....................
        `, SpriteKind.Part3)
    tiles.placeOnTile(Three, tiles.getTileLocation(15, 7))
    duck4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 8 7 b . . . 
        . . . . . . . . . 8 7 8 . . . . 
        . . . . . . 8 8 8 8 8 8 . . . . 
        . . . . . 8 8 7 7 7 7 7 8 . . . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . . 
        . . 8 7 7 8 7 5 1 2 7 5 4 2 . . 
        . . 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 . 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        . . c 8 5 5 5 5 5 7 7 7 8 8 . . 
        . . . c c c c c c c c 8 8 . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(duck4, tiles.getTileLocation(2, 0))
    duck4.follow(mySprite, 5)
    fight = true
    enimies = true
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(1, 0))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(1, 1))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(1, 2))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(1, 3))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(1, 4))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(1, 5))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(1, 6))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(1, 7))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(1, 8))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(2, 8))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(3, 8))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(4, 8))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(5, 8))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(6, 8))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(7, 8))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(8, 8))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(9, 8))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(10, 8))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(11, 8))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(12, 8))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(13, 8))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(14, 8))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(15, 8))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(16, 8))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(17, 8))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(18, 8))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(3, 1))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(3, 2))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(3, 3))
    sittingDucks = sprites.create(img`
        2 . . 2 . . 2 . . 2 . . 2 . 2 . 
        . 2 . . 2 . . 2 . . 8 7 b 2 . . 
        . . 2 . . 2 . . 2 8 7 8 2 . . . 
        . . . 2 . . 8 8 8 8 8 8 . . . 2 
        2 . . . 2 8 8 7 7 7 7 7 8 . 2 . 
        . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
        . 8 5 7 8 7 7 7 7 7 7 7 7 8 . 2 
        2 . 8 7 7 8 7 5 1 2 7 5 4 2 2 . 
        . 2 8 5 7 7 8 1 2 2 7 4 4 c . . 
        8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
        8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
        c 5 5 5 c c 8 7 7 7 2 7 7 2 8 2 
        c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
        . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
        2 . c 8 5 5 5 5 5 7 7 7 8 8 . 2 
        . 2 . c c c c c c c c 8 8 . 2 . 
        `, SpriteKind.mutated)
    tiles.placeOnTile(sittingDucks, tiles.getTileLocation(3, 4))
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Friend, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
sprites.onCreated(SpriteKind.Player, function (sprite) {
    controller.moveSprite(sprite, 150, 150)
    scene.cameraFollowSprite(sprite)
    if (Cure3 == false || (cure2 == false || Cure1 == false)) {
        duck4.follow(sprite, 100)
        if (lvl3) {
            duck4.follow(sprite, 115)
        }
        if (lvl4) {
            duck4.follow(sprite, 125)
        }
        if (lvl7) {
            duck4.follow(sprite, 25)
        }
        if (lvl8) {
            duck4.follow(sprite, 25)
        }
        if (lvl9) {
            duck4.follow(sprite, 125)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Part3, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
    Cure3 = true
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Cure3 == true && (cure2 == true && Cure1 == true)) {
        enimies = false
        sprites.destroy(otherSprite)
    } else {
        info.changeLifeBy(-1)
        tiles.placeOnTile(otherSprite, tiles.getTileLocation(10, 10))
        if (lvl7) {
            tiles.placeOnTile(otherSprite, tiles.getTileLocation(2, 0))
        }
        if (lvl8) {
            tiles.placeOnTile(otherSprite, tiles.getTileLocation(2, 0))
        }
        otherSprite.follow(sprite)
    }
    if (enimies == false && final_level == false) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        sprites.destroy(mySprite)
        game.splash("Next Level!!")
        if (lvl1) {
            sprites.destroyAllSpritesOfKind(SpriteKind.Player)
            level_2()
        } else {
            if (lvl2) {
                sprites.destroyAllSpritesOfKind(SpriteKind.Friend)
                sprites.destroyAllSpritesOfKind(SpriteKind.Player)
                level3()
            } else {
                if (lvl3) {
                    sprites.destroyAllSpritesOfKind(SpriteKind.Friend)
                    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
                    level4()
                } else {
                    if (lvl4) {
                        sprites.destroyAllSpritesOfKind(SpriteKind.Friend)
                        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
                        level5()
                    } else {
                        if (lvl5) {
                            sprites.destroyAllSpritesOfKind(SpriteKind.Friend)
                            sprites.destroyAllSpritesOfKind(SpriteKind.mutated)
                            sprites.destroyAllSpritesOfKind(SpriteKind.Player)
                            level6()
                        } else {
                            if (lvl6) {
                                sprites.destroyAllSpritesOfKind(SpriteKind.Friend)
                                sprites.destroyAllSpritesOfKind(SpriteKind.mutated)
                                sprites.destroyAllSpritesOfKind(SpriteKind.Player)
                                level7()
                            } else {
                                if (lvl7) {
                                    sprites.destroyAllSpritesOfKind(SpriteKind.Friend)
                                    sprites.destroyAllSpritesOfKind(SpriteKind.mutated)
                                    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
                                    level8()
                                } else {
                                    if (lvl8) {
                                        sprites.destroyAllSpritesOfKind(SpriteKind.Friend)
                                        sprites.destroyAllSpritesOfKind(SpriteKind.mutated)
                                        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
                                        level_9()
                                    } else {
                                        if (lvl9) {
                                            sprites.destroyAllSpritesOfKind(SpriteKind.Friend)
                                            sprites.destroyAllSpritesOfKind(SpriteKind.mutated)
                                            sprites.destroyAllSpritesOfKind(SpriteKind.Player)
                                            level_9()
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
let duck3: Sprite = null
let duck2: Sprite = null
let duck1: Sprite = null
let duck: Sprite = null
let lvl9 = false
let lvl1 = false
let lvl2 = false
let lvl5 = false
let lvl6 = false
let Normal: Sprite = null
let lvl3 = false
let lvl4 = false
let y = 0
let x = 0
let sittingDucks: Sprite = null
let enimies = false
let fight = false
let Three: Sprite = null
let Two: Sprite = null
let one: Sprite = null
let lvl8 = false
let lvl7 = false
let mySprite: Sprite = null
let maybe = ""
let final_level = false
let Cure3 = false
let cure2 = false
let Cure1 = false
let duck4: Sprite = null
info.setScore(0)
duck4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 8 7 b . . . 
    . . . . . . . . . 8 7 8 . . . . 
    . . . . . . 8 8 8 8 8 8 . . . . 
    . . . . . 8 8 7 7 7 7 7 8 . . . 
    . 8 8 8 8 8 7 7 7 7 7 7 7 8 . . 
    . 8 5 7 8 7 7 7 7 7 7 7 7 8 . . 
    . . 8 7 7 8 7 5 1 2 7 5 4 2 . . 
    . . 8 5 7 7 8 1 2 2 7 4 4 c . . 
    8 8 5 8 7 7 7 5 2 8 4 4 4 4 4 8 
    8 5 5 c 5 7 7 8 7 4 4 4 4 4 8 . 
    c 5 5 5 c c 8 7 7 7 2 7 7 2 8 . 
    c 8 5 5 5 5 5 7 7 7 2 7 7 2 8 . 
    . c 5 5 5 5 5 5 7 7 7 7 7 5 8 . 
    . . c 8 5 5 5 5 5 7 7 7 8 8 . . 
    . . . c c c c c c c c 8 8 . . . 
    `, SpriteKind.Enemy)
Cure1 = false
cure2 = false
Cure3 = false
info.setLife(10)
game.setDialogFrame(img`
    ..................................................................
    ............fff........fff.............fff..............ffff......
    ...........fddbf......fbdbf...........fbdbf............fbddf......
    ...........fddbbf.....fdddffff........fdddffff...fff..ffddbff.....
    ...........fddddffffffbdddbddbffffffffbdddbddbffffddffddddddf.....
    ...fff....fdddddfddddddddbbddddddddddddddbbddddddfdddddbccddf.....
    .fffddf..fddffffddddddddddbbddddddddddddddbbdddddffbddbbddff......
    .fdbddfffddfffdddfffffbdddbddbffffffffbdddbddbfffefddccbddf.......
    .fdddcddddffeffffeeeeefbdbfddfeeeeeeeefbdbfddfeeeefffcddddf.......
    .fbddcddddfeeeeeeeeeeeefffffffeeeeeeeeefffffffeeeeeeefdddddf......
    ..ffdbbbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffddf.....
    ...fddbcddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddfff..
    ....fddccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddddf.
    ....fdddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffddddf.
    ...fddbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdfddbbf.
    ...fddfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdfddbf..
    ...ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddfff...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fbddbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fdddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fddbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbff..
    ..ffbbbbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdddddbf.
    .fbddbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddddf.
    .fdddddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbddbf.
    .fbdddddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbbbbff..
    ..ffbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbddf...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddf...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbddbf...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fbddbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fdddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fddbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbff..
    ..ffbbbbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdddddbf.
    .fbddbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddddf.
    .fdddddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbddbf.
    .fbdddddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbbbbff..
    ..ffbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbddf...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddf...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbddbf...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fffddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffff...
    ..fbddfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffddf...
    .fbbddfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdbddf...
    .fddddfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddf....
    .fddddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffccddf....
    ..fffddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddcbddf...
    .....fddfffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbbbdff..
    ......fdddddfeeeeeeefffffffeeeeeeeeefffffffeeeeeeeeeeeefddddcddbf.
    .......fddddcfffeeeefddfbdbfeeeeeeeefddfbdbfeeeeeffffeffddddcdddf.
    .......fddbccddfefffbddbdddbffffffffbddbdddbfffffdddfffddfffddbdf.
    ......ffddbbddbffdddddbbddddddddddddddbbddddddddddffffddf..fddfff.
    .....fddccbdddddfddddddbbddddddddddddddbbddddddddfdddddf....fff...
    .....fddddddffddffffbddbdddbffffffffbddbdddbffffffddddf...........
    .....ffbddff..fff...ffffdddf........ffffdddf.....fbbddf...........
    ......fddbf............fbdbf...........fbdbf......fbddf...........
    ......ffff..............fff.............fff........fff............
    ..................................................................
    `)
let start = true
final_level = false
while (start) {
    maybe = game.askForString("Would you like to see the pologue? yes or no", 3)
    if (maybe == "yes") {
        prologue()
        mySprite = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player)
        game.showLongText("Collect all three parts of the cure to cure the ducks. Don't get hit by the mutated ducks before you collect all the parts of the cure. ", DialogLayout.Full)
        game.showLongText("Once you collect all three parts of the cure touch the mutated duck to complete the level.", DialogLayout.Full)
        sprites.destroy(duck4)
        Level_1()
        start = false
    } else if (maybe == "no") {
        mySprite = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player)
        game.showLongText("Collect all three parts of the cure to cure the ducks. Don't get hit by the mutated ducks before you collect all the parts of the cure. ", DialogLayout.Full)
        game.showLongText("Once you collect all three parts of the cure touch the mutated duck to complete the level.", DialogLayout.Full)
        sprites.destroy(duck4)
        Level_1()
        start = false
    } else {
        game.splash("That is not a valid answer.")
    }
}
