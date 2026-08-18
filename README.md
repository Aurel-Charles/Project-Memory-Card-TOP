# Pokémon Memory Card Game

A memory card game built with React and the PokéAPI. Test your memory by clicking each Pokémon card only once — don't click the same one twice!

## How to Play

1. Click **Start** on the home screen
2. You'll see 10 random Pokémon cards
3. Click a card — the cards will shuffle after each click
4. Try to click every card **without clicking the same one twice**
5. Score a point for each new card clicked
6. Click all 10 without repeating to win!

## Features

- 10 random Pokémon fetched from PokéAPI on each game
- Displays name, image, types, and base stats (HP, Attack, Defense)
- Animated card shuffle on each click
- Visual feedback on card click (check animation)
- Red highlight when clicking a card already seen
- Score and best score tracking
- Win / Lose messages with play again option
- Error handling for failed API requests

## Tech Stack

- React (Vite)
- PokéAPI — `https://pokeapi.co`
- CSS animations (slide in / slide out)
- `Promise.all` for parallel fetching

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
  components/
    card.jsx
    game.jsx
    home.jsx
    counter.jsx
    button.jsx
    diplayCards.jsx
    displayMsg.jsx
  utils/
    fetch.js
    shuffle.js
    random.js
    helper.js
  css/
    App.css
    card.css
    game.css
    ...
```

## Credits

- Pokémon data and images — [PokéAPI](https://pokeapi.co)
- Built as part of [The Odin Project](https://www.theodinproject.com) curriculum