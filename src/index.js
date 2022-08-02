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