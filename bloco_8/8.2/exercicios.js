const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

const autorBorn = books.find(((book) => book.author.birthYear === 1947)).author.name;

console.log(autorBorn);
assert.strictEqual(autorBorn, 'Stephen King');

//2 - Retorne o nome do livro de menor nome.
function smallerName() {
    let nameBook;
    books.forEach((elemento) => {
      if(!nameBook || elemento.name.length < nameBook.length) {
          nameBook = elemento.name;
      }
    }); return nameBook;
}
 console.log(smallerName()); 
  
  assert.strictEqual(smallerName(), 'Duna');

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
const getNamedBook = books.find(((element) => element.name.length === 26)).name;

  console.log(getNamedBook);

  assert.deepStrictEqual(getNamedBook, 'As Crônicas de Gelo e Fogo',);

  const booksOrderedByReleaseYearDesc = books.sort(((a,b) => b.releaseYear - a.releaseYear));
console.log(booksOrderedByReleaseYearDesc);
  

  // 4 - Ordene os livros por data de lançamento em ordem decrescente.
//   const expectedResult = [1991, 1986, 1965, 1954, 1951, 1928];

const expectedResult = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

const booksOrderedByReleaseYearDesc = books.sort(((a,b) => b.releaseYear - a.releaseYear));
console.log(booksOrderedByReleaseYearDesc);
  
  assert.deepStrictEqual(booksOrderedByReleaseYearDesc, expectedResult);

  // 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.