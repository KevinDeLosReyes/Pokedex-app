import { Link } from "react-router-dom"

const Banner = () => {
    return (
        <div>
            <img src="https://i.postimg.cc/4NMT1VPr/navbar.png" alt="" />
            <Link to="/pokedex">
                <div className="banner__img">
                    <img className="banner__letter" src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/436/896/datas/original.png" alt="" />
                </div>
            </Link>
        </div>
    )
}

export default Banner