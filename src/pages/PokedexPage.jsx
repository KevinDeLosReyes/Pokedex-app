import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokemonCard from "../components/PokedexPage/PokemonCard"
import SelectType from "../components/PokedexPage/SelectType"
import "./styles/PokedexPage.css"

import Pagination from "../components/Pagination"

const PokedexPage = () => {

  const [inputValue, setInputValue] = useState("")
  const [selectedType, setSelectedType] = useState("allPokemons")

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100'

  const trainer = useSelector((store) => store.trainer)

  const [pokemon, getPokemon, getTypePokemon] = useFetch(url)

  const pokemonFilter = pokemon?.results.filter(pokeFiltered => pokeFiltered.name.includes(inputValue))

  const inputSearch = useRef()

  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(20)

  const lastPostIndex = currentPage * postPerPage;
  const firstPostPage = lastPostIndex - postPerPage
  const currentPost = pokemonFilter?.slice(firstPostPage, lastPostIndex)


  useEffect(() => {
    if (selectedType === "allPokemons") {
      getPokemon()
    } else {
      getTypePokemon(selectedType)
    }

  }, [selectedType])

  const handleSearch = (e) => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }

  return (
    <div className="pokedex">
      <h2 className="pokedex__phrase">Welcome <span className="pokedex__trainer">{trainer}!</span> Look for your favorite Pokemon!</h2>
      <div className="pokedex__bar">
        <form className="pokedex__search" onSubmit={handleSearch}>
          <input className="pokedex__input" placeholder="Search a Pokemon by name" ref={inputSearch} type="text" />
          <button className="pokedex__button">Search</button>
        </form>
        <div className="pokedex__type">
          {
            <SelectType
              setSelectedType={setSelectedType}
            />
          }
        </div>
      </div>
      <div className="pokedex__card">
        {
          currentPost?.map(pokeInfo => (
            <PokemonCard
              key={pokeInfo.url}
              url={pokeInfo.url}
            />
          ))
        }
      </div>
      <Pagination
        totalPosts={pokemonFilter?.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  )
}

export default PokedexPage