import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/cardPokemon.css";
import { Navbar } from "./Navbar";


const baseURL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=30";

export const ListPokemons = () => {
  const [pokeDatos, setPokeDatos] = useState([]);
  const [pokemonesCarrito, setPokemonesCarrito] = useState([]);

  const addCarrito = (pokemon) =>(!pokemonesCarrito.some((item)=>item.id===pokemon.id))? setPokemonesCarrito([...pokemonesCarrito, pokemon]) : setPokemonesCarrito(pokemonesCarrito.map((poke)=> (poke.id===pokemon.id)? {...poke, cantidad: poke.cantidad+1} : poke) );
      
  

  console.log(pokemonesCarrito);

  const getPokemonData = async (url) => {
    try {
      const response = await axios.get(url);
      let pokemon = {
        name: response.data.name,
        id: response.data.id,
        img: response.data.sprites.front_default,
        types: response.data.types.map((poke) => poke.type.name),
        height: response.data.height * 10,
        weight: response.data.weight / 10,
        price: response.data.stats[1].base_stat,
        cantidad: 1,
      };
      return pokemon;
    } catch (error) {}
  };

  useEffect(() => {
    const getAllPokemons = async () => {
      try {
        const response = await axios.get(baseURL);
        const pokemones = await Promise.all(
          response.data.results.map(async (pokemon) => {
            const pokemonData = await getPokemonData(pokemon.url);
            return pokemonData;
          })
        );
        setPokeDatos(pokemones);
      } catch (error) {}
    };

    getAllPokemons();
  }, []);

  // console.log(pokeDatos);
  return (
    <>
      <Navbar pokemonesCarrito={pokemonesCarrito}/>
      <div className="container">
      {pokeDatos.map((pokemon) => (
        // <h2 key={index}>{pokemon.name}</h2>
        <div key={pokemon.id} className="card">
          <h2>{pokemon.name.toUpperCase()}</h2>
          <img src={pokemon.img} alt={pokemon.name} />
          <p>
            <strong>Tipo:</strong> {pokemon.types.join(" / ")}{" "}
          </p>
          <p>
            <strong>Altura:</strong> {pokemon.height} cm{" "}
          </p>
          <p>
            <strong>Peso:</strong> {pokemon.weight} Kg
          </p>
          <p>
            <strong>Precio:</strong> {pokemon.price} $
          </p>
          <button
            className="btnAgregarCarrito"
            onClick={() => addCarrito(pokemon)}
          >
            Agregar al Carrito
            <svg
              id="svg"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="48"
            >
              <path d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Zm.234-60Q622 916 721 816.5t99-241Q820 434 721.188 335 622.375 236 480 236q-141 0-240.5 98.812Q140 433.625 140 576q0 141 99.5 240.5t241 99.5Zm-.5-340Z" />
            </svg>
          </button>
        </div>
      ))}
    </div>
    </>
    
  );
};
