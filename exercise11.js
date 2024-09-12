// 11. Agrupando Elementos com forEach
//     ○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
//     cliente, produto, e quantidade. Use forEach para criar um objeto que
//     agrupa a quantidade total de produtos por cliente.


const pedidos = [
    {cliente: "Pedro", produto: "Maça", quantidade: 12},
    {cliente: "Paula", produto: "Banana", quantidade: 8},
    {cliente: "João", produto: "Mamão", quantidade: 2},
    {cliente: "João", produto: "Pêra", quantidade: 10},
    {cliente: "Paula", produto: "Uva", quantidade: 6}
];

let totalPorCliente = {};

pedidos.forEach(pedido => {
    totalPorCliente[pedido.cliente] = (totalPorCliente[pedido.cliente] ?? 0) + pedido.quantidade;
});

console.log(totalPorCliente);