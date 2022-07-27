input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Heart)
})
input.onSound(DetectedSound.Quiet, function () {
    basic.showIcon(IconNames.SmallHeart)
})
input.setSoundThreshold(SoundThreshold.Loud, 255)
basic.forever(function () {
    led.setBrightness(input.soundLevel())
})
