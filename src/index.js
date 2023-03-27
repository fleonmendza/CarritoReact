// import React from 'react';
import { React, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {ListPokemons} from './components/ListPokemons'
import './styles/cardPokemon.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    
    <ListPokemons/>
    
  </StrictMode>
);
