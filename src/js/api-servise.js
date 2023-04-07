// делаем глоб переменн - ссілку

const Base_URL = 'https://pokeapi.co/api/v2'


function fetchPokemon(pokemonId) {
    const url = `${Base_URL}/pokemon/${pokemonId}`;
    return fetch(url)
        .then(response => 
            // console.log(response.json());
            // * возвращает снова промис поєтому возвращаем рез-т метода и к нему чейним очередной then
             response.json());
};
// * из єтой ф-и возвращается промис - // response.json(), поєтому привізове ф-и можем чейнить then


export default { fetchPokemon };