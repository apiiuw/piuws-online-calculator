function addToDisplay(value) {
  // Mendapatkan elemen layar
  var lowerScreen = document.getElementById("lower-screen");

  // Menambahkan nilai dari tombol yang ditekan ke layar kalkulator
  lowerScreen.textContent += value;
}

function clearDisplay() {
  // Mengosongkan layar
  document.getElementById("lower-screen").textContent = "";
}

function calculate() {
  try {
    // Mengambil ekspresi dari layar dan menghitung hasilnya
    var expression = document.getElementById("lower-screen").textContent;
    var result = eval(expression);

    // Menampilkan hasil perhitungan di layar atas
    document.getElementById("upper-screen").textContent = expression + " =";

    // Menampilkan hasil di layar bawah
    document.getElementById("lower-screen").textContent = result;
  } catch (error) {
    // Menampilkan pesan error jika terjadi kesalahan saat perhitungan
    document.getElementById("lower-screen").textContent = "Error";
  }
}
