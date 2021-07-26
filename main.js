const tocipher_div = document.getElementById(`tocipher`);
const key_div = document.getElementById(`key`);
const ciphered_div = document.getElementById(`ciphered`);
tocipher_div.textContent = 'Lorem ipsum curae magna venenatis mattis, purus luctus cubilia quisque in et, leo enim aliquam consequat.';
tocipher_div.addEventListener('input', () => {cipher((tocipher_div.textContent), (key_div.textContent), 1)});
key_div.addEventListener('input', () => {cipher((tocipher_div.textContent), (key_div.textContent), 1)});
function cipher(tocipher, key, direction) {
    if(tocipher.length !== 0 && key.length !== 0) {
        n2 = 0;
        ciphered = ``;
        for(n1 = 0; n1 <= tocipher.length - 1; n1++) {
            cipher_char = tocipher.codePointAt(n1) + (direction * key.codePointAt(n2));
            for(;cipher_char > 65535; cipher_char -= 65535);
            for(;cipher_char < 0; cipher_char += 65535);
            ciphered = ciphered.concat(String.fromCodePoint(cipher_char));
            if(n2 + 1 > key.length - 1) {n2 = 0} else n2++;
        }
        ciphered_div.textContent = ciphered;
        console.log(ciphered);
        console.log((encodeURI(key_div.textContent).split(/%..|./).length - 1) * 8);
    } 
}