//This keyword
const goat = {
	dietType: 'herbivore',
	makeSounds() {
		console.log('baaa');
	},
	diet() {
		console.log(this.dietType);
	}
};

goat.makeSound();

//Privacy
const backAccount = {
	_amount: 1000
};

//Getters
const person = {
	_firstName: 'John',
	_lastName: 'Doe',
	get fullName(){
		if (this._firstName && this._lastName){
			return `${this._firstName} ${this._lastName}`;
		} else {
			return 'Missing a first name or a last name.';
		}
	}
}

person.fullName;

//setters
const person = {
	_age: 37,
	set age(newAge){
		if (typeof newAge === 'number'){
			this._age = newAge;
		} else {
			console.log("You must assign a number to age");
		}
	}
};

person.age = 40;
console.log(person._age);
person.age = '50' //Logs: You must assign a number...

// Factory Functions
const monsterFactory = (name, age, energySrouce, catchPhrase) => {
	return {
		name: name,
		age: age,
		energySource: energySource,
		scare() {
			console.log(catchPhrase);
		}
	}
};

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); //BOO
