let timer = 0
input.onButtonPressed(Button.A, function () {
    timer = randint(5, 15)
    basic.showIcon(IconNames.Yes)
    while (0 < timer) {
        timer += -1
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Forever)
        basic.pause(1000)
    }
    music.stopAllSounds()
    basic.showString("GAMEOVER!")
})
