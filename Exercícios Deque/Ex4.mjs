import Stack from './Stack.mjs'

let pilha = new Stack(5);
console.log("Tamanho máximo: " + pilha.maxSize)


pilha.push("Afonso")
pilha.push("Bernardo")
console.log(pilha.print())

pilha.push("Carlos")
pilha.push("Danilo")
pilha.push("Elena")
console.log(pilha.print())

pilha.push("Fabrício")
console.log(pilha.print())

pilha.pop()
pilha.pop()
pilha.push("Fabrício")
console.log(pilha.print())