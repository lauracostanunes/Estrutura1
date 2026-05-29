import Stack from './lib/Stack.mjs';

const grafo = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: [],
    F: [],
};

// Implementação da busca em profundidade (DFS)
function dfs(grafo, inicio) {
    const visitados = new Set();

    // Cria uma nova instância da pilha
    const pilha = new Stack();
    pilha.push(inicio);

    while (!pilha.isEmpty()) {
        const no = pilha.pop();

        if (!visitados.has(no)) {
            console.log(no);
            visitados.add(no);

            for (const vizinho of grafo[no]) {
                if (!visitados.has(vizinho)) {
                    pilha.push(vizinho);
                }
            }

            /* Guarda o vetor de vizinhos do nó atual em uma variável para facilitar o acesso por índice 
            const vizinho = grafo[no];

            for (let i = vizinho.length - 1; i >= 0; i--) {
                if (!visitados.has(vizinho[i])) {
                    pilha.push(vizinho[i]);
                }
            }
            */
        }
    }
}
