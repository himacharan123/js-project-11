export function caesarCipher(message, key) {
  key = ((key % 26) + 26) % 26;
  const CodeA = "A".charCodeAt(0);
  const CodeZ = "Z".charCodeAt(0);
  const Codea = "a".charCodeAt(0);
  const Codez = "z".charCodeAt(0);

  let encryptedMessage = "";

  for (let char of message) {
    let currentLetter = char.charCodeAt(0);

    if (currentLetter >= CodeA && currentLetter <= CodeZ) {
      let newLetter = ((currentLetter - CodeA + key) % 26) + CodeA;
      encryptedMessage += String.fromCharCode(newLetter);
    } else if (currentLetter >= Codea && currentLetter <= Codez) {
      let newLetter = ((currentLetter - Codea + key) % 26) + Codea;
      encryptedMessage += String.fromCharCode(newLetter);
    } else {
      encryptedMessage += char;
    }
  }

  return encryptedMessage;
}
