export function caesarCipher(str, shift) {
    shift = shift % 26;
    return str.split('').map(char => {
        if (/[a-z]/.test(char)) {
            let code = char.charCodeAt(0);
            return String.fromCharCode(((code - 97 + shift + 26) % 26) + 97);
        } else if (/[A-Z]/.test(char)) {
            let code = char.charCodeAt(0);
            return String.fromCharCode(((code - 65 + shift + 26) % 26) + 65);
        } else {
            return char;
        }
    }).join('');
}

// const plainText = "Hello, World!";
// const shift = 3;
// const encryptedText = caesarCipher(plainText, shift);
// console.log("Encrypted:", encryptedText);
// const decryptedText = caesarCipher(encryptedText, -shift);
// console.log("Decrypted:", decryptedText);
