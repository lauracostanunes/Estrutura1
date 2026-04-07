import LinkedList from "./LinkedList.mjs";

let lista = new LinkedList()

lista.insertHead("Item 1")
lista.insertTail("Item 2")
lista.insertTail("Item 1")
lista.insertTail("Item 3")
lista.insertTail("Item 1")
lista.insertTail("Item 4")
lista.insertTail("Item 5")

console.log(`Lista atual: ${lista.print()}`)

lista.reverse()

console.log(`Lista após Reverse(): ${lista.print()}`)