import Queue from "./lib/Queue.mjs";

let fila = new Queue()
console.log(fila.print())
console.log("Esta vazia?", fila.isEmpty)

//Inserções na fila
fila.enqueue("Alexandre") // Adiciona um item no final da fila
fila.enqueue("João")
fila.enqueue("Maria")
fila.enqueue("Joaquim")

console.log(fila.print())

let proximo = fila.peek()
console.log({proximo})

let atendido = fila.dequeue()
console.log({atendido})
console.log(fila.print())
proximo = fila.peek()
console.log({proximo})

fila.enqueue("Sergio")
console.log(fila.print())