function hitung() {
    let apel = parseInt(document.getElementById("inputApel").value);
    let jeruk = parseInt(document.getElementById("inputJeruk").value);
    let total = apel + jeruk;
    let hasil = document.getElementById("hasilTotal");
    hasil.textContent = "Total buah: " + total;
}
