const people = (function () {
	let people = ['James', 'Terry'];

	// cache DOM
	const addButton = document.querySelector('#addPerson');
	const input = document.querySelector('input');
	const displayOfPeople = document.querySelector('ul');
	// create dom elements for names to be rendered
	const li = document.createElement('li');
	const span = document.createElement('span');
	span.textContent = 'addedPerson';
	const i = document.createElement('i');
	i.classList.add('del');
	i.textContent = 'X';

	// render people
	displayOfPeople.appendChild(li);
	li.appendChild(i);
	li.insertBefore(span, i);
})();
