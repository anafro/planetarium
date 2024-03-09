import Angle from "./angle";
import OrbitingAstronomicalObject from "./orbiting-astronomical-object";
import Star from "./star";
import LengthSpan from "./length-span";
import Speed from "./speed";
import Moon from "./moon";

export default class Planet extends OrbitingAstronomicalObject<Star> {
    readonly inhabited: boolean;
    readonly moons: Moon[];

    constructor(name: string, axialTilt: Angle, distanceToStar: LengthSpan, orbitalSpeed: Speed, inhabited: boolean = false, moons: Moon[] = []) {
        super(name, axialTilt, null, distanceToStar, orbitalSpeed);
        this.inhabited = inhabited;
        this.moons = moons;

        for(const moon of moons) {
            moon.planet = this;
        }
    }

    set star(star: Star) {
        super.owner = star;
    }

    get star(): Star {
        return super.owner as Star;
    }
}