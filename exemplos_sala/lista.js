let estudantes = [
    'Milton',
    'Bruno',
    'Glenda',
    'Renata',
    'Giva',
    'Alvaro',
    'Marcelo'
]

let pos = 0; //posiçao na lista
let qtd = estudantes.length;

while (pos < qtd) {
    // console.log(estudantes[pos]); // AQUI, mostro a quantidade.
    if (estudantes[pos].length > 5) { // AQUI, mostro os nomes com mais de 5 caracteres.
        console.log(estudantes[pos]);

    }

    pos++;
}