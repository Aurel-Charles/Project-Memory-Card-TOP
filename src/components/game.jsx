import { ResetButton } from "./button";
import Counter from "./counter";
import { DisplayCards } from "./diplayCards";
import { DisplayEndGameMessage, DisplayErrorMessage } from "./displayMsg";



export default function Game({isLoading, pokemonList, onCardClick, score, bestScore, onResetGame, isWinning, isGameOver, error}) {
    console.log(error);
    console.log(isLoading);
    if (error) {
        return(
          <DisplayErrorMessage error={error}/>
        )
    }
    
    return(
    <>
    {isLoading ? <p>...chargement</p> : <DisplayCards pokemonList={pokemonList} onCardClick={onCardClick} /> }
    <Counter score={score} bestScore={bestScore}/>
    <ResetButton onResetGame={onResetGame}/>
    <DisplayEndGameMessage isWinning={isWinning} isGameOver={isGameOver} score={score} numOfAllPokemon={pokemonList.length} />
    </>
    )
}