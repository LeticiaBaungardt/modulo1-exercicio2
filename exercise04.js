// Manipulação de Arrays de Objetos com for of
//     4. Iterando Sobre Arrays de Objetos
//         ○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
//         uma pessoa com nome, idade, e cidade. Use for of para exibir as
//         informações de cada pessoa no console.

const listaPessoas = [
    {nome: "Felipe", idade: 30, cidade: "Porto Alegre"},
    {nome: "Carlos", idade: 37, cidade: "São Leopoldo"},
    {nome: "Jaqueline", idade: 32, cidade: "Novo Hamburgo"},
    {nome: "Nicolaz", idade: 22, cidade: "Canoas"}
];

for (const pessoa of listaPessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}.`);
}