import { StartButton } from "./button";
import pikachu from "../assets/pika.svg"
import '../css/home.css'
import Banner from "./bannner";

export default function Home({onStartGame, isVanishing}) {
    return (
        <div className={`home ${isVanishing ? 'vanish' : ''}`}>
            <Banner/>
            <img src={pikachu} alt="" />
            <StartButton text={'Start Game'} onStartGame={onStartGame} />
            <div className="rules">
                <p>How to play:</p>
                <ul>
                    <li>Click on a Pokémon card to score a point</li>
                    <li>Don't click the same card twice or it's game over</li>
                    <li>The cards shuffle after every click to trick you</li>
                    <li>Click all 10 cards without repeating to win</li>
                    <li>Try to beat your best score!</li>
                </ul>
            </div>
        </div>
    )
}