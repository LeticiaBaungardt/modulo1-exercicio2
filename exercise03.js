// 3. Filtrando Propriedades de Objetos
//     ○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
//     função que retorna um novo objeto contendo apenas as propriedades cujo
//     valor seja maior que um valor específico. Use for in para filtrar as
//     propriedades.


const notasAluno = {
    matematica: 9,
    portugues: 3,
    historia: 6,
    quimica: 9,
    fisica: 7,
    literatura: 5
};

function filtrarPorValor(obj, valorMinimo) {
    const notasFiltradas = {};

    for(const materia in obj) {
        if(obj[materia] > valorMinimo) {
            notasFiltradas[materia] = obj[materia];
        }
    }
    return notasFiltradas;
};


const resultado = filtrarPorValor(notasAluno, 6);

console.log(resultado);