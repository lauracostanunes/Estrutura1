import Queue from './Queue.mjs'

let fila = new Queue();

fila.enqueue("Isadora")
fila.enqueue("Jonata")
fila.enqueue("Marina")
fila.enqueue("Lúcio")

console.log(fila.print())

fila.dequeue();
fila.enqueue("Laura")

console.log("Operações feitas: " + fila.getOperationCount())