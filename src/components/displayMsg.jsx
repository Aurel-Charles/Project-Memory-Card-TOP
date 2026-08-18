import '../css/displayMsg.css'
import { ResetButton } from './button'

function WinningMessage({onResetGame}) {
    return (
        <div className="winning-message">
            <h2>Congratulation !! You got them all</h2>
            <ResetButton text={'Play again?'} onResetGame={onResetGame}/>
        </div>
    )
}

function LosingMessage({score, numOfAllPokemon, onResetGame}) {
    return (
        <div className="losing-message">
            <h2>Oups, you already got this one!!</h2>
            <h3>You've got {score}/{numOfAllPokemon} pokemon(s)</h3>
            <ResetButton text={'Play again?'} onResetGame={onResetGame}/>
        </div>
    )
}


export function DisplayEndGameMessage({isWinning, isGameOver, score, numOfAllPokemon, onResetGame}) {
    let message
    if (isWinning) {
        message = <WinningMessage onResetGame={onResetGame}/>
    }
    else if (isGameOver) {
        message = <LosingMessage score={score} numOfAllPokemon={numOfAllPokemon} onResetGame={onResetGame}/>
        
    }
    return(
        message
    )

}


export function DisplayErrorMessage({error}) {
    return (
        <div className="losing-message">
            <h2>Oups, something went wrong gathering pokemon!!</h2>
            <h3>{error.message}</h3>
        </div>
    )
}
