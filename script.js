var taxi = {
	make: "SieMoCorp",
	model: "Taxi",
	year: 1955,
	color: "Yellow",
	passengers: 4,
	convertible: false,
	mileage: 281341
};

function prequal(car) {
	if (car.mileage > 100000) {
		return false;
	} else if (car.year > 1960) {
		return false;
	}
	return true;
};

worthALook = prequal(taxi);

if (worthALook) {
	console.log("Powinieneś zaintereswać się tym " + taxi.make + " " + taxi.model);
} else {
	console.log("Ten " + taxi.make + " " + taxi.model + " możesz sobie podarować.");
};