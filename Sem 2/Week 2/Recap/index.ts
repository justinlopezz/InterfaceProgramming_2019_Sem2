// --------------------------------------- DataTypes

let num = 3;
console.log(num);

let FirstName: string = "Justin";

let EarthIsFlat: boolean = true;
let Decimal: number = 2.2;

let CookiesInTheJar: null = null;
let Area51: undefined = undefined;

let LastName = "Lopez";

// --------------------------------------- Arrays

//Example

let ListOfStudents: string[] = ["Justin", "Max", "Chloe"];
let ListOfNums: Array<number> = [1,2,3,4];

// Activity

let Animals: string[] = ["Cow", "Sheep", "Dog", "Cat"];

// My Attempt Of Looping

var arrayLength = Animals.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(Animals[i]);
}

//Fancy Way Of Looping

Animals.forEach(i => {
    console.log(i);
});

// --------------------------------------- Classes

//Example

class Planet {
    public Name: string;
    public Mass: number;

    constructor(Name:string, Mass:number){
        this.Name = Name;
        this.Mass = Mass;
    }

    /* Quicker Way of Creating Constructors

    constructor(private Name:string, private Mass:number){
        this.Name = Name;
        this.Mass = Mass;
    }

    */

    // Methods

    public SayHello(str : string): string {
        return str + this.Name;
    }
}

let pl: Planet = new Planet ("Earth", 345);

console.log(pl.Name);
console.log(pl.Mass);
console.log(pl.SayHello("Say Hello"))

// Activity

class Product{
    public ID: string;
    public Cost: number;

    constructor(ID:string, Cost: number){
        this.ID = ID;
        this.Cost = Cost;
    }

    public SetID(strID : string) : string {
        return strID + this.ID;
    }

    public SetCost(numCost : number) : number {
        return numCost + this.Cost; 
    }
}

class Book extends Product{ // Extends <------ is the inheritence
    private Title: string;
    private Author: string;

    constructor(_ID: string, _Cost: number, Title: string, Author: string){
        super(_ID, _Cost); // Super <---- Constructor Of The Parent Class
        this.Title = Title;
        this.Author = Author;
    }

    public GetTitle (strTitle : string) : string {
        return strTitle + this.Title;
    }

    public GetAuthor (strAuthor : string) : string {
        return strAuthor + this.Author;
    }
}

class BluRay extends Product{ // Extends <------ is the inheritence
    private Title: string;
    private Year: number;

    constructor(_ID: string, _Cost: number, Title: string, Year: number){
        super(_ID, _Cost); // Super <---- Constructor Of The Parent Class
        this.Title = Title;
        this.Year = Year;
    }

    public GetTitle (strTitle : string) : string {
        return strTitle + this.Title;
    }

    public GetAuthor (numYear : number) : number {
        return numYear + this.Year;
    }
}
