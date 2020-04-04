// Array example
var listItem = ['this', 'is', 'an', 'array'];

//Updating arrays
listItem[2] = 'updating';

//The .length property
const newYearsResolutions = ['Keep a journal', 'take a falconry class'];

console.log(newYearsResolutions.length) //Output 2

//The .push() Method
const itemTracker = ['item 0', 'item 1', 'item 2'];

itemTracker.push('item3', 'item 4');

console.log(itemTracker);

//The .pop() Method
const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop();

console.log(newItemTracker);
console.log(removed);

//Arrays and Functions
const flowers = ['peony', 'daffodil', 'marigold'];

functions addFlower(arr) {
	arr.push('lily');
}

addFlower(flowers);
console.log(flowers);

const nesterArr = [[1], [2, 3]];
console.log(nestedArr[1]);
console.log(nextedArr[1][0]);

//For loops
for (let counter = 0; counter < 4; counter++) {
	console.log(counter);
}

//Going backwards
for (let counter = 3; counter >= 0; counter--) {
	console.log(counter);
}

//Iterating through arrays
const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++) {
	console.log(animals[i]);
}

//Nested Loops
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
	for (let j = 0; j < yourArray.length; j++) {
		if (myArray[i] === yourArray[j]) {
			console.log('Both loops have the number: ' + yourArray[j]);
		}
	}
};

//While loops
let counterTwo = 1;
while (counterTwo < 4) {
	console.log(counterTwo);
	counterTwo++;
}

// Do...While Statements
let countString = '';
let i = 0;
do {
	countString = countString + i;
	i++;
} while (i < 5);

//Break keyword
for (let i = 0; i < 99; i++) {
	if (i > 2) {
		break;
	}
	console.log('Banana.');
}

console.log('Orange you glad I broke out of the loop!');
