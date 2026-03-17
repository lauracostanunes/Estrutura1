/*
    1. Veja, na imagem "Torre-De-Hanoi-4-Discos.png", como funciona o jogo das Torres de Hanoi com 4 discos.

    2. Cada uma das torres do jogo se comporta como uma pilha.

    3. Em hipótese alguma, um disco maior pode ficar sobre um disco menor.

    3. Importe a classe apropriada "PILHA" da pasta "lib" e crie três pilhas, representando as três torres.
    
    4. Comece o jogo com os 4 discos na TorreB conforme a imagem "Torre-De-Hanoi-4-Discos.png", nesta ordem [1,2,3,4].

    5. Implemente o método correto que move um disco de uma torre para outra.

    6. Finalize o jogo com os 4 discos na TorreA. Use o método print() para exibir as três pilhas ANTES e DEPOIS,
    conforme a imagem "Torre-Impressao.png". DEPOIS das movimentações, a TorreA deve estar com os discos na
    ordem [1,2,3,4] e as outras duas torres (TorreB e TorreC) devem estar vazias.
*/

import Stack from '../lib/Stack.mjs';

const TorreA = new Stack();
const TorreB = new Stack();
const TorreC = new Stack();

// Inicializar TorreB com os discos [4,3,2,1], onde 1 é o topo
TorreB.push(4);
TorreB.push(3);
TorreB.push(2);
TorreB.push(1);

// Função para imprimir as torres
function printTorres() {
    console.log('TorreA:', TorreA.print());
    console.log('TorreB:', TorreB.print());
    console.log('TorreC:', TorreC.print());
}

// Função para mover um disco de uma torre para outra, verificando a validade
function move(from, to) {
    const disk = from.pop();
    if (to.isEmpty || to.peek() > disk) {
        to.push(disk);
    } else {
        console.log('Movimento inválido: disco maior sobre menor');
        from.push(disk); // recolocar o disco
    }
}

// Função recursiva para resolver a Torre de Hanoi
function hanoi(n, source, target, auxiliary) {
    if (n === 1) {
        move(source, target);
        return;
    }
    hanoi(n - 1, source, auxiliary, target);
    move(source, target);
    hanoi(n - 1, auxiliary, target, source);
}

// Estado inicial
console.log('Estado inicial:');
printTorres();

// Resolver o problema
hanoi(4, TorreB, TorreA, TorreC);

// Estado final
console.log('Estado final:');
printTorres();