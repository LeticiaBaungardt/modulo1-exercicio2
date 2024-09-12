// 8. Criando Novos Arrays a Partir de Objetos
//     ○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
//     diretor, e anoLancamento. Use forEach para criar um novo array
//     contendo apenas os títulos dos filmes.


const filmes = [
    {titulo: "Kimi no na wa", diretor: "Makoto Shinkai", anoLancamento: 2017},
    {titulo: "Deadpool & Wolverine", diretor: "Shawn Levy", anoLancamento: 2024},
    {titulo: "Parasite", diretor: "Bong Joon-ho", anoLancamento: 2019},
    {titulo: "Harry Potter e o Prisioneiro de Azkaban", diretor: "Alfonso Cuarón", anoLancamento: 2004}
]

const titulosFilmes = [];

filmes.forEach(filme => {
    titulosFilmes.push(filme.titulo);
})

console.log(titulosFilmes);