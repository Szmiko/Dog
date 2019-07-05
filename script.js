var taxi = {
	make: "SieMoCorp",
	model: "Taxi",
	year: 1955,
	color: "Yellow",
	passengers: 4,
	convertible: false,
	mileage: 281341
};

var cadi = {
	make: "GM",
	model: "Cadillac",
	year: 1955,
	color: "jasnobrązowy",
	passengers: 5,
	convertible: false,
	mileage: 12892
};

var fiat = {
	make: "Fiat",
	model: "500",
	year: 1957,
	color: "szaroniebieski",
	passengers: 2,
	convertible: false,
	mileage: 88000
};

var chevy = {
	make: "Chevy",
	model: "Bel Air",
	year: 1957,
	color: "czerwony",
	passengers: 2,
	convertible: false,
	mileage: 1021
};

function prequal(car) {
	if (car.mileage > 100000) {
		return false;
	} else if (car.year > 1960) {
		return false;
	}
	return true;
};

worthALook1 = prequal(taxi);
worthALook2 = prequal(cadi);
worthALook3 = prequal(fiat);
worthALook4 = prequal(chevy);

if (worthALook1) {
	console.log("Powinieneś zaintereswać się tym " + taxi.make + " " + taxi.model);
} else {
	console.log("Ten " + taxi.make + " " + taxi.model + " możesz sobie podarować.");
};

if (worthALook2) {
	console.log("Powinieneś zaintereswać się tym " + cadi.make + " " + cadi.model);
} else {
	console.log("Ten " + cadi.make + " " + cadi.model + " możesz sobie podarować.");
};
if (worthALook3) {
	console.log("Powinieneś zaintereswać się tym " + fiat.make + " " + fiat.model);
} else {
	console.log("Ten " + fiat.make + " " + fiat.model + " możesz sobie podarować.");
};
if (worthALook4) {
	console.log("Powinieneś zaintereswać się tym " + chevy.make + " " + chevy.model);
} else {
	console.log("Ten " + chevy.make + " " + chevy.model + " możesz sobie podarować.");
};