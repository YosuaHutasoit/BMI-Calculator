
let form = document.getElementById('bmi-form');
let  weightInput = document.getElementById('weight-input');
let  heightInput = document.getElementById('height-input');
let  calculateBtn = document.getElementById('calculate-btn');
const bmiResult = document.getElementById('bmi-result');
const bmiStatus = document.getElementById('bmi-status');

form.addEventListener("submit", function(item) {
	item.preventDefault();

	const weight = parseFloat(weightInput.value);
	const height = parseFloat(heightInput.value) / 100;

	const bmi = weight / (height * height);
	bmiResult.textContent = bmi.toFixed(2);

	if (bmi < 18.5) {
		bmiStatus.textContent = 'Underweight';
		bmiStatus.style.color = 'orange';
	} else if (bmi < 25) {
		bmiStatus.textContent = 'Normal weight';
		bmiStatus.style.color = 'green';
	} else if (bmi < 30) {
		bmiStatus.textContent = 'Overweight';
		bmiStatus.style.color = 'orange';
	} else {
		bmiStatus.textContent = 'Obese';
        bmiStatus.style.color = 'yellow';
    }
    

    form.reset()
})

