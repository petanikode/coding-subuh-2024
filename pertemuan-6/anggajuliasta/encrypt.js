function encrypt() {
  const text = document.getElementById("textInput").value;
  const key = document.getElementById("secretKey").value;
  const encryptedText = applyXOR(text, key);
  document.getElementById("output").value = encryptedText;
}

// function decrypt() {
//   const encryptedText = document.getElementById("output").value;
//   const key = document.getElementById("secretKey").value;
//   const decryptedText = applyXOR(encryptedText, key);
//   document.getElementById("textInput").value = decryptedText;
// }

function applyXOR(text, key) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i) ^ key.charCodeAt(i % key.length);
    result += String.fromCharCode(charCode);
  }
  return result;
}