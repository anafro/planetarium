import StarSystem from "./star-system";
import Planet from "./planet";
import Star from "./star";
import Angle from "./angle";
import Temperature from "./temperature";
import LengthSpan from "./length-span";
import Speed from "./speed";
import Moon from "./moon";

const systems: readonly StarSystem[] = [
    new StarSystem(
        'Solar system',
        new Star("The Sun", Angle.degrees(7), Temperature.kelvins(5_772)),

        [
            new Planet('Mercury', Angle.degrees(0.01), LengthSpan.astronomicalUnits(0.4), Speed.kms(48n)),
            new Planet('Venus', Angle.degrees(177.3), LengthSpan.astronomicalUnits(0.72), Speed.kms(35n)),

            new Planet('Earth', Angle.degrees(23.26), LengthSpan.astronomicalUnits(1), Speed.kms(30n), true, [
                new Moon('The Moon', Angle.degrees(5), LengthSpan.kilometers(300_000n), Speed.kms(1n))
            ]),

            new Planet('Mars', Angle.degrees(25.19), LengthSpan.astronomicalUnits(1.52), Speed.kms(24n), false, [
                new Moon('Phobos', Angle.degrees(0), LengthSpan.kilometers(6_000n), Speed.kms(2n)),
                new Moon('Deimos', Angle.degrees(0), LengthSpan.kilometers(23_460n), Speed.kms(1n))
            ]),

            new Planet('Jupiter', Angle.degrees(3.13), LengthSpan.astronomicalUnits(5.2), Speed.kms(13n), false, [
                new Moon('Io', Angle.degrees(0), LengthSpan.kilometers(421_700n), Speed.kms(17n)),
                new Moon('Europa', Angle.degrees(0.1), LengthSpan.kilometers(670_900n), Speed.kms(14n)),
                new Moon('Ganymede', Angle.degrees(0.1), LengthSpan.kilometers(1_070_400n), Speed.kms(11n)),
                new Moon('Callisto', Angle.degrees(0.4), LengthSpan.kilometers(1_883_000n), Speed.kms(8n)),
            ]),

            new Planet('Saturn', Angle.degrees(26.73), LengthSpan.astronomicalUnits(9.54), Speed.kms(10n), false, [
                new Moon('Titan', Angle.degrees(0), LengthSpan.kilometers(1_200_000n), Speed.kms(17n)),
                new Moon('Rhea', Angle.degrees(0), LengthSpan.kilometers(1_272_000n), Speed.kms(17n)),
                new Moon('Enceladus', Angle.degrees(0), LengthSpan.kilometers(238_000n), Speed.kms(17n)),
                new Moon('Mimas', Angle.degrees(0), LengthSpan.kilometers(1_272_000n), Speed.kms(17n)),

            ]),
            new Planet('Uranus', Angle.degrees(97.77), LengthSpan.astronomicalUnits(19.22), Speed.kms(7n), false, [
                new Moon('Miranda', Angle.degrees(0), LengthSpan.kilometers(129_800n), Speed.kms(17n)),
                new Moon('Ariel', Angle.degrees(0), LengthSpan.kilometers(118_620n), Speed.kms(17n)),
                new Moon('Umbriel', Angle.degrees(0), LengthSpan.kilometers(266_000n), Speed.kms(17n)),
                new Moon('Titania', Angle.degrees(0), LengthSpan.kilometers(435_840n), Speed.kms(17n)),
                new Moon('Oberon', Angle.degrees(0), LengthSpan.kilometers(582_600n), Speed.kms(17n)),
            ]),

            new Planet('Neptune', Angle.degrees(28.32), LengthSpan.astronomicalUnits(30.06), Speed.kms(5n), false, [
                new Moon('Larissa', Angle.degrees(0), LengthSpan.kilometers(48_800n), Speed.kms(17n)),
                new Moon('Proteus', Angle.degrees(0), LengthSpan.kilometers(117_700n), Speed.kms(17n)),
            ]),
        ]
    )
];

export default systems;