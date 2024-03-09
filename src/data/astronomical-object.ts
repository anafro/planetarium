import Angle from "./angle";

export default class AstronomicalObject {
    readonly name: string;
    readonly axialTilt: Angle;

    constructor(name: string, axialTilt: Angle) {
        this.name = name;
        this.axialTilt = axialTilt;
    }
}