// Nó da lista ligada: armazena um valor (data) e referência para o próximo nó (next)
class Node {
    constructor(val) {
        // valor contido no nó
        this.data = val
        // referência para o próximo nó da lista (null quando não há próximo)
        this.next = null
    }
}
// Classe LinkedList (lista simplesmente encadeada).
// Atualmente a classe está vazia; abaixo há comentários que indicam métodos
// e propriedades comumente implementados. Implemente conforme necessário.

export default class LinkedList {
    // Propriedades típicas:
    // - head: referência ao primeiro nó (null se vazia)
    // - length / size: número de elementos da lista
    //
    // Métodos sugeridos a implementar:
    // - constructor(): inicializa head = null e size = 0
    // - insertAtStart(value): insere um novo nó no início
    // - insertAtEnd(value): insere no fim da lista
    // - insertAt(index, value): insere na posição informada (0-based)
    // - remove(value): remove o primeiro nó que contém value
    // - removeAt(index): remove o nó na posição index
    // - find(value): retorna o índice do nó com value ou -1 se não encontrar
    // - toArray(): retorna um array com os valores da lista
    // - isEmpty(): retorna true se head for null
    //
    // Exemplo mínimo de implementação do constructor:
    // constructor() {
    //     this.head = null
    //     this.size = 0
    // }
    //

    #head // Início da lista
    #tail // Fim da lista (cauda)
    #count // Tamanho da lista/ Quantidade de nodos da lista

    constructor() {
        this.#head = null
        this.#tail = null
        this.#count = 0;
    }

    // Getter que retorna se a lista encadeada está vazia ou não
    get isEmpty() {
        return this.#count === 0;
    }

    // Getter que retorna a quantidade de nodos/elemnetos da lista
    get count() {
        return this.#count;
    }

    // Método para inserir em qualquer posição
    insert(val, pos) {
        // cria o nodo para armazenar o valor pretendido
        const inserted = new Node(val);

        // 1° caso: a lista está vazia
        if (this.isEmpty) {
            this.#head = inserted;
            this.#tail = inserted;
        } else {
            // 2° caso: a lista não está vazia
            if (pos === 0) { // Extremamente igual -> testa valor e tipo
                // 2.1. Inserir no início
                inserted.next = this.#head;
                this.#head = inserted;
            } else if (pos >= this.#count) {
                // 2.2. Inserir no final
                this.#tail.next = inserted;
                this.#tail = inserted;
            } else {
                // 2.3. Inserir no meio
                let current = this.#head;
                let index = 0;
                while (index < pos - 1) {
                    current = current.next;
                    index++;
                }
                inserted.next = current.next;
                current.next = inserted;
                /* Ou, para posição intermediária:
                else {
                    let before = this.#head;
                    for (let i = 1; i < pos; i++) {
                        before = before.next;
                    }
                    let after = before.next;

                    inserted.next = after;
                    before.next = inserted;
                }
                */
            }
        }
        this.#count++;
    }

    // Método para inserção na primeira posição (Atalho)
    insertAtStart(val) {
        this.insert(val, 0);
    }
    insertAtEnd(val) {
        this.insert(val, this.#count);
    }

    // Método para remoção de um nodo na lista
    remove (pos) {
        //1° caso: A lista está vazia ou a posição informadaa está fora dos parâmetros
        if(this.isEmpty || pos < 0 || pos > this.#count - 1) {
            return undefined
        }
        let removed
        //2° caso: remoção do início da lista
        if (pos === 0) {
            removed = this.#head;
            this.#head = this.#head.next;

            if(this.#count === 1) {
                this.#tail = null;
            }
        }
        // 3° caso: Remoção de nodo intermediário ou final
        else { 
            let before = this.#head;
            for (let i = 1; i < pos; i++) {
                before = before.next;
            }
            removed = before.next;
            
            let after = removed.next;
            before.next = after;
            // Atualiza o tail em caso de remoção
            if (pos === this.#count - 1) {
                this.#tail = before;
            }
        }

        this.#count--;
        return removed.data;
    }

    // Métdo para removere o primeiro nodo da lista (atalho)
    removeHead() {
        return this.remove(0);
    }

    // Método para remover o último nodo da lista (atalho)
    removeTail() {
        return this.remove(this.#count - 1);
    }

    // Método para pegar a posição de um elemento
    indexOf(val) {
        // 1° caso: lista vazia
        if(this.isEmpty) {
            return -1;
        }
        //2° caso: lista não vazia
        let node = this.#head;
        for (let i = 0; i < this.#count; i++) {
            if (node.data === val) {
                return i;
            }
            node = node.next;
        }
        return -1;
    }
    
    peek(pos) {
        // 1° caso: lista vazia ou posição fora dos limites
        if (this.isEmpty || pos < 0 || pos > this.#count - 1) {
            return undefined;
        }
        // 2° caso: busca sequencial
        let node = this.#head;
        for (let i = 0; i < pos; i++) {
            node = node.next;
        }
        return node.data;
    }

    peekHead() {
        return this.peek(0);
    }

    peekTail() {
        return this.peek(this.#count - 1);
    }

    // Impressão da lista
    print() {
        let output = "("
        let node = this.#head

        for (let i = 0; i < this.#count; i++) {
          if(output !== "(") {
            output += ", "
          }  
          output += `[${i}]: ${node.data}`
          node = node.next
        }
        output += `)`
        return output
    }
}