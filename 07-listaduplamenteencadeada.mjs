import DoublyLinkedList from "./lib/DoublyLinkedList.mjs"

const lista = new DoublyLinkedList()

console.log("Lista está vazia? ", lista.isEmpty ? "Está vazia" : "Não")
console.log(lista.print())

lista.insert("Fiat 147", 0)
console.log("Lista está vazia? ", lista.isEmpty ? "Está vazia" : "Não")
console.log(lista.print())

lista.insert("Opala", 0)
console.log(lista.print())

lista.insertTail("Chevette")
console.log(lista.print())

lista.insert("Corcel", 1)
console.log(lista.print())

let removido = lista.remove(0)
console.log({removido}, lista.print())

removido = lista.remove(1)
console.log({removido}, lista.print())

let pos0 = lista.peek(0)
let pos1 = lista.peek(1)
console.log({pos0, pos1})

let posChevette = lista.indexOf("Chevette")
console.log({posChevette})
