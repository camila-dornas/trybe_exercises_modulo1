const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 11);
  
    if (number <= 5) {
      return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
    }
    resolve(console.log(`Que sucesso =) nosso número foi ${number}`));
  });

  /// GESTORES DE FLUX -- THEN //

  const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 11);
  
    if (number <= 5) {
      return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
    }
    resolve(number);
  })
  .then(number => `Que sucesso =) nosso número foi ${number}`)
  .then(msg => console.log(msg));
  //// GESTORES DE FLUXO -- CATCH ////
  const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random()* 11);
  
    if (number <= 5) {
      return reject(number);
    }
    resolve(number);
  })
  .then(number => `Que sucesso =) nosso número foi ${number}`)
  .then(msg => console.log(msg))
  .catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));
  /// ERROS COMUNS ///
  const fetch = require('node-fetch');

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(r.value));
    } else {
      reject(new Error('endpoint não existe'));
    }
  });
}
//////
const fetch = require('node-fetch');

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
        fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(r.value));
    } else {
      reject(new Error('endpoint não existe'));
    }
  });
}

function sendJokeToFriend(name) {
  const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna");