basic.forever(function () {
    led.setBrightness(input.soundLevel())
    sound.mapImagesToVolume([
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `),
    images.createImage(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    ])
})
