let estado_luz = 0
pins.onPulsed(DigitalPin.P12, PulseValue.High, function () {
    if (estado_luz == 0) {
        estado_luz = 1
    } else {
        estado_luz = 0
    }
})
basic.forever(function () {
    if (estado_luz == 1) {
        // LED
        pins.analogWritePin(AnalogPin.P1, 1023)
    } else {
        // LED
        pins.analogWritePin(AnalogPin.P1, 0)
    }
})
