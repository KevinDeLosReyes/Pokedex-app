import { useRef } from "react"
import { setTrainerS } from "../store/slices/trainer.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import "./styles/HomePage.css"


const HomePage = () => {

  const inputTrainer = useRef()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleTrainer = (e) => {
    e.preventDefault()
    dispatch(setTrainerS(inputTrainer.current.value.trim()))
    navigate("/pokedex")
  }

  const urlImg = "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/436/896/datas/original.png"

  return (
    <article className="home">
      <div className="home__fatherimg">
      <img className="home__img" src={urlImg}></img>
      </div>
      <h2 className="home__phrase">Hey trainer!</h2>
      <p className="home__indication"> To start please introduce your name!</p>
      <form className="home__name" onSubmit={handleTrainer}>      
        <input className="home__input" placeholder="ej. Ash" ref={inputTrainer} type="text" />
        <button className="home__button">Start!</button>      
      </form>
    </article>
  )
}

export default HomePage