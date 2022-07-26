const ALFABETO = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

//-------> Codificar letra por letra

// Uma verificação de minúscula para tratar do jeito correspondente
function verificaMinuscula(letra) {
  return /[a-z]/.test(letra);
}
// Lembrando: verificaMinuscula(letra)
// retorna true ou false

// Esta é uma função que cifra uma letra, e para isso 
// essa função recebe o offset e a letra em questão
function cifraLetra(offset, letra) {
  // Os comentários a partir daqui são do algoritmo escrito:
  // 1.Obter o número da posição inicial da letra no alfabeto
  const posicaoInicialDaLetra = ALFABETO.indexOf(letra);
  // 1.1 Verificar se a letra não pertence ao alfabeto,
  // caso não verdadeiro, retorne a própria letra
  if (posicaoInicialDaLetra < 0 || letra == "") {
    return letra;
  }
  // 2.Somar o offset ao número inicial da letra
  const resultadoSoma = offset + posicaoInicialDaLetra;
  // 3. Se o resultado da soma for:
  // positivo: aplicar % 26 (para corrigir o excesso)
  // negativo: aplicar % 26 (para corrigir o excesso) + 26 (tamanho do alfabeto)
  let novaPosicaoDaLetra;
  if (resultadoSoma >= 0) {
    novaPosicaoDaLetra = resultadoSoma % 26;
  } else {
    novaPosicaoDaLetra = (resultadoSoma % 26) + 26;
  }
  // 4. Se a letra que entrou for minúscula,
  // retornar a letra da posição correspondente.
  // senão, retornar a letra da posição correspondente
  // acrescida de 26.
  if (verificaMinuscula(letra)) {
    return ALFABETO.charAt(novaPosicaoDaLetra);
  }
  return ALFABETO.charAt(novaPosicaoDaLetra + 26);
}

// ------> Codificar mensagem inteira

function codificaMensagem(offset, mensagemCompleta) {
  // 1. Defini a variável vazia para
  // representar a mensagem codificada
  let mensagemCodificada = "";
  // 2. Percorro a mensagem letra por letra,
  // codifico cada letra e salvo essa codificação
  // na variável do passo 1
  let letra;
  for (let i = 0; i < mensagemCompleta.length; i = i + 1) {
    letra = mensagemCompleta.charAt(i);
    mensagemCodificada = mensagemCodificada + cifraLetra(offset, letra);
  }
  // 3. Retornar a variável do passo 1
  return mensagemCodificada;
}

// cipher é um objeto javascript como tese pediu
// dentro dele eu tenho as funções encode e decode
const cipher = {
  encode: function (offset, mensagem) {
    if(typeof offset != 'number' || typeof mensagem != 'string') {
      throw TypeError();
    }
    // Condicional para que se o offset for diferente de
    // um número, ou a mensagem for diferente de uma string
    // dispara um tyerror como o teste pediu

    return codificaMensagem(offset % 26, mensagem);
  },
  decode: function (offset, mensagem) {
    if(typeof offset != 'number' || typeof mensagem != 'string') {
      throw TypeError();
    }
    // Condicional para que se o offset for diferente de
    // um número, ou a mensagem for diferente de uma string
    // dispara um tyerror como o teste pediu

    return codificaMensagem(-(offset % 26), mensagem);
  },
};

export default cipher;
