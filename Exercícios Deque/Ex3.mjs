import Deque from './Deque.mjs'

let deque = new Deque(5);
console.log("Tamanho do deque: " + deque.size() +
            "\nTamanho máximo: " + deque.maxSize)


deque.insertBack("Afonso")
deque.insertBack("Lucas")
console.log(deque.print())

deque.insertFront("Pedro")
deque.insertFront("Paulo")
console.log(deque.print())

deque.insertFront("Henrique")
deque.insertFront("Olívia")
console.log(deque.print())