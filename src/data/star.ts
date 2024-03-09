import AstronomicalObject from "./astronomical-object";
import Temperature from "./temperature";
import StarType from "./star-type";
import Angle from "./angle";

export default class Star extends AstronomicalObject {
    readonly temperature: Temperature;
    readonly type: StarType;

    constructor(name: string, axialTilt: Angle, temperature: Temperature) {
        super(name, axialTilt);
        this.temperature = temperature;
        this.type = StarType.of(this);
    }
}