const btnAddAppointement = document.querySelector('[data-js="btnAppointebt"]');
const formElementAdd = document.querySelector('[data-js="formAdd"]');
const selectDay = document.querySelector('[data-js="selectDay"]');
const helpAlert = document.querySelector('[data-js="helpAlert"]');
const addForm = document.querySelector('[data-js="addForm"]');

btnAddAppointement.addEventListener('click', () => {
  formElementAdd.classList.toggle('active');
});

selectDay.addEventListener('change', (e) => {
	const appointementDay = document.querySelector(`[data-js="${e.target.value}"]`);
	helpAlert.classList.remove('active');
	addForm.disabled = false;
	if (appointementDay.childNodes.length > 1) {
		helpAlert.classList.add('active');
		addForm.disabled = true;
	}
});
