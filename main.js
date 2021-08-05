const tocipher_div = document.getElementById(`tocipher`);
const key_div = document.getElementById(`key`);
const ciphered_div = document.getElementById(`ciphered`);
const decipher_box = document.getElementById(`decipher`);
const vigenere_box = document.getElementById(`vigenere`);
const randomInteger = (min, max) => {return Math.round(Math.random() * (max - min + 1)) + min};
var char_min = 32;
var char_max = 126;
function randomChar() {return String.fromCharCode(randomInteger(char_min, char_max))};
tocipher_div.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
var random_key = ``;
for(let n = 0; n <= 32; n++) {random_key = random_key.concat(randomChar())};
key_div.textContent = random_key;
var cipher_value = 1;
function cipher() {
    let tocipher = tocipher_div.textContent;
    let key = key_div.textContent;
    if(tocipher.length !== 0 && key.length !== 0) {
        let n2 = 0;
        let ciphered = ``;
        for(n1 = 0; n1 <= tocipher.length - 1; n1++) {
            let text_char = tocipher.charCodeAt(n1);
            let key_char = key.charCodeAt(n2);
            if(text_char === 160 && text_char > char_max) text_char = 32;
            if(key_char === 160 && key_char > char_max) key_char = 32;
            if(text_char >= char_min && text_char <= char_max) {
                text_char -= char_min;
                key_char -= char_min;
                let cipher_char = text_char + (cipher_value * key_char);
                let adjusted_max = char_max - char_min;
                for(;cipher_char > adjusted_max; cipher_char -= adjusted_max + 1) {};
                for(;cipher_char < 0; cipher_char += adjusted_max + 1) {};
                cipher_char += char_min;
                ciphered = ciphered.concat(String.fromCharCode(cipher_char));
                if(n2 + 1 > key.length - 1) {n2 = 0} else n2++;
            } else ciphered = ciphered.concat(tocipher.charAt(n1));
        }
        ciphered_div.textContent = ciphered;
    } else {
        ciphered_div.textContent = tocipher_div.textContent;
    }
    console.log(tocipher.charCodeAt(0));
}
decipher_box.addEventListener(`change`, () => {
    if(decipher_box.checked) {
        decipher_label.textContent = `Decipher`;
        cipher_value = -1;
        cipher();
    } else {
        decipher_label.textContent = `Cipher`;
        cipher_value = 1;
        cipher();
    }
})
vigenere_box.addEventListener(`change`, () => {
    if(vigenere_box.checked) {
        vigenere_label.textContent = `Vigenere`;
        char_min = 97;
        char_max = 122;
        cipher();
    } else {
        vigenere_label.textContent = `ASCII`;
        char_min = 32;
        char_max = 126;
        cipher();
    }
})
tocipher_div.addEventListener(`input`, () => {cipher()});
key_div.addEventListener(`input`, () => {cipher()});
cipher();
