import random10 from "./random"

export async function fetchPokemons() {
    console.log('fetchPokemons called')
    let data
    let error
    let isLoading

    const numbers = random10()
    const url =  'https://pokeapi.co/api/v2/pokemon/'
    
    try {

        data = await Promise.all(numbers.map( async (num) => {
            const response = await fetch(url+num)
            if (response.status === 404) throw new Error(`Error:${response.status} Pokémon not found` )
            if (response.status === 429) throw new Error(`Error:${response.status} Too many requests, please try again later`)
            if (response.status === 500) throw new Error(`Error:${response.status} PokéAPI server error`)
            if (!response.ok)throw new Error("Please reload or check your connection");
            return response.json()
        }))

        
    } catch (err) {
        console.error(err.message);
        error = err
    }
    finally{
        isLoading = false
    }

    return{
        
        data, isLoading, error
    }
}
