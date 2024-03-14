// menampilkan teks ke Console Javascript
console.log("Program dimulai..");
console.info("Tampilkan teks di ke elemen H1");

// mengisi teks ke elemen headline <h1>
headline.innerText = "Latihan Fungsi Output";

console.info("Done, sekarang teks sudah ditampilkan di H1");

// menampilkan output ke document
document.write("<p>Belajar JavasScript itu gampang!</p>");
document.write("<p>Silahkan cek Console Javascript untuk output lainnya</p>");
document.write("<p>Tekan <kbd>Ctrl</kbd>+<kbd>F12</kbd>");

// mencoba ouput console yang lainnya
console.error("HACKER JANGAN MENYERANG!");
console.warn("PERINGATAN", "Menyerang website tanpa izin dari pemiliknya adalah tindakan ilegal");

// mencoba console debug
console.log("Berikut ini hasil console debug");
console.debug("Isi object dari elemen H1 adalah:", headline);

// 👆 jika console.debug tidak tampil hasilnya di Google Chrome, coba aktifkan mode verbose
// pada Console JS-nya.

alert("Welcome Sir!");
