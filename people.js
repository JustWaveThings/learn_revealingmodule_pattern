const people = (function () {
	let people = ['James', 'Terry'];

	// cache DOM

	const addButton = document.querySelector('#addPerson');
	const inputName = document.querySelector('input');
	const displayOfPeople = document.querySelector('ul');

	// bind events
	addButton.addEventListener('click', addPerson);

	// render people initally
	people.forEach(_render);

	function _render(person) {
		const li = document.createElement('li');
		const span = document.createElement('span');
		const i = document.createElement('i');
		i.classList.add('del');
		i.textContent = 'Delete';
		displayOfPeople.appendChild(li);
		li.appendChild(i);
		li.insertBefore(span, i);
		span.textContent = person;
	}

	function addPerson() {
		people.push(inputName.value);
		console.log(people);
		_render(people.slice(-1));
	}

	const deleteButtons = document.querySelectorAll('i');
	//console.log(deleteButtons);
	deleteButtons.forEach((button) => {
		button.addEventListener('click', () => {
			console.log(`delete button clicked -- ${button.closest('li')}`);
		});
	});
	function deletePerson(e) {}
})();
