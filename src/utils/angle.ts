export default class Angle {
    static readonly DEGREE = new Angle(Math.PI / 180);
    static readonly RADIAN = new Angle(1);
    readonly radians: number;

    constructor(radians: number) {
        this.radians = radians;
    }

    scale(factor: number): Angle {
        return new Angle(this.radians * factor);
    }

    static degrees(degrees: number) {
        return Angle.DEGREE.scale(degrees);
    }

    static radians(radians: number): Angle {
        return new Angle(radians);
    }
}