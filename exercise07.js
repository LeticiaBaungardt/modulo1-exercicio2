// Manipulação de Arrays de Objetos com forEach
//     7. Modificando Objetos em um Array
//         ○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
//         preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
//         os produtos e exibir o novo preço.


const produtos = [
    {nome: "Teclado Mecânico", preco: 250.00, desconto: 0},
    {nome: "Mouse Gamer", preco: 120.00, desconto: 0},
    {nome: "Monitor Full HD", preco: 750.00, desconto: 0},
    {nome: "Headset com Microfone", preco: 180.00, desconto: 0}
];

produtos.forEach(promocao => {
    promocao.desconto = promocao.preco * 0.10;
    const comDesconto = promocao.preco - promocao.desconto;
    console.log(`Nome: ${promocao.nome}, Preço Original: R$ ${promocao.preco}, Preço com Desconto: R$ ${comDesconto.toFixed(0)}`);
});