# 6. Processo de Desenvolvimento


### 6.1 Protótipo
- Realizei o desenho do protótipo:

![prototipo](./src/img/prototipo.jpg)

### 6.2 Definição de objetivo geral
### Objetivos:

- **Possibilidade 1:**
    - entrada com chave → número positivo ou negativo
    - entrada na caixa **mensagem original** → com letras maiúsculas, minúsculas, caraceteres especiais e números
    - saída na caixa **mensagem cifrada**
- **Possibilidade 2:**
    - entrada com chave → número positivo ou negativo
    - entrada na caixa **mensagem cifrada** → com letras maiúsculas, minúsculas, caraceteres especiais e números
    - saída na caixa **mensagem original**

### 3. Contrução do index.js
* Construção de um fluxograma
    ![FluxogramaDoIndex.js](./src/img/fluxograma1.jpg)

* A partir desse fluxograma fui trasnformando as ideias em código

### 4. Contrução do cipher.js
* Para o cipher.js, descrevi o algoritmo passo a passo com minhas palavras, primeiro para decodificar uma letra:
    ![Tentativa1](./src/img/tentativa1.jpg)

*  Após a primeira tentativa verifiquei a necesidade de alguns ajustes e descrevi uma segunda tentativa: 
    ![Tentativa2](./src/img/tentativa2.jpg)

* Após coseguir cifrar letras minúsculas, adaptei meu algoritmo para receber também letras maiúsculas
    ![Tentativa3](./src/img/tentativa3.jpg)

* Depois de codificar letras minúsculas e maiúsculas, precisei codificar a mensagem inteira, fiz também um plano por escrito:
    ![Tentativa4](./src/img/tentativa4.jpg)