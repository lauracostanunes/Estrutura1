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

console.log(`Lista atual como array: ${lista.toArray()}\n`)
console.log(`\nLista atual como array: ${lista.toArray()}`)