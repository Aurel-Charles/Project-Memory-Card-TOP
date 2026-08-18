function WinningMessage() {
    return (
        <div className="winning-message">
            <h2>Congratulation !! You got them all</h2>
        </div>
    )
}

function LosingMessage({score, numOfAllPokemon}) {
    return (
        <div className="losing-message">
            <h2>Oups, this one was already found!!</h2>
            <h3>You got {score} / {numOfAllPokemon} pokemon(s)</h3>
        </div>
    )
}


export function DisplayEndGameMessage({isWinning, isGameOver, score, numOfAllPokemon}) {
    let message
    if (isWinning) {
        message = <WinningMessage/>
    }
    else if (isGameOver) {
        message = <LosingMessage score={score} numOfAllPokemon={numOfAllPokemon}/>
        console.log(message);
        
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
