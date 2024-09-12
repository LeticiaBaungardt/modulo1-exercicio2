// 5. Calculando Valores em Arrays de Objetos
//     ○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
//     nome, nota1, e nota2. Use for of para calcular a média das notas de cada
//     aluno e exibir o nome do aluno junto com sua média.

const listaAlunos = [
    {nome: "Felipe", nota1: 9, nota2: 8},
    {nome: "Carlos", nota1: 5, nota2: 6},
    {nome: "Jaqueline", nota1: 6, nota2: 9},
    {nome: "Nicolaz", nota1: 5, nota2: 8}
];

for (const aluno of listaAlunos) {
    const media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`Nome: ${aluno.nome}, Média das notas: ${media.toFixed(1)}.`);
}