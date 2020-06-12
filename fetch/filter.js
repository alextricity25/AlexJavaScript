function filter_array(array) {
	array = array.filter(isJunk_data);
	return array;
}

function filter_array2(array) {
	array = array.map(isJunk_data);
	return array;
}

function isJunk_data(value) {
	if(value !== false || value !== null || value !== 0 || value !== "") {
		return value;
	}
}

console.log(filter_array([1,2,0,"",null, false]));
console.log(filter_array2([1,2,0,"",null, false]));


