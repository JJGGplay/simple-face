input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # # . # #
        # # . # #
        . # . # .
        . . . . .
        `)
    music.playMelody("C5 B A G A E F D ", 120)
    while (true) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            . # # # .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
