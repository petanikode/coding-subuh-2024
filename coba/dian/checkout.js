// definisi variabel 
const VALID_VOUCHER_CODE = "codingsubuh"; // diskon 30%
const MAX_CASHBACK = 50000;

// variabel buat simpan input dan data user
var totalBelanja, totalBayar, totalCashback, totalDiskon = 0;
var selectedPaymentMethod = '';
var isVoucherValid = false;

function inputVoucher(){
    let userVoucherCode = prompt("Input kode voucher");

    // if(userVoucherCode == null) return;
    
    if(userVoucherCode === VALID_VOUCHER_CODE){
        document.getElementById("outputKodeVoucher").textContent = VALID_VOUCHER_CODE;
        isVoucherValid = true;
    } else {
        alert("Kode voucher salah!");
    }
}

function prosesTransaksi(){
    totalBelanja = Number(document.getElementById('inputTotalBelanja').value);
    totalBayar = totalBelanja; // belum diset diskon dan casback
    totalCashback = 0; // reset cashback
    totalDiskon = 0; // reset diskon

    const bayarDenganBank = document.getElementById('bank').checked;
    const bayarDenganWallet = document.getElementById('wallet').checked;
    const bayarDenganPaylater = document.getElementById('paylater').checked;
    const bayarDenganOutlet = document.getElementById('outlet').checked;

    if(bayarDenganBank){
        selectedPaymentMethod = 'bank';
    } else if(bayarDenganWallet) {
        selectedPaymentMethod = 'wallet';
    } else if(bayarDenganPaylater){
        selectedPaymentMethod = 'paylater'
        if(totalBelanja * (10/100) > MAX_CASHBACK){
            totalCashback = MAX_CASHBACK;
        } else {
            totalCashback = totalBelanja * 0.1; // 10% dari total belanja
        }
    } else if(bayarDenganOutlet) {
        selectedPaymentMethod = 'outlet';
    } else {
        selectedPaymentMethod = '';
    }

    // cek apa dapat diskon dengan voucher?
    if(isVoucherValid){
        totalDiskon = totalBelanja * (30/100);
        totalBayar = totalBelanja - totalDiskon; 
    }


    const templateRingkasanTrx = `
        <hr>
        <h2>Ringkasan Transaksi</h2>
        <p>Total belanja: ${formatRp(totalBelanja)}</p>
        <p>Cashback: ${formatRp(totalCashback)}</p>
        <p>Diskon: ${formatRp(totalDiskon)}</p>
        <p>Total bayar: <b style='color:green'>${formatRp(totalBayar)}</b></p>
    `;

    document.getElementById('outputTransaksi').innerHTML = templateRingkasanTrx;
}

function formatRp(number){
    return number.toLocaleString('ID', {
        style: 'currency',
        currency: 'IDR'
    })
}