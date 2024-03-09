import LengthSpan from "./length-span";
import TimeSpan from "./time-span";

export default class Speed {
    readonly length: LengthSpan;
    readonly time: TimeSpan;

    constructor(length: LengthSpan, time: TimeSpan) {
        this.length = length;
        this.time = time;
    }

    static kms(kilometers: bigint): Speed {
        return new Speed(LengthSpan.kilometers(kilometers), TimeSpan.seconds(1));
    }

    calculateDistance(time: TimeSpan): LengthSpan {
        return this.length.scale(Number(this.time.calculateScaleDifference(time)));
    }
}