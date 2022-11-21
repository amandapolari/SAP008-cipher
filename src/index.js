import cipher from "./cipher.js";

const offset = document.getElementById("offset");
const mensagemOriginal = document.getElementById("mensagem-original");
const mensagemCifrada = document.getElementById("mensagem-cifrada");

function cifraDeCesar(event) {

  const oQueFoiDigitado = event.srcElement.value;
  const idDeOndeOcorreuOevento = event.srcElement.id;
  const offsetValor = Number(offset.value);

  if (idDeOndeOcorreuOevento == mensagemOriginal.id) {
    mensagemCifrada.value = cipher.encode(offsetValor, oQueFoiDigitado);
  } else { 
    mensagemOriginal.value = cipher.decode(offsetValor, oQueFoiDigitado);
  }
}

mensagemOriginal.addEventListener("input", cifraDeCesar);
mensagemCifrada.addEventListener("input", cifraDeCesar);


// Botão de Copiar Mensagem
let btn = document.querySelector('#button-copy');
btn.addEventListener('click', function() {
  let textArea = document.querySelector('#mensagem-cifrada');
  textArea.select();
  document.execCommand('copy');
});

btn.addEventListener ('click', function () {
  document.getElementById("msgAlerta").innerHTML = "<p class='alert'>Mensagem copiada com sucesso!</p>"
    setTimeout(function(){
    document.getElementById("msgAlerta").innerHTML="";
  }, 2000)
});
