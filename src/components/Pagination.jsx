import React from 'react'
import "./PokedexPage/styles/PaginationNum.css"

const Pagination = ({ totalPosts, postPerPage, setCurrentPage, currentPage }) => {

    let pages = []
    let limit = Math.ceil(totalPosts / postPerPage)

    for (let i = 1; i < limit + 1; i++) {
        pages.push(i)
    }


    const sum = () => {
        setCurrentPage(currentPage + 1)
    }
    const rest = () => {
        setCurrentPage(currentPage - 1)
    }


    return (
        <div className='btn__pag'>
            <button className='btn__nextprev' disabled={currentPage === 1} onClick={rest}>←</button>
            {
                pages.map((page, i) => {
                    return <button key={i} onClick={() => setCurrentPage(page)} className={page == currentPage ? 'active__pag' : 'inactive__pag'}>{page}</button>
                })
            }
            <button className='btn__nextprev' disabled={currentPage >= limit} onClick={sum}>→</button>
        </div>

    )
}

export default Pagination