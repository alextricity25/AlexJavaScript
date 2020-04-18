//.forEach() Method

const groceries = ['brown sugar', 'salt', 'cranberries', 'walnuts'];

groceries.forEach(function(groceryItem) {
	console.log(' - ' + groceryItem);
});

//Map Method
const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map(numbers => {
	return numbers / 100;
})

//Filter method
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];

const shortWords => words.filter(word => {
	return word.length < 6;
});

//.findIndex() method
const jumbledNumbs = [123, 25, 87, 5, 9];

const lessThanTen = jumbledNums.findIndex(num => {
	return num < 10;
});

//.reduce() method
const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, curentValue) => {
	return accumulator + currentValue
})

console.log(summedNums)
