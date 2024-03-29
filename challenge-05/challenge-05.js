/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [ 42, 'dog', NaN, {nome: 'André'}, ['haha']];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction( myArray )[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function arrayFind(arr, n) {
    return arr[n];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var newArr = ['André', 42, null, [3, 7], {}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(arrayFind(newArr, 0));
console.log(arrayFind(newArr, 1));
console.log(arrayFind(newArr, 2));
console.log(arrayFind(newArr, 3));
console.log(arrayFind(newArr, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(livro){
    var livros = {
        ['A Batalha do Apocalipse'] : {
            quantidadePaginas: 586,
            autor: 'Eduardo Spohr',
            editora: '‎Verus',
        },
        ['O Pequeno Principe'] : {
            quantidadePaginas: 96,
            autor: 'Antoine de Saint-Exupéry',
            editora: 'Edit. Aster',
        },
        ['eloquent']: {
            quantidadePaginas: 472,
            autor: 'Marijn Haverbeke ',
            editora: '‎No Starch Press',
        },
    }
    if(livro == undefined) {
        return livros;
    }
    return livros[livro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
 var bookName1 = 'eloquent';
console.log("O livro " + bookName1 + " tem " + book(bookName1).quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var bookName2 = 'O Pequeno Principe';
console.log('O autor do livro '+ bookName2 +' é ' + book(bookName2).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var bookName3 = 'A Batalha do Apocalipse';
console.log('O livro '+ bookName3 +' foi publicado pela editora ' + book(bookName3).editora + '.');
