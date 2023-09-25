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
    // console.log(estudantes[pos]);
    if (estudantes[pos].length > 5) {
        console.log(estudantes[pos]);

    }

    pos++;
}