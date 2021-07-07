import React, { useState } from "react"

import GetPokemon from "../components/GetPokemon"

import "./App.css"

const App = () => {
  const [ pokemon, setPokemon ] = useState( [] )

  return (
    <div className = "App">
      <GetPokemon pokemon = { pokemon } setPokemon = { setPokemon } />
      <ul>
        { pokemon.map( ( item, index ) => <li>{ item.name }</li> ) }
      </ul>
    </div>
  );
}

export default App
