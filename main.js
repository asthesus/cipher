var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(a){return a.raw=a};$jscomp.createTemplateTagFirstArgWithRaw=function(a,b){a.raw=b;return a};var tocipher_div=document.getElementById("tocipher"),key_div=document.getElementById("key"),ciphered_div=document.getElementById("ciphered"),decipher_box=document.getElementById("decipher"),decipher_label=document.getElementById("decipher_label"),decipher_value=1;tocipher_div.textContent="Lorem ipsum curae magna venenatis mattis, purus luctus cubilia quisque in et, leo enim aliquam consequat.";
tocipher_div.addEventListener("input",function(){cipher(tocipher_div.textContent,key_div.textContent,decipher_value)});key_div.addEventListener("input",function(){cipher(tocipher_div.textContent,key_div.textContent,decipher_value)});
function cipher(a,b,c){if(0!==a.length&&0!==b.length){n2=0;ciphered="";for(n1=0;n1<=a.length-1;n1++){for(cipher_char=a.codePointAt(n1)+c*b.codePointAt(n2);65535<cipher_char;cipher_char-=65535);for(;0>cipher_char;cipher_char+=65535);ciphered=ciphered.concat(String.fromCodePoint(cipher_char));n2+1>b.length-1?n2=0:n2++}ciphered_div.textContent=ciphered;console.log(ciphered);console.log(8*(encodeURI(key_div.textContent).split(/%..|./).length-1))}}
decipher_box.addEventListener("change",function(){decipher_box.checked?(decipher_label.textContent="Decipher",decipher_value=-1):(decipher_label.textContent="Cipher",decipher_value=1);cipher(tocipher_div.textContent,key_div.textContent,decipher_value)});
