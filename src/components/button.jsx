export function ResetButton({text, onResetGame}) {
    return (
        <button onClick={onResetGame}>{text}</button>
    )
}

export function StartButton({text, onStartGame}) {
    return (
        <button onClick={onStartGame}>{text}</button>
    )
}
