const btnAddAppointement = document.querySelector('[data-js="btnAppointebt"]');
const formElementAdd = document.querySelector('[data-js="formAdd"]');
const selectDay = document.querySelector('[data-js="selectDay"]');

btnAddAppointement.addEventListener('click', () => {
  formElementAdd.classList.toggle('active');
});

selectDay.addEventListener('change', (e) => {
	const appointementDay = document.querySelector(`${e.target.value}`);
	console.log(appointementDay);
});
