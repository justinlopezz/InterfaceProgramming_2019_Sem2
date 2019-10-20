export class Planet {

    constructor(
        public name: string, 
        public moons: number, 
        public DistanceFromSun: number, 
        ){}

    public get_name(): string {
        return this.name;
    }

    public get_moons(): number {
        return this.moons;
    }

    public get_DistanceFromSun(): number {
        return this.DistanceFromSun;
    }
}