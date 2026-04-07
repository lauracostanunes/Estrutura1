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

console.log(`Ocorrências de "Item 1": ${lista.countOccurrences("Item 1")}`)
console.log(`Ocorrências de "Item 5": ${lista.countOccurrences("Item 5")}`)