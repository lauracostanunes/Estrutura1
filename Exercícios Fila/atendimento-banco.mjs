/*
    Um banco tem um sistema de senhas para organizar o atendimento ao público.
    Os clientes chegam e pegam uma senha. A ordem de chegada é:

    Cliente 101
    Cliente 102
    Cliente 103
    Cliente 104
    Cliente 105

    1-) Crie um objeto filaBanco e insira os clientes na ordem correta.

    2-) Imprima a fila antes do atendimento.

    3-) O primeiro cliente foi chamado e atendido. Remova esse cliente da fila e imprima o nome dele.

    4-) Imprima a fila após a remoção.

    5-) Dois novos clientes pegaram senha:

    Cliente 106
    Cliente 107

    Adicione-os à fila.

    6-) Imprima a fila após as alterações.

    7-) Qual é o próximo cliente a ser atendido? Mostre o comando e o número da senha.

    8-) O atendente chamou o próximo cliente. Remova essa pessoa e imprima a fila atualizada.

    */

import Queue from './Queue.mjs'

let filaBanco = new Queue()

// 1) Inserir os clientes na ordem de chegada
filaBanco.enqueue('Cliente 101')
filaBanco.enqueue('Cliente 102')
filaBanco.enqueue('Cliente 103')
filaBanco.enqueue('Cliente 104')
filaBanco.enqueue('Cliente 105')

// 2) Imprimir a fila antes do atendimento
console.log('Fila antes do atendimento:')
console.log(filaBanco.print())

// 3) O primeiro cliente foi chamado e atendido. Remover e imprimir o nome
let atendido = filaBanco.dequeue()
console.log('Cliente atendido:', atendido)

// 4) Imprimir a fila após a remoção
console.log('Fila após a remoção:')
console.log(filaBanco.print())

// 5) Dois novos clientes pegaram senha
filaBanco.enqueue('Cliente 106')
filaBanco.enqueue('Cliente 107')

// 6) Imprimir a fila após as alterações
console.log('Fila após adição de novos clientes:')
console.log(filaBanco.print())

// 7) Qual é o próximo cliente a ser atendido?
console.log('Próximo cliente a ser atendido:', filaBanco.peek())

// 8) O atendente chamou o próximo cliente. Remover e imprimir a fila atualizada
let proximo = filaBanco.dequeue()
console.log('Cliente removido:', proximo)
console.log('Fila atualizada:')
console.log(filaBanco.print())