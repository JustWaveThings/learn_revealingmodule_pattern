const people = (function () {
	let people = ['James', 'Terry'];

	// cache DOM

	const addButton = document.querySelector('#addPerson');
	const inputName = document.querySelector('input');
	const displayOfPeople = document.querySelector('ul');

	// bind events
	addButton.addEventListener('click', addPerson);
	inputName.addEventListener('keypress', (e) => {
		_enterToAddPerson(e);
	});

	// first render
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

	function _reRenderArray() {
		_allRemoveStep(displayOfPeople);
		people.forEach(_render);
	}

	function _allRemoveStep(parent) {
		while (parent.firstChild) {
			parent.removeChild(parent.firstChild);
		}
	}
	function _removeStep(parent) {
		parent.remove();
		_allRemoveStep(parent);
	}

	function _enterToAddPerson(e) {
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
		console.log(people);
	}

	function deletePerson(e) {
		let i;
		if (typeof e === 'number') {
			i = e;
			people.splice(i, 1);
			_reRenderArray();
		} else {
			const nameToRemove = e.target.closest('li');
			const nameToPopFromArray = e.target.closest('li').classList[0];
			people.splice(people.indexOf(nameToPopFromArray), 1);
			_removeStep(nameToRemove);
			_reRenderArray();
		}
		console.log(people);
	}
	return {
		addPerson,
		deletePerson,
	};
})();
