// 12. Atualizando um Array de Objetos
//     ○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
//     produto, quantidade e minimo. Use forEach para atualizar a quantidade
//     dos produtos que estão abaixo do mínimo, duplicando suas quantidades.


const estoque = [
    {produto: "Cerveja", quantidade: 20, minimo: 100},
    {produto: "Vinho", quantidade: 15, minimo: 20},
    {produto: "Refrigerante", quantidade: 100, minimo: 80},
    {produto: "Suco", quantidade: 40, minimo: 35},
    {produto: "Água", quantidade: 10, minimo: 80}
]

estoque.forEach(quantidade =>{
    while (quantidade.quantidade < quantidade.minimo) {
        quantidade.quantidade *= 2;
      }
});

console.log(estoque);