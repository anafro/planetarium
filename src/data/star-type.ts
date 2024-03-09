import Temperature from "./temperature";
import Star from "./star";

export default class StarType {
   static readonly O = new StarType(Temperature.kelvins(30_000));
   static readonly B = new StarType(Temperature.kelvins(20_000));
   static readonly A = new StarType(Temperature.kelvins(10_000));
   static readonly F = new StarType(Temperature.kelvins(7_000));
   static readonly G = new StarType(Temperature.kelvins(6_000));
   static readonly K = new StarType(Temperature.kelvins(4_000));
   static readonly M = new StarType(Temperature.kelvins(3_000));
   static readonly ALL: StarType[] = [StarType.O, StarType.B, StarType.A, StarType.F, StarType.G, StarType.K, StarType.M];
   readonly minTemperature: Temperature;

   private constructor(minTemperature: Temperature) {
      this.minTemperature = minTemperature;
   }

   isStarHotEnough(star: Star): boolean {
      return star.temperature.kelvin > this.minTemperature.kelvin;
   }

   static of(star: Star): StarType {
      for(let type of this.ALL) {
         if(type.isStarHotEnough(star)) {
            return type;
         }
      }

      return StarType.M;
   }
};