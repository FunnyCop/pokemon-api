import React from "react"

const GetPokemon = props => {
    const PokeAPI = () => {
        fetch( "https://pokeapi.co/api/v2/pokemon/?limit=1118" )
            .then( response => {
                return response.json()
            } )

            .then( response => {
                let data = JSON.parse( JSON.stringify( response ) )
                props.setPokemon( data.results )
            } )

            .catch(err => {
                throw new Error( err )
            } )
    }

    return (
        <div>
            <button onClick={ PokeAPI }>Get Pokemon!</button>
        </div>
    )
}

export default GetPokemon

