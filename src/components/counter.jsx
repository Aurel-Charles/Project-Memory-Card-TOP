import '../css/counter.css'

export default function Counter({score, bestScore}) {
    return (
        <div className="counter">
            <p className="score">Score <span className='counter-num'>{score}</span> </p>
            <hr />
            <p className="best-score">Best score <span className='counter-num'>{bestScore}</span> </p>
        </div>
    )
}