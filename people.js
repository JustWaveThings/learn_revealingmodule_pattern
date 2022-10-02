const people = (function () {
	let people = ['James', 'Terry'];

	// cache DOM

	const addButton = document.querySelector('#addPerson');
	const inputName = document.querySelector('input');
	const displayOfPeople = document.querySelector('ul');

	// bind events
	addButton.addEventListener('click', addPerson);
	inputName.addEventListener('keypress', (e) => {
		enterToAddPerson(e);
	});

	// render people initally
	people.forEach(_render);

	function _render(person) {
		const li = document.createElement('li');
		li.classList.add(person);
		const span = document.createElement('span');
		const i = document.createElement('i');
		i.classList.add('del');
		i.textContent = 'Delete';
		i.addEventListener('click', (e) => {
			deletePerson(e);
		});
		displayOfPeople.appendChild(li);
		li.appendChild(i);
		li.insertBefore(span, i);
		span.textContent = person;
	}

	function enterToAddPerson(e) {
		if (e.key === 'Enter') {
			addPerson();
		}
	}

	function addPerson(value) {
		typeof value === 'string'
			? people.push(value)
			: people.push(inputName.value);
		_render(people.slice(-1));
		inputName.value = '';
	}

	function deletePerson(e) {
		const nameToRemove = e.target.closest('li');
		const step = (parent = nameToRemove) => {
			parent.closest('li').remove();
			while (parent.firstChild) {
				parent.removeChild(parent.firstChild);
			}
		};
		step();
	}
	return {
		addPerson,
		deletePerson,
	};
})();
