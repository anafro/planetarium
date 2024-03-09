import {multiply} from "./bigints";

export default class TimeSpan {
    static readonly MILLISECOND = new TimeSpan(1n);
    static readonly SECOND = new TimeSpan(1_000n);
    static readonly MINUTE = new TimeSpan(60_000n);
    static readonly HOUR = new TimeSpan(3_600_000n);
    static readonly DAY = new TimeSpan(86_400_000n);
    static readonly WEEK = new TimeSpan(604_800_000n);
    static readonly YEAR = new TimeSpan(31_536_000_000n);

    readonly milliseconds: bigint;

    constructor(milliseconds: bigint) {
        this.milliseconds = milliseconds;
    }

    calculateScaleDifference(that: TimeSpan): bigint {
        return this.milliseconds / that.milliseconds;
    }

    scale(factor: number): TimeSpan {
        return new TimeSpan(multiply(this.milliseconds, factor));
    }

    static milliseconds(milliseconds: number): TimeSpan {
        return TimeSpan.MILLISECOND.scale(milliseconds);
    }

    static seconds(milliseconds: number): TimeSpan {
        return TimeSpan.SECOND.scale(milliseconds);
    }

    static minutes(milliseconds: number): TimeSpan {
        return TimeSpan.MINUTE.scale(milliseconds);
    }

    static hours(milliseconds: number): TimeSpan {
        return TimeSpan.HOUR.scale(milliseconds);
    }

    static days(milliseconds: number): TimeSpan {
        return TimeSpan.DAY.scale(milliseconds);
    }

    static weeks(milliseconds: number): TimeSpan {
        return TimeSpan.WEEK.scale(milliseconds);
    }

    static years(milliseconds: number): TimeSpan {
        return TimeSpan.YEAR.scale(milliseconds);
    }
}