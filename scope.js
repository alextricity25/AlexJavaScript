const myGlobalVariable = 'Alex is awesome';
function awesomeFunction() {
	var localVariable = 'Alex is local'
	console.log(localVariable);
	console.log(myGlobalVariable);
};

awesomeFunction();
