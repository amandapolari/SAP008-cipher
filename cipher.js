const ALFABETO = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

//-------> Codificar letra por letra
function verificaMinuscula(letra) {
  return /[a-z]/.test(letra);
}

function cifraLetra(offset, letra) {
  const posicaoInicialDaLetra = ALFABETO.indexOf(letra);
  if (posicaoInicialDaLetra < 0 || letra == "") {
    return letra;
  }
  const resultadoSoma = offset + posicaoInicialDaLetra;
  let novaPosicaoDaLetra;
  if (resultadoSoma >= 0) {
    novaPosicaoDaLetra = resultadoSoma % 26;
  } else {
    novaPosicaoDaLetra = (resultadoSoma % 26) + 26;
  }

  if (verificaMinuscula(letra)) {
    return ALFABETO.charAt(novaPosicaoDaLetra);
  }
  return ALFABETO.charAt(novaPosicaoDaLetra + 26);
}

// ------> Codificar mensagem inteira
function codificaMensagem(offset, mensagemCompleta) {
  let mensagemCodificada = "";
  let letra;
  for (let i = 0; i < mensagemCompleta.length; i = i + 1) {
    letra = mensagemCompleta.charAt(i);
    mensagemCodificada = mensagemCodificada + cifraLetra(offset, letra);
  }
  return mensagemCodificada;
}

const cipher = {
  encode: function (offset, mensagem) {
    if(typeof offset != 'number' || typeof mensagem != 'string') {
      throw TypeError();
    }

    return codificaMensagem(offset % 26, mensagem);
  },
  decode: function (offset, mensagem) {
    if(typeof offset != 'number' || typeof mensagem != 'string') {
      throw TypeError();
    }

    return codificaMensagem(-(offset % 26), mensagem);
  },
};

export default cipher;
