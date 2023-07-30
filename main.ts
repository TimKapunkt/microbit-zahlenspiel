input.onButtonPressed(Button.A, function () {
    zahl += 1
})
input.onButtonPressed(Button.AB, function () {
    zahl_von_microbit += randint(5, -5)
    basic.showString("Meine Zahl ist:")
    basic.showNumber(zahl_von_microbit)
    if (zahl_von_microbit == zahl) {
        basic.showString("Gewonnen!!!!!!!!!!!!")
        music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
    } else {
        basic.showString("Leider Verloren!")
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    }
})
input.onButtonPressed(Button.B, function () {
    zahl += -1
})
let zahl_von_microbit = 0
let zahl = 0
zahl = 0
zahl_von_microbit = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    basic.showNumber(zahl)
    if (zahl > 5) {
        zahl = 5
    }
    if (zahl < -5) {
        zahl = -5
    }
})
