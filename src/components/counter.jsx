export default function Counter({score, bestScore}) {
    return (
        <div className="counter">
            <p className="score">Score: {score} </p>
            <p className="best-score">Best score: {bestScore} </p>
        </div>
    )
}