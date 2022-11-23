import cipher from "./cipher.js";

const offset = document.getElementById("offset");
const mensagemOriginal = document.getElementById("mensagem-original");
const mensagemCifrada = document.getElementById("mensagem-cifrada");

function cifraDeCesar(event) {
  const oQueFoiDigitado = event.srcElement.value;
  const idDeOndeOcorreuOevento = event.srcElement.id;
  const offsetValor = Number(offset.value);
  let msgAlerta;

  if (idDeOndeOcorreuOevento == mensagemOriginal.id) {
    mensagemCifrada.value = cipher.encode(offsetValor, oQueFoiDigitado);
    navigator.clipboard.writeText(mensagemCifrada.value);
    msgAlerta =
      "<p class='alert'>A mensagem cifrada foi copiada para área de transferência!</p>";
  } else {
    mensagemOriginal.value = cipher.decode(offsetValor, oQueFoiDigitado);
    navigator.clipboard.writeText(mensagemOriginal.value);
    msgAlerta =
      "<p class='alert'>A mensagem original foi copiada para área de transferência!</p>";
  }
  document.getElementById("msgAlerta").innerHTML = msgAlerta;
  setTimeout(() => {
    document.getElementById("msgAlerta").innerHTML = "";
  }, 3200);
}

mensagemOriginal.addEventListener("input", cifraDeCesar);
mensagemCifrada.addEventListener("input", cifraDeCesar);
