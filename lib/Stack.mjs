export default class Stack {
    #data // vetor privado

    constructor(){
        this.#data = []
    }

    // Método para inserção no vetor -> push
    push(val){ // Pode até chamar esse método de push ou insert
        this.#data.push(val)
    }

    //Método para remoção do valor
    pop(){ // Não precisa passar valor/ parâmetro
        return this.#data.pop() // Pop remove o último
    }

     // Verificar o topo da pilha/ vetor -> última posição
    peek(){
        return this.#data[this.#data.length - 1] // Tamanho - 1
    }

    get isEmpty(){
        return this.#data.length === 0
    }
    
    print(){
        return JSON.stringify(this.#data)
    }

}

// Assim o valor vai embora -> precisa do return para ter retorno
// pop() { // Não precisa passar valor/ parâmetro
//      this.#data.pop() // Pop remove o último  
//  }