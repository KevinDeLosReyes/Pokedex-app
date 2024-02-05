import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect, useState } from "react"
import "./styles/PokeIdPage.css"
import PokeIdStats from "../components/PokeIdStats"

const PokeIdPage = () => {

    const { id } = useParams()

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const [pokemon, getPokemon] = useFetch(url)
    const navigate = useNavigate()

    useEffect(() => {
        getPokemon()
    }, [id])   

    const height = (pokemon?.height * 0.1).toFixed(1)
    const weight = (pokemon?.weight * 0.1).toFixed(1)
    
    const handleNext = () => {
        navigate(`/pokedex/${Number(id) === 10228 ? 1 : Number(id) + 1}`)
    }

    const handlePrevious = () => {
        navigate(`/pokedex/${Number(id) !== 1 ? Number(id) - 1 : 10228 }`)
    }

    return (
        <article className="pokedata">
            <header className={`pokedata__header ${pokemon?.types[0].type.name}-gradient`}>
                <img className="pokedata__img" src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
            </header>
            <section className="pokedata__body">
                <div className="pokedata__headerinfo">
                    <div className="pokedata__nameid">
                        <button className="btns__id" onClick={handlePrevious}>←</button>
                        <h3 className={`pokedata__name ${pokemon?.types[0].type.name}-letter`}>{pokemon?.name}</h3>
                        <h4 className={`pokedata__id ${pokemon?.types[0].type.name}-letter`}>#{pokemon?.id}</h4>
                        <button className="btns__id" onClick={handleNext}>→</button>
                    </div>
                    <div className="pokedata__info">
                        <p className="pokedata__weight"><span className="pokedata__item">Weight:</span><br /><span>{weight}</span> kg</p>
                        <p className="pokedata__height"><span className="pokedata__item">Height:</span><br /><span>{height}</span> mts</p>
                        <div className="pokedata__type">
                            <p className="pokedata__item">Type</p>
                            {
                                pokemon?.types.map(typeInfo => (
                                    <li className="pokedata__typeinfo" key={typeInfo.type.url}>
                                        {typeInfo.type.name}
                                    </li>
                                ))
                            }
                        </div>
                        <div className="pokedata__abilities">
                            <p className="pokedata__item">Abilities</p>
                            {
                                pokemon?.abilities.map(abilityInfo => (
                                    <li className="pokedata__abilityinfo" key={abilityInfo.ability.url}>
                                        {abilityInfo.ability.name}
                                    </li>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <hr />
                <h3 className="pokedata__stattitle">Stats</h3>
                <div className="pokedata__stats">
                    <div>
                        <PokeIdStats
                        pokemon={pokemon}
                        />
                    </div>                   
                </div>
                <hr />
                <h3 className="pokedata__movements">Movements</h3>
                <div className="pokedata__moves">
                    {
                        pokemon?.moves.map(moveInfo => (
                            <li className="pokedata__movesinfo" key={moveInfo.move.url}>
                                {moveInfo.move.name}
                            </li>
                        ))
                    }
                </div>
            </section>
        </article>
    )
}

export default PokeIdPage