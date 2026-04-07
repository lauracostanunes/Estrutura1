/*
    ESTRUTURA DE DADOS FILA

    - Fila é uma lista linear de acesso restrito, que permite apenas as operações
      de enfileiramento (enqueue) e desenfileiramento (dequeue), a primeira ocorrendo
      no final da estrutura e a segunda no início da estrutura.
    - Como consequência, a fila funciona pelo princípio FIFO (First In, First Out -
      primeiro a entrar, primeiro a sair).
    - A principal aplicação das filas são situações que envolvem o processamento de 
      tarefas por ordem de chegada.
*/
export default class Queue{

    #data // vetor privado
    #operationCount;

    constructor(){
        this.#data = []
        this.#operationCount = 0;
    }

    // método para inserção na fila
    enqueue(val){
        this.#operationCount++
        this.#data.push(val)
    }

    // método para remoção na fila
    dequeue(){
        if(!this.isEmpty){      // verifica se a fila esta vazia antes da contagem
            this.#operationCount++
        }
        return this.#data.shift()
    }

    // método para consultar o primeiro da fila
    peek(){
        return this.#data[0]
    }

    // método para verificar se a fila esta vazia
    get isEmpty(){
        return this.#data.length === 0
    }

    getOperationCount(){
        return this.#operationCount
    }

    // método para impressão da fila
    print(){
        let output = "[ "
        for(let i = 0; i < this.#data.length; i++){
            if (output !== "[ "){
                output += ", "
            }
            output += `(${i}): ${this.#data[i]}`
        }
        return output + " ]"
    }

}