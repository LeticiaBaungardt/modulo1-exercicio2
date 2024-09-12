// 6. Filtrando Arrays de Objetos
//     ○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
//     contém informações como nome, cargo, e salario. Use for of para filtrar
//     e exibir apenas os funcionários cujo salário seja maior que um valor
//     específico.

const listaFuncionarios = [
    {nome: "Felipe", cargo: "Dev Fullstack", salario: 8000},
    {nome: "Carlos", cargo: "Dev Mobile", salario: 12000},
    {nome: "Jaqueline", cargo: "Marketing", salario: 4000},
    {nome: "Nicolaz", cargo: "Design", salario: 5000}
];

const salarioBase = 6000;

for (const pessoa of listaFuncionarios) {
    if(pessoa.salario > salarioBase) {
        console.log(`Nome: ${pessoa.nome}, Cargo: ${pessoa.cargo}, Salário: R$ ${pessoa.salario}.`);
    }
}