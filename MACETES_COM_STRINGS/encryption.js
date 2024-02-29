var encrypted = CryptoJS.AES.encrypt('essa e minha mensagem secreta', 'EncryptionKey');
var decrypted = cryptoJS.AES.decrypt(encrypted, 'EncryptionKey');

import ncrypt from 'ncrypt-js';
const encrypted = ncrypt.encrypt('essa e minha mensagem secreta', 'Secret Key');
console.log(encrypted);
const decrypted = ncrypt.decrypt(encrypted);
console.log(decrypted)
