input.onButtonPressed(Button.A, function () {
    TIEMPO = TIEMPO + 30
    basic.showNumber(TIEMPO)
})
input.onButtonPressed(Button.AB, function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 161)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    espera = espera - -1
    for (let index = 0; index < TIEMPO; index++) {
        basic.pause(500)
        basic.showNumber(espera)
        espera += espera - -1
    }
    Maqueen_V5.motorStop(Maqueen_V5.Motors.All)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
})
input.onButtonPressed(Button.B, function () {
    TIEMPO = 0
    basic.showNumber(TIEMPO)
})
let espera = 0
let TIEMPO = 0
TIEMPO = 0
basic.forever(function () {
    if (TIEMPO == 0) {
        Maqueen_V5.motorStop(Maqueen_V5.Motors.All)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    }
})
