// --------------------------------------- DataTypes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var num = 3;
console.log(num);
var FirstName = "Justin";
var EarthIsFlat = true;
var Decimal = 2.2;
var CookiesInTheJar = null;
var Area51 = undefined;
var LastName = "Lopez";
// --------------------------------------- Arrays
//Example
var ListOfStudents = ["Justin", "Max", "Chloe"];
var ListOfNums = [1, 2, 3, 4];
// Activity
var Animals = ["Cow", "Sheep", "Dog", "Cat"];
// My Attempt Of Looping
var arrayLength = Animals.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(Animals[i]);
}
//Fancy Way Of Looping
Animals.forEach(function (i) {
    console.log(i);
});
// --------------------------------------- Classes
//Example
var Planet = /** @class */ (function () {
    function Planet(Name, Mass) {
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
    Planet.prototype.SayHello = function (str) {
        return str + this.Name;
    };
    return Planet;
}());
var pl = new Planet("Earth", 345);
console.log(pl.Name);
console.log(pl.Mass);
console.log(pl.SayHello("Say Hello"));
// Activity
var Product = /** @class */ (function () {
    function Product(ID, Cost) {
        this.ID = ID;
        this.Cost = Cost;
    }
    Product.prototype.SetID = function (strID) {
        return strID + this.ID;
    };
    Product.prototype.SetCost = function (numCost) {
        return numCost + this.Cost;
    };
    return Product;
}());
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(_ID, _Cost, Title, Author) {
        var _this = _super.call(this, _ID, _Cost) || this;
        _this.Title = Title;
        _this.Author = Author;
        return _this;
    }
    Book.prototype.GetTitle = function (strTitle) {
        return strTitle + this.Title;
    };
    Book.prototype.GetAuthor = function (strAuthor) {
        return strAuthor + this.Author;
    };
    return Book;
}(Product));
var BluRay = /** @class */ (function (_super) {
    __extends(BluRay, _super);
    function BluRay(_ID, _Cost, Title, Year) {
        var _this = _super.call(this, _ID, _Cost) || this;
        _this.Title = Title;
        _this.Year = Year;
        return _this;
    }
    BluRay.prototype.GetTitle = function (strTitle) {
        return strTitle + this.Title;
    };
    BluRay.prototype.GetAuthor = function (numYear) {
        return numYear + this.Year;
    };
    return BluRay;
}(Product));
