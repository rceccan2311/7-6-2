let sonido = 0
let strip = neopixel.create(DigitalPin.P0, 4, NeoPixelMode.RGB)
basic.forever(function () {
    sonido = input.soundLevel()
    basic.showNumber(sonido)
    if (sonido > 50) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else {
        maqueen.motorStop(maqueen.Motors.M1)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
})
