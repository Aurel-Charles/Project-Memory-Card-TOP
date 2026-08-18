export default function Card({pokemon, onCardClick}) {
    // console.log(pokemon);

    let typeOne = pokemon.types[0].type.name
    let typeTwo = pokemon.types[1]?.type.name


    return(
        <div className="card" onClick={()=> onCardClick(pokemon.name) }>
            <img className="card-img" src={pokemon.sprites.front_default} alt={pokemon.name} />
            <div className="card-infos">
                <h2 className="pokemon-name">{pokemon.name}</h2>
                <div className="pokemon-type">
                    {typeOne && <p>{typeOne}</p> }
                    {typeTwo && <p> - </p> }
                    {typeTwo && <p>{typeTwo}</p> }
                </div>
                <div className="pokemon-stat">
                {pokemon.stats
                    .filter(stat => ['hp', 'attack', 'defense'].includes(stat.stat.name))
                    .map(stat => (
                        <p key={stat.stat.name}> <span className="stat-name">{stat.stat.name}</span> : {stat.base_stat}</p>
                    ))
                    }
                </div>
            </div>
        </div>


    )
}