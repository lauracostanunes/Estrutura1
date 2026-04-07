import Deque from './Deque.mjs'

let deque = new Deque(5)

deque.insertBack("Macarrão")
deque.insertBack("Açúcar")
deque.insertBack("Detergente")
console.log(deque.print())

deque.insertFront("Sapólio")
deque.insertFront("Farfalle")
deque.insertFront("Água")

console.log(deque.print())

deque.insertBack("Açúcar")