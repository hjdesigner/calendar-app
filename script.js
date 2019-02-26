const btnAddAppointement = document.querySelector('[data-js="btnAppointebt"]');
const formElementAdd = document.querySelector('[data-js="formAdd"]');
const selectDay = document.querySelector('[data-js="selectDay"]');
const helpAlert = document.querySelector('[data-js="helpAlert"]');
const helpError = document.querySelector('[data-js="helpError"]');
const addForm = document.querySelector('[data-js="addForm"]');
const titleForm = document.querySelector('[data-js="titleForm"]');

function htmlAppintementDay(day, title) {
	const elementCalendar = document.querySelector(`[data-js="${day}"]`);
	const elementHTML = `<div class="calendar__appointment_item"><h2>${title}</h2></div>`;
	elementCalendar.innerHTML = elementHTML;
}

btnAddAppointement.addEventListener('click', () => {
  formElementAdd.classList.toggle('active');
});

selectDay.addEventListener('change', (e) => {
	const appointementDay = document.querySelector(`[data-js="${e.target.value}"]`);
	console.log(appointementDay.childNodes);
	helpAlert.classList.remove('active');
	addForm.disabled = false;
	if (appointementDay.childNodes.length >= 1) {
		helpAlert.classList.add('active');
		addForm.disabled = true;
	}
});

addForm.addEventListener('click', () => {
	const valueTitle = document.querySelector('[data-js="titleForm"]');
	if (valueTitle.value === '') {
		helpError.classList.add('active');
		return
	}

	let textTitle = valueTitle.value;
	let textDay = document.querySelector('[data-js="selectDay"]').value;

	valueTitle.value = '';
	selectDay.selectedIndex = 0;
	htmlAppintementDay(textDay, textTitle);
});

titleForm.addEventListener('blur', (e) => {
	const value = e.target.value;
	if (value.length >= 1) {
		helpError.classList.remove('active');
		return
	}
});
