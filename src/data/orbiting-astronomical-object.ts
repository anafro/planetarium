import AstronomicalObject from "./astronomical-object";
import LengthSpan from "./length-span";
import Speed from "./speed";
import Angle from "./angle";

export default class OrbitingAstronomicalObject<T extends AstronomicalObject> extends AstronomicalObject {
    owner: T | null;
    readonly distanceToPlanet: LengthSpan;
    readonly orbitalSpeed: Speed;


    constructor(name: string, axialTilt: Angle, owner: T | null, distanceToOwner: LengthSpan, orbitalSpeed: Speed) {
        super(name, axialTilt);
        this.owner = owner;
        this.distanceToPlanet = distanceToOwner;
        this.orbitalSpeed = orbitalSpeed;
    }
}