// 13. Implementando um Carrinho de Compras
//     ○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
//     array de objetos. Cada objeto dentro de itens deve representar um
//     produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
//     para calcular o valor total do carrinho.


const carrinho = {
    itens: [
        {nome: "Cadeiras", quantidade: 10, precoUnitario: 1500},
        {nome: "Mesas", quantidade: 5, precoUnitario: 2000},
        {nome: "Pufes", quantidade: 6, precoUnitario: 500},
        {nome: "Banquetas", quantidade: 3, precoUnitario: 800},
        {nome: "Bancos", quantidade: 2, precoUnitario: 200},
    ]
};

let valorTotal = 0;

carrinho.itens.forEach(valor => {
    valorTotal += valor.quantidade * valor.precoUnitario;
});

console.log(`Valor total do carrinho: R$${valorTotal}.`);