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

    // Cria uma nova instância da fila em LIB
    const fila = new Queue();

    // Insere o nó de partida (nó inicial) no final da fila
    fila.enqueue(inicio)

    //criar um laço que vai rodar enquanto a fila NÃO estiver vazia 
    while(!fila.isEmpty){
        // remove o primeiro elemento da fila (o mais antigo) e guarda na variável 'no'
        const no = fila.dequeue()

        // O método .has() checha se o nó atual NÃO está dentro do conjunto de visitados
        if(!visitados.has(no)){

            // Imprime o nó no console
            console.log(no)

            // Método de adicionar o nó atual no conjunto para marcar que ele já foi visitado/ processado
            visitados.add(no)

            // Percorre cada um dos vizinhos do nó atual da lista de adjacência
            for(const vizinho of grafo[no]){
                // Se o vizinho não foi visitado, adiciona à fila
                if(!visitados.has(vizinho)){
                    fila.enqueue(vizinho)
                }
            }
        }
    }
}

bfs(grafo, "A")