/****************************************************************
    ESTUTURA DE DADOS DEQUE
    
    - Deque = Double-Ended Queue (fila de duas pontas)
    - Deque é uma lista linear de acesso restrito, que permite apenas as operações
      de enfileiramento (insertFront/insertBack) e desenfileiramento (removeFront/
      removeBack), acontecendo em qualquer uma das extremidades da estrutura.
    - Como consequência, o deque NÃO SEGUE o princípio FIFO (First In, First Out -
      primeiro a entrar, primeiro a sair).
    - A principal aplicação dos deques são situações em que filas precisam aceitar
      a inserção de itens prioritários e a desistência do último item.
*/

export default class Deque {
    #data // vetor privado
    #maxSize

    constructor(maxSize = 0) {
        this.#data = []
        this.#maxSize = maxSize
    }

    size() {
        return this.#data.length
    }

    checklist(val){
        return this.#data.includes(val)
    }

    // método para inserção no início da estrutura
    insertFront(val) {
        if (this.checklist(val)){
            console.log(`${val} já está no carrinho.`)
            return 
        }
        if (this.#data.length >= this.#maxSize) {
            console.log("Tamanho máximo atingido.")
            return
        } 
        this.#data.unshift(val)
    }

    // método para inserção no fim da estrutura
    insertBack(val) {
        if (this.checklist(val)){
            console.log(`${val} já está no carrinho.`)
            return 
        }
        if(this.#data.length >= this.#maxSize){
            console.log("Tamanho máximo atingido.")
            return
        }
        this.#data.push(val)
    }

    // método para remoção no início da estrutura
    removeFront() {
        return this.#data.shift()
    }

    // método para remoção no fim da estrutura
    removeBack() {
        return this.#data.pop()
    }

    // consultar inicio da estrutura
    peekFront() {
        return this.#data[0]
    }

    // consultar fim da estrutura
    peekBack() {
        return this.#data[this.#data.length - 1]
    }

    get isEmpty() {
        return this.#data.length === 0 ? "Sim, está vazia" : "Não!"
    }

    get maxSize(){
        return this.#maxSize
    }

    // método para impressão da fila
    print() {
        let output = "[ "
        for (let i = 0; i < this.#data.length; i++) {
            if (output !== "[ ") {
                output += ", "
            }
            output += `(${i}): ${this.#data[i]}`
        }
        return output + " ]"
    }
}