input.onButtonPressed(Button.A, function () {
    if (randint(1, 9) == 8) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # . .
            . # . . .
            . # # # .
            `)
    }
})
