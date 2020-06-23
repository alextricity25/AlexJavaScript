const my_list = [1,2,54,256,456,1204, 1493, 2599];

function recursiveBinarySearch(my_list, value, start, end) {
	let midpoint = Math.floor((start + end) / 2);
	if(my_list[midpoint] === value) {
		return midpoint;
	} else if(value > my_list[midpoint]) {
		return recursiveBinarySearch(my_list, value, midpoint + 1, end);
	} else if(value < my_list[midpoint]) {
		return recursiveBinarySearch(my_list, value, start, midpoint - 1);
	}
}

console.log(recursiveBinarySearch(my_list, 456, 0, my_list.length - 1));
