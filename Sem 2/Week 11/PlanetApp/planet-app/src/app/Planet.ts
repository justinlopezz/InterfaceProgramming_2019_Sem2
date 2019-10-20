export class Planet {
    
    name : string;
    moons : number;
    DistanceFromSun : number;

    constructor(name: string, moons: number, DistanceFromSun: number){
        this.name = name;
        this.moons = moons;
        this.DistanceFromSun = DistanceFromSun;
    }

}