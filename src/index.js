// import React from 'react';
import { React, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {Navbar} from './Navbar';
import {ListPokemons} from './ListPokemons'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <>
    <Navbar/>
    <ListPokemons/>
    </>
  </StrictMode>
);
