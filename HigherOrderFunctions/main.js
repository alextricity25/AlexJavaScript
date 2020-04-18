// Functions are objects in JavaScript
const myfunction = () => {
	console.log("hello there");
}
const myfunction2 = myfunction;
myfunctions2();

// Higher order functions with callback
const timeFuncRuntime = funcParameter => {
	let t1 = Date.now();
	funcParameter();
	let t2 = Date.now();
	return t2 - t1;
}
const addOneToOne = () => 1 + 1;
timeFuncRuntime(addOneToOne);
