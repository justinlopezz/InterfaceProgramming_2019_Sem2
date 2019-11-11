export class Users {
    id: number;
    name: string;
    username: string;
    email: string;
    
    address : Address;
    
    phone: number;
    website: string;
    
    company : Company;

    constructor(id:number, name:string, username:string, email:string, phone:number, website:string, address:Address, company:Company ){
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.website = website;
        this.address = address;
        this.company = company;
    }
}

export class Address{
    street: string;
    suite: string;
    city: string;
    zipcode: number;

    geo: Geo;

    constructor(street:string, suite:string, city:string, zipcode:number, geo:Geo){
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = geo;
    }
}

export class Geo{
    lat: number;
    lng: number;

    constructor(lat:number, lng:number){
        this.lat = lat;
        this.lng = lng;
    }
}

export class Company {
    name: string;
    catchPhrase: string; 
    bs: string;

    constructor(name:string, catchPhrase:string, bs:string){
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }
}

