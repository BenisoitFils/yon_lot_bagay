console.log('Test');



document
	.querySelector('#change_img')
	.addEventListener('click', handleChangeStyleBtn);

document
	.querySelectorAll('input')
	.forEach((element) => element.addEventListener('input', handleGetCategories));

document.getElementById('calcular').addEventListener('click', verifyCategories);

// functions
let category_1 = 0,
	category_2 = 0,
	category_3 = 0;

function handleGetCategories(event) {
	const element = event.target;
	const id = element.id;
	const value = Number(element.value);

	if (id === 'category_1') {
		category_1 = value;
	} else if (id === 'category_2') {
		category_2 = value;
	} else {
		category_3 = value;
	}
}

function verifyCategories() {
	if (!category_1 && !category_2 && !category_3) {
		if (
			category_1 == -1 ||
			category_1 == 0 ||
			category_1 > 10 ||
			category_2 == -1 ||
			category_2 == 0 ||
			category_2 > 10 ||
			category_3 == -1 ||
			category_3 == 0 ||
			category_3 > 10
		) {
			alert('Agrega un número entre 1 y 10');
		}
	}

	if (
		category_1 == undefined &&
		category_2 == undefined &&
		category_3 == undefined
	) {
		alert('Agrega un número entre 1 y 10');
	} else if (
		category_1 == -1 ||
		category_1 > 10 ||
		category_2 == -1 ||
		category_2 > 10 ||
		category_3 == -1 ||
		category_3 > 10
	) {
		alert('Agrega un número entre 1 y 10');
	} else {
		const suma = category_1 + category_2 + category_3;

		if (suma > 10) {
			alert('lLevas  más de 10 productos');
			// Mostar el texto de la cantidad de stickers ern pantalla
		} else {
			alert('lLevas ' + suma + ' productos');
			// Mostar el texto de la cantidad de stickers ern pantalla
		}
	}
}

function handleChangeStyleBtn() {
	const element = this;
	const classList = element.classList;

	const hasClassActive = classList.contains('img_active');

	if (hasClassActive) {
		// Quitamos la clase
		classList.remove('img_active');
	} else {
		// Ponemos la clase
		classList.add('img_active');
	}
}

const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const password3 = document.getElementById("password3");
const verifyPasswordButton = document.getElementById("verifyPasswordButton");
const passwordResult = document.getElementById("passwordResult");

verifyPasswordButton.addEventListener("click", function () {
	const enteredPassword = password1.value + password2.value + password3.value;
	if (enteredPassword === "911") {
		passwordResult.textContent = "Password 1 correcto";
	} else if (enteredPassword === "714") {
		passwordResult.textContent = "Password 2 es correcto";
	} else {
		passwordResult.textContent = "Password incorrecto";
	}
});
