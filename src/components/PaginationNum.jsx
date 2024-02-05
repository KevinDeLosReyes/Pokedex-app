import { useRef } from "react"
import "../components/PokedexPage/styles/PaginationNum.css"

const PaginationNum = ({ page, qtyElements, setStart, setEnd, start }) => {

    const captureValue = () => {
        let value = parseInt(btnPage.current.textContent)
        let finalValue = value * qtyElements
        let initialValue = finalValue - qtyElements

        setStart(initialValue)
        setEnd(finalValue)
    }

    const btnPage = useRef()

    return (
        <button  className={`btn__num ${page === start ? "active__pag" : null}`} onClick={captureValue} ref={btnPage}>{page}</button>
    )
}

export default PaginationNum