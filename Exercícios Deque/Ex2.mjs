import Stack from './Stack.mjs'

let pilha = new Stack(5)

pilha.push("Isa")
pilha.push("Mari")
pilha.push("Lau")
pilha.push("Mar")

console.log(pilha.print())

pilha.pop()
pilha.pop()

console.log(pilha.history())