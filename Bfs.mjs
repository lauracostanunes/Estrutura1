import Queue from "./lib/Queue.mjs"

const grafo = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: [],
    F: [],
}

// implementação da busca em largura (BFS)

function bfs(grafo, inicio){

    //O set é uma estrutura de dados nativa do JS (como se fosse um array), mas com duas regras:
    //Não permite elementos duplicados: Se você tentar adicionar o valor "A" 3 vezes, ele guarda apenas uma.
    //Busca instantânea: o método .has() desconbre se um elemento está lá desntro muito mais rápido do que fazer um indexOf ou includes
    const visitados = new Set();

    const fila = new Queue();

    fila.enqueue(inicio)

    //criar um laço que vai rodar enquanto a fila NÃO estiver vazia 
    while(!fila.isEmpty){
        // remove o primeiro elemento da fila (o mais antigo) e guarda na variável 'no'
        const no = fila.dequeue()

        if(!visitados.has(no)){
            console.log(no)

            visitados.add(no)
        }
    }
}

bfs(grafo, "A")