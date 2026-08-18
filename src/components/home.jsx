import { StartButton } from "./button";

export default function Home({onStartGame}) {
    return (
        <div  className="home">
            <h1>Memory Card Game</h1>
            <p>Got to cliked them all</p>
            <StartButton onStartGame={onStartGame} />
        </div>
    )
}