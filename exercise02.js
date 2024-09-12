// 2. Verificando Propriedades
//     ○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
//     anoPublicacao e genero. Verifique se a propriedade editora existe no
//     objeto usando for in. Se não existir, adicione essa propriedade ao objeto.


const livro = {
    titulo: "A Rainha Vermelha",
    autor:"Victoria Aveyard",
    anoPublicacao:2015,
    genero:" Ficção juvenil"
}

const propVerificar = "editora";
let propExiste = false;

for(propriedade in livro) {
    if(propriedade === propVerificar) {
        propExiste = true;
        break;
    }
}

if(!propExiste) {
    livro[propVerificar] = "Editora Seguinte";
}

console.log(livro);