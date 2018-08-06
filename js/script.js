'use strict'

function Phone(brand, price, color, warranty) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.warranty = warranty;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}
Phone.prototype.warrantyInfo = function() {
	console.log("The " + this.brand + " warranty is " + this.warranty + " years");
}

var iPhone6S = new Phone("Apple", 2250, "silver",3);
var SamsungGalaxyS6 = new Phone("Samsung", 1800, "red",4);
var OnePlusOne = new Phone("OnePlusOne", 1200, "black",2);

iPhone6S.printInfo();
iPhone6S.warrantyInfo();
SamsungGalaxyS6.printInfo();
SamsungGalaxyS6.warrantyInfo();
OnePlusOne.printInfo();
OnePlusOne.warrantyInfo();