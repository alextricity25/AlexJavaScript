endpoint = "https://api.datamuse.com/words?rel_rhy=house";
const xhr = new XMLHttpRequest();

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
	if (xhr.readyState === XMLHttpRequest.DONE) {
		console.log(xhr.response);
	}
};

xhr.open('GET', endpoint);
xhr.send();
