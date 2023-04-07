
// // ! fetch()
// // * возвращает промис! можем исп-ть then
// // fetch('https://pokeapi.co/api/v2/pokemon/2').then(data => {
// //     console.log(data);
// // });
    


// //
// // ? меняем запрос уже сметодами, в данном случае json()
// // todo делаем покемона

// import pokemonCardTpl from '../templates/pokemon-card.hbs';

// // импорт из модульніх файлов:

// import API from './api-servise';

// import getRefs from `./get-refs`;


// // исп-м ф-ю из импорта
// const refs = getRefs();

// refs.searchForm.addEventListener('submit', onSearch);

// // fetch('https://pokeapi.co/api/v2/pokemon/2')
// //     .then(response => {
// //         // console.log(response.json());
// //         // * возвращает снова промис поєтому возвращаем рез-т метода и к нему чейним очередной then
// //         return response.json();

// //     })
// //     .then(renderPokemonCard)
// //     .catch(error => {
// //         console.log(error);
// //     });

//     // ? делаем fetch функцией

//     // ? из ф-и віводим then и добавляем в візове ф-и


        
// function onSearch(e) {
//     e.preventDefault();

//     const form = e.currentTarget;
    
//     const searchQuerry = form.elements.query.value;
//     // получаем ссілку на value инпута и передаем ее в ф-ю візова покемона

//     // todo добавл API внавчале
//     API.fetchPokemon(searchQuerry)
//         .then(renderPokemonCard)
//         .catch(onFetchError)
//         // независимо от рез-та делаем ресет формі
//         .finally(() => form.reset());    
    
// };
    


//     // ? віводим в функцию рисование 1 покемона

// function renderPokemonCard(pokemon) {
//          const markUp = pokemonCardTpl(pokemon);
//         refs.cardContainer.innerHTML = markUp;
// };

// // * віводим ф-ю для catch

// function onFetchError() {
//     alert('Упс, щось пішло не так');
// };