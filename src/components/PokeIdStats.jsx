
const PokeIdStats = ({ pokemon }) => {

    return (
        <div>
            <div>
                {
                    pokemon?.stats.map(statInfo => (
                        <div key={statInfo.stat.url}>
                            <div className="pokedata__statsubtitle">
                                <div className="pokedata__statinfo">{statInfo.stat.name}</div>
                                <div>{statInfo.base_stat} / 255</div>
                            </div>
                            <div className="pokedata__backgrafic">
                                <div style={{
                                    width: `${(statInfo.base_stat / 255) * 100}%`
                                }}
                                    className='pokedata__grafic'
                                >
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default PokeIdStats