import Deque from "./lib/Deque.mjs"

let listaCompras = new Deque()
console.log(listaCompras.print())
console.log("Está vazia?\n", listaCompras.isEmpty)

//Produtos alimenticio -> início
listaCompras.insertFront("Arroz")
listaCompras.insertFront("Feijão")
listaCompras.insertFront("Macarrão")
console.log(listaCompras.print())

//Produtos higiene/limpeza -> final
listaCompras.insertBack("Sabão em pó") // Adiciona um item no final da lista
listaCompras.insertBack("Desodorante")
listaCompras.insertBack("Água Sanitária")
console.log(listaCompras.print())

listaCompras.insertFront("Café") // Adiciona um item no início da lista
listaCompras.insertFront("Açúcar")
console.log(listaCompras.print())

listaCompras.insertBack("Amaciante")
listaCompras.insertBack("Shampoo")
listaCompras.insertBack("Condicionador")
console.log(listaCompras.print())

let removido = listaCompras.removeFront() // Remove o item do início da lista
console.log({removido})
console.log(listaCompras.print())

let removidoDoFinal = listaCompras.removeBack() // Remove o item do final da lista
console.log({removidoDoFinal})
console.log(listaCompras.print())

let frente = listaCompras.peekFront() // Retorna o item do início da lista sem removê-lo
console.log({frente})
let final = listaCompras.peekBack() // Retorna o item do final da lista sem removê-lo
console.log({final})