import { ResetButton } from "./button";
import Counter from "./counter";
import { DisplayCards } from "./diplayCards";
import { DisplayEndGameMessage, DisplayErrorMessage } from "./displayMsg";
import "../css/game.css"
import Banner from "./bannner";


export default function Game({isLoading, pokemonList, onCardClick, score, bestScore, onResetGame, isWinning, isGameOver, error , lastClick, isSlidingOut, isSlidingIn}) {
    if (error) {
        return(
          <DisplayErrorMessage error={error}/>
        )
    }
    
    return(
    <>
        <Banner/>
    <div className="game">
        {isLoading ? <p>...chargement</p> : <DisplayCards pokemonList={pokemonList} onCardClick={onCardClick} lastClick={lastClick} isSlidingOut={isSlidingOut} isSlidingIn={isSlidingIn} isGameOver={isGameOver} /> }
        <Counter score={score} bestScore={bestScore}/>
        <ResetButton text={'Reset Game'} onResetGame={onResetGame}/>
        <DisplayEndGameMessage isWinning={isWinning} isGameOver={isGameOver} score={score} numOfAllPokemon={pokemonList.length} onResetGame={onResetGame} />
    </div>
    </>
    )
}