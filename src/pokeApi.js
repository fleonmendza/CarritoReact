

export const getInfoPokemon = async (url) => {
    // console.log(url);
   const response = await fetch(url);
   const pokeInfo = await response.json();
//    console.log(pokeInfo);
    let pokeData = {
     name : pokeInfo.name,
     id : pokeInfo.id,
     img :pokeInfo.sprites.front_default,
     types : pokeInfo.types.map((poke) => (poke.type.name)),
     height : pokeInfo.height * 10,
     weight : pokeInfo.weight / 10,
     price : pokeInfo.stats[1].base_stat,
     cantidad: 1,
   }
   console.log(pokeData);
   return pokeData;
}

export const getApiPoke = async () => {

    const request = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=30`);
    const pokemonResult = await request.json();
    const listPokemon = pokemonResult.results;
    let url = listPokemon.map(  (listPokemon) => {
        // console.log(listPokemon.url);
        // return getInfoPokemon(listPokemon.url);
        return getInfoPokemon(listPokemon.url);
    })
    return url
}
