import Card from "./card"

export function DisplayCards({pokemonList, onCardClick}) {
    return (
        <div className="card-wrapper">
        {pokemonList.map((pokemon) => 
         <Card key={pokemon.id} pokemon={pokemon} onCardClick={onCardClick}/>
        )}
        </div>
    )
}