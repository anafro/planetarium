import {multiply} from "./bigints";

export default class LengthSpan {
    static readonly ASTRONOMICAL_UNIT = new LengthSpan(149_597_871n);
    static readonly LIGHT_YEAR = new LengthSpan(9_460_730_472_580n);

    readonly kilometers: bigint;

    constructor(kilometers: bigint) {
        this.kilometers = kilometers;
    }

    calculateScaleDifference(that: LengthSpan): bigint {
        return this.kilometers / that.kilometers;
    }

    scale(factor: number): LengthSpan {
        return new LengthSpan(multiply(this.kilometers, factor));
    }

    static kilometers(kilometers: bigint): LengthSpan {
        return new LengthSpan(kilometers);
    }

    static astronomicalUnits(astronomicalUnits: number): LengthSpan {
        return this.ASTRONOMICAL_UNIT.scale(astronomicalUnits);
    }
}