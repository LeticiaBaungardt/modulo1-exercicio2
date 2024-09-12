// 9. Contabilizando Elementos com uma Condição
//     ○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
//     nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
//     de 30 anos.

const clientes = [
    {nome: "Eduardo", idade: 35, cidade: "Porto Alegre"},
    {nome: "Maria", idade: 28, cidade: "São Paulo"},
    {nome: "Camila", idade: 41, cidade: "Belo Horizonte"},
    {nome: "Henrique", idade: 32, cidade: "Florianópolis"},
    {nome: "Fernando", idade: 22, cidade: "Rio de Janeiro"}
]

let counter = 0;

clientes.forEach(idadeClientes => {
    if(idadeClientes.idade > 30) {
        counter++;
    }
});

console.log(`Clientes com mais de 30 anos: ${counter}`);