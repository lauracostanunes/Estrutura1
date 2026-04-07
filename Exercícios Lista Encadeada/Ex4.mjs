import LinkedList from "./LinkedList.mjs";

let lista = new LinkedList()

lista.insertHead("Item 1")
lista.insertHead("Item 1")
lista.insertTail("Item 2")
lista.insertTail("Item 1")
lista.insertTail("Item 3")
lista.insertTail("Item 1")
lista.insertTail("Item 4")
lista.insertTail("Item 5")

console.log(`\nLista antes da remoção de "Item 1": ${lista.print()}`)
lista.removeAll("Item 1")
console.log(`Lista após remoção de "Item 1": ${lista.print()}`)
console.log(`Removidos: ${lista.history()}`)
