/*
    No aeroporto, os passageiros embarcam no avião seguindo a ordem de check-in.
    A sequência inicial de passageiros é:

    * Passageiro A
    * Passageiro B
    * Passageiro C
    * Passageiro D
    * Passageiro E
    
    1-) Crie um objeto filaAeroporto e insira os passageiros na fila corretamente.

    2-) Imprima a fila antes do início do embarque.

    3-) O primeiro passageiro foi chamado para o embarque. Remova esse passageiro e mostre o nome dele.

    4-) Imprima a fila após a remoção.

    5-) Três novos passageiros fizeram check-in:

    * Passageiro F
    * Passageiro G
    * Passageiro H
    
    Adicione-os à fila.

    6-) Imprima a fila após as alterações.

    7-) Quem é o próximo passageiro a embarcar? Mostre o comando e o nome do passageiro.

    8-) O próximo passageiro foi chamado. Remova essa pessoa e imprima a fila atualizada.

    */

import Queue from '../lib/Queue.mjs'

// 1-) Criar um objeto filaAeroporto e inserir os passageiros na fila corretamente.
const filaAeroporto = new Queue()
filaAeroporto.enqueue('Passageiro A')
filaAeroporto.enqueue('Passageiro B')
filaAeroporto.enqueue('Passageiro C')
filaAeroporto.enqueue('Passageiro D')
filaAeroporto.enqueue('Passageiro E')

// 2-) Imprimir a fila antes do início do embarque.
console.log('Fila antes do embarque:')
console.log(filaAeroporto.print())

// 3-) O primeiro passageiro foi chamado para o embarque. Remova esse passageiro e mostre o nome dele.
const primeiroPassageiro = filaAeroporto.dequeue()
console.log(`\nPrimeiro passageiro chamado: ${primeiroPassageiro}`)

// 4-) Imprimir a fila após a remoção.
console.log('\nFila após embarque:')
console.log(filaAeroporto.print())

// 5-) Três novos passageiros fizeram check-in: F, G, H. Adicione-os à fila.
filaAeroporto.enqueue('Passageiro F')
filaAeroporto.enqueue('Passageiro G')
filaAeroporto.enqueue('Passageiro H')

// 6-) Imprimir a fila após as alterações.
console.log('\nFila após novos check-ins:')
console.log(filaAeroporto.print())

// 7-) Quem é o próximo passageiro a embarcar? Mostre o comando e o nome do passageiro.
const proximoPassageiro = filaAeroporto.peek()
console.log(`\nPróximo passageiro a embarcar: ${proximoPassageiro}`)

// 8-) O próximo passageiro foi chamado. Remova essa pessoa e imprima a fila atualizada.
const passageiroChamado = filaAeroporto.dequeue()
console.log(`\nPassageiro chamado: ${passageiroChamado}`)
console.log('\nFila atualizada:')
console.log(filaAeroporto.print())