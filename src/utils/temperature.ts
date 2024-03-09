export default class Temperature {
    static ABSOLUTE_ZERO = new Temperature(0);
    static ABSOLUTE_ZERO_CELSIUS = -273.15;
    static ABSOLUTE_ZERO_FAHRENHEIT = 459.67;
    static ABSOLUTE_ZERO_KELVIN = 0;
    kelvin: number;

    constructor(kelvin: number) {
        this.kelvin = kelvin;
    }

    static kelvins(degrees: number) {
        return new Temperature(degrees);
    }

    static fahrenheit(degrees: number) {
        const temperature = new Temperature(0);
        temperature.fahrenheit = degrees;

        return temperature;
    }

    static celsius(degrees: number) {
        const temperature = new Temperature(0);
        temperature.celsius = degrees;

        return temperature;
    }

    get fahrenheit() {
        return (this.kelvin + Temperature.ABSOLUTE_ZERO_CELSIUS) * 9 / 5 + 32;
    }

    set fahrenheit(degrees: number) {
        this.kelvin = 5 / 9 * degrees + Temperature.ABSOLUTE_ZERO_FAHRENHEIT;
    }

    get celsius() {
        return this.kelvin - Temperature.ABSOLUTE_ZERO_CELSIUS;
    }

    set celsius(degrees: number) {
        this.kelvin = degrees - Temperature.ABSOLUTE_ZERO_CELSIUS;
    }
}