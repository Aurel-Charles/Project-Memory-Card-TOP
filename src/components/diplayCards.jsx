import Card from "./card"
import '../css/card.css'

export function DisplayCards({pokemonList, onCardClick, lastClick , isSlidingOut, isSlidingIn, isGameOver}) {
    return (
        <div className="card-wrapper">
        {pokemonList.map((pokemon, index) => 
         <Card key={pokemon.id} pokemon={pokemon} onCardClick={onCardClick} lastClick={lastClick} isSlidingOut={isSlidingOut} index={index} isSlidingIn={isSlidingIn} isGameOver={isGameOver}/>
        )}
        </div>
    )
}