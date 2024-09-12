// Combinação de Estruturas
//     10. Criando Relatórios com Objetos e Arrays
//         ○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
//         quantidade e valor. Use forEach para calcular o valor total de vendas de
//         todos os produtos.


const vendas = [
    {produto: "Lápis", quantidade: 3, valor: 3},
    {produto: "Caneta", quantidade: 4, valor: 5},
    {produto: "Caderno", quantidade: 2, valor: 12},
    {produto: "Borracha", quantidade: 2, valor: 2},
    {produto: "Apontador", quantidade: 1, valor: 7}
];

let totalVendas = 0;

vendas.forEach(total =>{
    totalVendas += total.quantidade * total.valor;
});

console.log(`O valor total da compra foi de R$${totalVendas}.`);