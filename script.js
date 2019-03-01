const btnAddAppointement = document.querySelector('[data-js="btnAppointebt"]');
const formElementAdd = document.querySelector('[data-js="formAdd"]');
const selectDay = document.querySelector('[data-js="selectDay"]');
const helpAlert = document.querySelector('[data-js="helpAlert"]');
const helpError = document.querySelector('[data-js="helpError"]');
const addForm = document.querySelector('[data-js="addForm"]');
const titleForm = document.querySelector('[data-js="titleForm"]');

function htmlAppintementDay(day, title) {
	const elementCalendar = document.querySelector(`[data-js="${day}"]`);
	const elementHTML = `<div class="calendar__appointment_item">
		<h2>${title}</h2>
		<div class="calendar__apointment_actions">
			<button class="calendar__apointment_button btn-edit" data-edit="${day}" data-title="${title}">
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" data-edit="${day}" data-title="${title}"><title>pencil</title><path data-edit="${day}" data-title="${title}" d="M27 0c2.761 0 5 2.239 5 5 0 1.126-0.372 2.164-1 3l-2 2-7-7 2-2c0.836-0.628 1.874-1 3-1zM2 23l-2 9 9-2 18.5-18.5-7-7-18.5 18.5zM22.362 11.362l-14 14-1.724-1.724 14-14 1.724 1.724z"></path></svg>
			</button>
			<button class="calendar__apointment_button btn-bin" data-bin="${day}">
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" data-bin="${day}"><title>bin</title><path data-bin="${day}" d="M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z"></path><path data-bin="${day}" d="M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z"></path></svg>
			</button>
		</div>
	</div>`;
	elementCalendar.innerHTML = elementHTML;
}

btnAddAppointement.addEventListener('click', () => {
  formElementAdd.classList.toggle('active');
});

selectDay.addEventListener('change', (e) => {
	const appointementDay = document.querySelector(`[data-js="${e.target.value}"]`);
	helpAlert.classList.remove('active');
	addForm.disabled = false;
	
	if (appointementDay.childNodes.length >= 1) {
		helpAlert.classList.add('active');
		addForm.disabled = true;
	}
});


function deleteAppointment() {
	const allButtonsDelete = document.querySelectorAll('[data-bin]');

	for(let el of allButtonsDelete){
		el.addEventListener('click', (e) => {
			let element = document.querySelector(`[data-js="${e.target.getAttribute('data-bin')}"]`);
			element.innerHTML = '';
  	});
	}

}

function editAppointment() {
	const allButtonsEdit = document.querySelectorAll('[data-edit]');

	for(let el of allButtonsEdit){
		el.addEventListener('click', (e) => {
			let day = e.target.getAttribute('data-edit');
			let title = e.target.getAttribute('data-title')
			let element = document.querySelector(`[data-js="${e.target.getAttribute('data-edit')}"]`);
			element.innerHTML = '';
			titleForm.value = title;
			selectDay.value = day;
			document.body.scrollTop = 0;
		  document.documentElement.scrollTop = 0;
		});
	}

}

addForm.addEventListener('click', () => {
	const valueTitle = document.querySelector('[data-js="titleForm"]');
	let textTitle = valueTitle.value;
	let textDay = document.querySelector('[data-js="selectDay"]').value;

	if (valueTitle.value === '' || textDay === 'Day') {
		helpError.classList.add('active');
		return
	}	

	valueTitle.value = '';
	selectDay.selectedIndex = 0;
	htmlAppintementDay(textDay, textTitle);

	deleteAppointment();
	editAppointment();
});

titleForm.addEventListener('blur', (e) => {
	const value = e.target.value;
	if (value.length >= 1) {
		helpError.classList.remove('active');
		return
	}
});
