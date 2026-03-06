//double-ended Queue (fila de duas pontas)
//Posso colocar no comeco ou no fim da fila e mexer dos dois lados
//Não mexo no mei
//Não mexo no meio da estrutura, ou seja, nao posso acessar um elemento do meio da estrutura, apenas o primeiro e o ultimo elemento
//Não tem indice, ou seja, nao posso acessar um elemento pelo indice, apenas o primeiro e o ultimo elemento

export default class Deque {
  #data; //Vetor privado

  constructor() {
    this.#data = [];
  }

  //Método para inserir dados no início da estrutura
  insertFront(val) {
    this.#data.unshift(val);
  }

  //Método para inserir dados no final da estrutura
  insertBack(val) {
    this.#data.push(val);
  }

  //Método para remover dados no início da estrutura
  removeFront() {
    return this.#data.shift();
  }

  //Método para remover dados no final da estrutura
  removeBack() {
    return this.#data.pop();
  }

  //Método para consultar o ínicio da estrutura
  peekFront() {
    return this.#data[0];
  }

  //Método para consultar o final da estrutura
  peekBack() {
    return this.#data[this.#data.length - 1];
  }

  get isEmpty() {
    return this.#data.length === 0 ? "Sim, está vazia!" : "Não!" // Ternário
                                      // Se for verdade   // Se for falso 
  }

  //Método para imprimir (efeitos de depuração)
  print() {
    let output = "[ ";
    for (let i = 0; i < this.#data.length; i++) {
      if (output !== "[ ") {
        output += ", ";
      }
      output += `(${i + 1}º): ${this.#data[i]}`;
    }
    return output + " ]";
  }
}
