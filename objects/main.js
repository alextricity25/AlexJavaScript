//objects
let spaceship = {}; //spaceship is an empty object

let spaceship = {
	'Fuel Type': 'diesel',
	color: 'silver'
};

//dot notation
console.log(spaceship.color);

//bracket notation
console.log(spaceship['color']);

//assignments and mutability
const spaceship = {
	type: 'Shuttle'
};

spaceship = {type: 'alien'}; //Will give error
spaceship.type = 'alien'; // Changes the vaule of type
spaceship.speed = 'Mach 5' // Creates a new key of speed

//Deleting properties
delete spaceship.mission;

//Methods
const alienShip = {
	invade: function() {
		console.log("Hello! We have come to dominate your planet.")
	}
};

//New ES6 Syntax
const alienShip = {
	invade() {
		console.log("Hello! We have come to dominate your planet.")
	}
};

alienShip.invade();

//nested objects
const spaceship = {
	telescope: {
		yearBuilt: 2018,
		model: 'asdf',
		focalLength: 2032
	},
	crew: {
		captian: {
			name: 'Sandra',
			degree: 'Computer Engineering',
			encourageTeam() {
				console.log("We got this!")
			}
		}
	},
	engine: {
		model: 'Nimbus2000'
	},
	nanoelectronics: {
		computer: {
			terabytes: 100,
			monitors: 'HD'
		},
		'back-up': {
			battery: 'Lithium',
			terabytes: 50
		}
	}
};

//looping through objects
for (let crewMember in spaceship.crew) {
	console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
};
