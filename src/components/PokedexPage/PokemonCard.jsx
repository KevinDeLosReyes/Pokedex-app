import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import "./styles/PokemonCard.css"

const PokemonCard = ({ url }) => {

    const [pokemonInfo, getPokemonInfo] = useFetch(url)

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/pokedex/${pokemonInfo.id}`)
    }

    useEffect(() => {
        getPokemonInfo()
    }, [])

    return (
        <article className={`card ${pokemonInfo?.types[0].type.name}-border`} onClick={handleNavigate}>
            <header className={`card__header ${pokemonInfo?.types[0].type.name}-gradient`}>
                <img className="card__img" src={pokemonInfo?.sprites.other["official-artwork"].front_default} alt="" />
            </header>
            <section className="card__body">
                <h3 className={`card__name ${pokemonInfo?.types[0].type.name}-letter`}>{pokemonInfo?.name}</h3>                
                    <h4 className="card__type">Type</h4>
                    <ul className="card__types">
                        {
                            pokemonInfo?.types.map(typeInfo => (
                                <li className="card__typename" key={typeInfo.type.url}>
                                    {typeInfo.type.name}
                                </li>
                            ))
                        }
                    </ul>                
                <hr className="card__hr"/>               
                <ul className="card__stats">
                    {
                        pokemonInfo?.stats.map(statInfo => (
                            <li className="card__statsinfo" key={statInfo.stat.url}>
                               <span className="card__statname">{statInfo.stat.name.toUpperCase()}</span> <br /> <span className="card__basestat">{statInfo.base_stat}</span>
                            </li>
                        ))
                    }
                </ul>                
            </section>
        </article>
    )
}

export default PokemonCard