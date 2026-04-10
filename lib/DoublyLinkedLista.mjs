class Node {
    constructor(val) {
        this.prev = null
        this.data = val
        this.next = null
    }
}

export default class DoublyLinkedList {
    #head
    #tail
    #count

    constructor() {
        this.#head = null
        this.#tail = null
        this.#count = 0
    }

    // Ver se a lista está vazia
    get isEmpty() {
        return this.#count === 0
    }

    // Retornar o número de elementos da lista
    get count() {
        return this.#count
    }

    // Método PRIVADO que encontra um nodo por sua posição
    #findNode(pos) {
        let node
        // Nó encontra-se na primeira metade da lista
        if(pos < this.#count / 2) {
            node = this.#head
            for(let i = 0; i < pos; i++) {
                node = node.next
            }
        }
        else {  // Nó encontra-se na segunda metade da lista
            node = this.#tail
            for(let i = this.#count - 1; i > pos; i--) {
                node = node.prev
            }
        }
        return node
    }
    // Método para inserir em qualquwer posição da lista
    insert(val, pos) {
        let inserted = new Node(val)

        // 1° caso: lista vazia
        if(this.isEmpty) {
            this.#head = inserted
            this.#tail = inserted
        }
        // 2° caso: inserção no início da lista
        else if(pos === 0) {
            inserted.next = this.#head
            this.#head.prev = inserted
            this.#head = inserted
        }
        // 3° caso: inserção no final da lista
        else if(pos >= this.#count - 1) {
            inserted.prev = this.#tail
            this.#tail.next = inserted
            this.#tail = inserted
        }
        // 4° caso: inserção no meio da lista/ posição intermediária
        else {
            let nodePos = this.#findNode(pos)
            let before = nodePos.prev
            before.next = inserted
            inserted.prev = before
            inserted.next = nodePos
            nodePos.prev = inserted
        }
        this.#count++
    }

    // Método de atalho para inserção na primeira posição
    insertHead (vall) {
        this.insert(0, val)
    }

    // Método de atalho para inserção na última posição
    insertTail(val) {
        this.insert(this.#count, val)
    }

    // Remoção de um nododa lista
    remove(pos) {
        // 1° caso: lista vazia ou posição inválida
        if (his.isEmpty || pos < 0 || pos > this.#count - 1){
            return undefined
        }
        // 2° caso: remoção do primeiro elemento
        let removed
        if(pos === 0) {
            removed = this.#head
            this.#head = this.#head.next // ou this.#head = removed.next
            if(this.#head) {
                this.#head.prev = null
            }
            if (this.#count === 1) {
                this.#tail = null
            }
        }
        // 3° caso: remoção do último elemento
        else if(pos === this.#count - 1) {
            removed = this.#tail
            this.#tail = this.#tail.prev // ou this.#tail = removed.prev
            if(this.#tail) {
                this.#tail.next = null
            }
            if (this.#count === 1) {
                this.#head = null
            }   
        }
        // 4° caso: remoção de um elemento do meio
        else {
            removed = this.#findNode(pos)
            let before = removed.prev
            let after = removed.next
            before.next = after
            after.prev = before
        }
        this.#count--
        return removed.data
    }
    // Método de atalho para remoção da primeira posição
    removeHead() {
        return this.remove(0)
    }

    // Método de atalho para remoção da última posição
    removeTail() {
        return this.remove(this.#count - 1)
    }
    peek(pos) {
        if (pos < 0 || pos > this.#count - 1 || this.isEmpty) { 
            return undefined
        }
        const node = this.#findNode(pos)
        return node.data
    }
    peekHead() {
        return this.peek(0)
    }
    peekTail() {
        return this.peek(this.#count - 1)
    }
//método que retorna a posição do nodo cujo conteúdo foi especificado
  indexOf(val){
    const middle = Math.ceil(this.#count / 2)
    let node1 = this.#head //começa na cabeça da lista
    let node2 = this.#tail //começa na cauda da lista

    for(let pos = 0; pos < middle; pos++){
      //verifica se o valor está no node1
      if(val === node1.data) return pos
      //verifica se o valor está no node2
      if(val === node2.data) return this.#count - 1 - pos

      //node1 avança via next
      node1 = node1.next

      //node2 retocede via prev
      node2 = node2.prev
    }

    return -1
  }


  print(){
    let output = '( '
    let node = this.#head

    for(let i = 0; i < this.#count; i++){
      if(output !== '( ') output += ', '
      output += `[${i}]: ${node.data}`
      node = node.next
    }
    output += ` ), count: ${this.#count}`
    return output
  }
}