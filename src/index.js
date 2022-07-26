import cipher from "./cipher.js";

// Captura dos elementos html que irei utilizar:
const offset = document.getElementById("offset");
const mensagemOriginal = document.getElementById("mensagem-original");
const mensagemCifrada = document.getElementById("mensagem-cifrada");

// Descrição da função anterior ao seu chamamento para que ela já esteja 
// carregada quando for chamada posteriormente
function cifraDeCesar(event) {

  // Para facilitar minha leitura e entendimento futuro, 
  // salvei em uma variável o caminho do evento
  const oQueFoiDigitado = event.srcElement.value;
  const idDeOndeOcorreuOevento = event.srcElement.id;
  const offsetValor = Number(offset.value);

  // Se o id de onde ocorreu o evento for igual 
  // ao id da caixa da mensagem digitada
  if (idDeOndeOcorreuOevento == mensagemOriginal.id) {

    // Chamo a função cipher.encode
    // E coloco o seu resultado no valor da caixa mensagem cifrada
    mensagemCifrada.value = cipher.encode(offsetValor, oQueFoiDigitado); // chama funcao que cifra
  } else { 
    // Se não, 
    // Chamo a função cipher.decode
    // E coloco o seu resultado no valor da caixa mensagem decifrada
    mensagemOriginal.value = cipher.decode(offsetValor, oQueFoiDigitado); // chama funcao que decifra
  }
}

// Aplicação do addEventListener para o evento de escrita(input) nas caixas, 
// que chama a função cifraDeCesar
mensagemOriginal.addEventListener("input", cifraDeCesar);
mensagemCifrada.addEventListener("input", cifraDeCesar);
