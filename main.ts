input.onButtonPressed(Button.A, function () {
    fav += -1
    basic.showNumber(fav)
})
input.onGesture(Gesture.TiltLeft, function () {
    if (_22 == 1) {
        pixel.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.AB, function () {
    pixel = game.createSprite(2, 2)
    _22 = 1
})
input.onButtonPressed(Button.B, function () {
    fav += 1
    basic.showNumber(fav)
})
input.onGesture(Gesture.TiltRight, function () {
    if (_22 == 1) {
        pixel.change(LedSpriteProperty.X, 1)
    }
})
let pixel: game.LedSprite = null
let fav = 0
let _22 = 0
basic.showIcon(IconNames.Heart)
let word = "hello"
fav = 8
_22 = 0
