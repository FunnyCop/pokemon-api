fetch = require( "node-fetch" )

const getPokemon = () => {
    fetch( "https://pokeapi.co/api/v2/pokemon/?limit=1118" )
        .then( response => {
            return response.json()
        } )

        .then( response => {
            let data = JSON.parse( JSON.stringify( response ) )
            console.log( data )

        } )

        .catch( err => {
            console.log( err )
        } )
}

getPokemon( )