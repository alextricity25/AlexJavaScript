const dataMuseUrl = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jjb=';

const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

//AJAX function
const getSuggestions = () => {
	const wordQuery = inputField.value;
	const endPoint = dataMuseUrl + queryParams + wordQuery;

	const xhr = new XMLHttpRequests();
	xhr.responseType = 'json';

	xhr.onreadystatechange = () => {
		if (xhr.readyState === XMLHttpResponse.DONE) {
			renderWordResponse(xhr.response);
		}
	};
	xhr.open('GET', endpoint);
	xhr.send();
};

const displaySuggestions = (event) => {
	event.preventDefault();
	while(responseField.firstChild){
		responseField.removeChild(responseField.firstChild);
	};
	getSuggestions();
};

submit.addEventListener('click', displaySuggestions);
