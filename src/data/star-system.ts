import Planet from "./planet";
import Star from "./star";

export default class StarSystem implements Iterable<Planet> {
    readonly name: string;
    readonly star: Star;
    readonly planets: Planet[];

    constructor(name: string, star: Star, planets: Planet[]) {
        this.name = name;
        this.star = star;
        this.planets = planets;

        for(const planet of planets) {
            planet.star = star;
        }
    }

    [Symbol.iterator](): Iterator<Planet> {
        return this.planets.values();
    }
}