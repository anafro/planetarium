import Planet from "./planet";
import LengthSpan from "./length-span";
import Speed from "./speed";
import OrbitingAstronomicalObject from "./orbiting-astronomical-object";
import Angle from "./angle";

export default class Moon extends OrbitingAstronomicalObject<Planet> {

    constructor(name: string, axialTilt: Angle, distanceToPlanet: LengthSpan, orbitalSpeed: Speed) {
        super(name, axialTilt, null, distanceToPlanet, orbitalSpeed);
    }

    set planet(planet: Planet) {
        super.owner = planet;
    }

    get planet(): Planet {
        return super.owner as Planet;
    }
}