import cipher from "./cipher.js";

const offsetValor = document.getElementById("offset").value;
const mensagemOriginal = document.getElementById("mensagem-original");
const mensagemCifrada = document.getElementById("mensagem-cifrada");

function cifraDeCesar(event) {
  const oQueFoiDigitado = event.srcElement.value;
  const idDeOndeOcorreuOevento = event.srcElement.id;

  if (idDeOndeOcorreuOevento == mensagemOriginal.id) {
    mensagemCifrada.value = cipher.encode(offsetValor, oQueFoiDigitado); // chama funcao que cifra
  } else {
    mensagemOriginal.value = cipher.decode(offsetValor, oQueFoiDigitado); // chama funcao que decifra
  }
}

mensagemOriginal.addEventListener("input", cifraDeCesar);
mensagemCifrada.addEventListener("input", cifraDeCesar);
