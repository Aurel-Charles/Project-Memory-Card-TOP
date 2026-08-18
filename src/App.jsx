import { useEffect, useState } from 'react'
import './css/App.css'
import { fetchPokemons } from './utils/fetch'
import shuffle from './utils/shuffle'
import Home from './components/home'
import Game from './components/game'
import { wait } from './utils/helper'

function App() {
  const [isStarted, setIsStarted] = useState(false)
  const [pokemonList , setPokemonList] =  useState([])
  const [isLoading , setIsLoading] =  useState(true)
  const [error , setError] =  useState(null)

  const [score , setScore] =  useState(0)
  const [bestScore , setBestScore] =  useState(0)
  
  const [checkedCard , setCheckedCard] =  useState([])
  const [lastClick, setLastClick] = useState(null)
  const [isSlidingOut, setIsSlidingOut] = useState(false)
  const [isSlidingIn, setIsSlidingIn] = useState(true)
  const [isVanishing, setIsVanishing] = useState(false)


  
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



  async function onStartGame() {
    setIsVanishing(true)
    await wait(500)
    setIsStarted(true)
  }

  function onCardClick(pokemon) {
    if (isGameOver) {
      return
    }
    if (checkedCard.includes(pokemon)) {
      setLastClick(pokemon)
      setIsGameOver(true)
      return
    }



    
    async function animateCards(pokemon) {
      setLastClick(pokemon)
      await wait(600)
      setLastClick(null)
      setIsSlidingOut(true)
      await wait(1000)
      setPokemonList(shuffle(pokemonList))
      setIsSlidingOut(false)
      setIsSlidingIn(true)
      await wait(1000)
      setIsSlidingIn(false)
    }
    animateCards(pokemon)

    setCheckedCard([...checkedCard, pokemon])
    let currentScore = score
    setScore(currentScore + 1)
    if (currentScore + 1 >= bestScore) {
      setBestScore(currentScore + 1)
    }
    if (currentScore + 1 === pokemonList.length) {
      setIsWinning(true)
    }
  }

  async function onResetGame() {
    setIsSlidingOut(true)
    await wait(1000)
    setIsSlidingOut(false)
    setScore(0)
    setCheckedCard([])
    setIsGameOver(false)
    setIsWinning(false)
    setLastClick(null)
    setIsSlidingIn(true)
    setResetGame(!resetGame) 
    await wait(1000)
    setIsSlidingIn(false)
  }

  return (
    <>
    {!isStarted ? 
    <Home isVanishing={isVanishing} onStartGame={onStartGame}/> :
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
      lastClick={lastClick}
      isSlidingOut={isSlidingOut}
      isSlidingIn={isSlidingIn}
      /> }
    </>
  )
}

export default App
