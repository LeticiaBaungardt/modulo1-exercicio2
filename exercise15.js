// 15. Filtrando e Somando Valores
//     ○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem
//     tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
//     somando as entradas e subtraindo as saídas.


const transacoes = [
    {tipo: "Entrada", valor: 500},
    {tipo: "Entrada", valor: 1200},
    {tipo: "Saída", valor: 800},
    {tipo: "Entrada", valor: 2500},
    {tipo: "Saída", valor: 200},
    {tipo: "Saída", valor: 600},
];

let saldoFinal = 0;

transacoes.forEach(transacao => {
    if(transacao.tipo === "Entrada") {
        saldoFinal += transacao.valor;
    } else if(transacao.tipo === "Saída") {
        saldoFinal -= transacao.valor;
    }
})

console.log(`Saldo final: R$${saldoFinal}`);