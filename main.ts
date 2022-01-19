let num = 0

basic.forever(function () {
    if (num > 0) {
        basic.showNumber(num)
    } else {
        basic.clearScreen()
    }
})

input.onGesture(Gesture.Shake, function () {
    num = Math.randomRange(1, 6)
})

input.onButtonPressed(Button.A, function () {
    num = 0
})