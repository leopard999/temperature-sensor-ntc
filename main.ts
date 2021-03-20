let temperature = 0
basic.forever(function () {
    temperature = pins.analogReadPin(AnalogPin.P0) - 230
    basic.showNumber(temperature)
    basic.pause(100)
})
