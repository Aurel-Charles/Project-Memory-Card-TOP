import { useEffect, useState } from 'react'
import './App.css'
import { fetchPokemons } from './utils/fetch'
import { DisplayCards } from './components/diplayCards'
import Counter from './components/counter'
import shuffle from './utils/shuffle'
import { ResetButton } from './components/button'
import Home from './components/home'
import Game from './components/game'

function App() {
  const [isStarted, setIsStarted] = useState(false)

  const [pokemonList , setPokemonList] =  useState([])
  const [isLoading , setIsLoading] =  useState(true)
  const [error , setError] =  useState(null)

  const [score , setScore] =  useState(0)
  const [bestScore , setBestScore] =  useState(0)
  
  const [checkedCard , setCheckedCard] =  useState([])
  
  const [isGameOver , setIsGameOver] =  useState(false)
  const [isWinning , setIsWinning] =  useState(false)

  const [resetGame, setResetGame] = useState(false)

  
  useEffect(()=> {
    async function getPokemon() {
      const {data , isLoading, error} =  await fetchPokemons()
      setPokemonList(data)
      setIsLoading(isLoading)
      setError(error)
    }
    getPokemon()
  },
  [resetGame]
  )

  function onStartGame() {
    setIsStarted(true)
  }

  function onCardClick(pokemon) {
    if (isGameOver) {
      return
    }
    if (checkedCard.includes(pokemon)) {
      setIsGameOver(true)
      return
    }
    setCheckedCard([...checkedCard, pokemon])
    let currentScore = score
    setScore(currentScore + 1)
    if (currentScore + 1 >= bestScore) {
      setBestScore(currentScore + 1)
    }
    if (currentScore + 1 === pokemonList.length) {
      setIsWinning(true)
    }
    setPokemonList(shuffle(pokemonList))
  }

  function onResetGame() {
    setScore(0)
    setCheckedCard([])
    setIsGameOver(false)
    setIsWinning(false)
    setResetGame(!resetGame)
  }
  
  return (
    <>
    {!isStarted ? 
    <Home onStartGame={onStartGame}/> :
    <Game 
      isLoading={isLoading} 
      pokemonList={pokemonList} 
      onCardClick={onCardClick} 
      score={score} 
      bestScore={bestScore} 
      onResetGame={onResetGame}
      isWinning={isWinning}
      isGameOver={isGameOver}
      error={error}
      /> }
    </>
  )
}

export default App
