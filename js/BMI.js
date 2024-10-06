
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

	if (weight === 0 || height === 0) {
		alert("Input tidak valid, silakan isi kembali");
		return;
	}

	const bmi = weight / (height * height);
	bmiResult.textContent = bmi.toFixed(2);

	if (bmi < 18.5) {
		bmiStatus.textContent = 'Underweight';
		bmiStatus.style.color = 'orange';
		bmiStatus.textContent = 'Hasil perhitungan menunjukkan bahwa Anda memiliki berat badan kurang atau tergolong kurus. Hasil ini berdasarkan angka BMI Anda yang berada di bawah 18.5. Sebagai solusinya, Anda membutuhkan asupan kalori tambahan sebanyak 300-500 kkal per hari. Perbaiki juga pola makan dan pola hidup untuk mendapatkan berat badan ideal.';
	} else if (bmi < 25) {
		bmiStatus.textContent = 'Normal weight';
		bmiStatus.style.color = 'green';
		bmiStatus.textContent = 'Hasil perhitungan menunjukkan bahwa Anda memliki berat badan normal. Hasil ini berdasarkan angka BMI Anda yang ada di antara angka 18.5 sampai 24.9. Memiliki berat badan ideal bisa menjadi salah satu cara untuk menjaga kesehatan tubuh secara keseluruhan. Anda juga bisa terhindar dari berbagai risiko penyakit berbahaya'
	} else if (bmi < 30) {
		bmiStatus.textContent = 'Overweight';
		bmiStatus.style.color = 'orange';
		bmiStatus.textContent = 'Hasil perhitungan menunjukkan bahwa Anda memiliki berat badan berlebih atau gemuk. Hasil ini berdasarkan angka BMI Anda yang ada di antara angka 25 sampai 29.9. Sebagai solusinya, Anda harus mengurangi asupan asupan kalori harian sekitar 300-500 kkal. Mulai sekarang coba lebih perhatikan kalori dari makanan dan minuman yang Anda konsumsi'
	} else {
		bmiStatus.textContent = 'Obesity';
        bmiStatus.style.color = 'red';
		bmiStatus.textContent = 'Hasil perhitungan menunjukkan bahwa Anda tergolong obesitas. Hasil ini berdasarkan angka BMI Anda lebih dari 30. Perlu diketahui bahwa obesitas lebih parah daripada gemuk. Seseorang yang gemuk belum tentu obesitas, sedangkan seseorang yang obesitas sudah dipastikan gemuk. Jika dibiarkan, bisa berisiko menderita berbagai penyakit serius.'
    }
    

    form.reset()
})

