import "./Margins.css"
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <div className="header">
            <Link to="/" className = "words" style={{ marginRight: 'auto' }}>home</Link>
            <Link to="/recipes" className="words">recipes/creations </Link>
            <Link to="/projects" className = "words" >projects</Link>
            <h2 className = "words">github</h2>

        </div>
    )
}

const Footer = () => {
    return(
        <div className="footer">
            <h2 style = {{ color: "#FFFAE9",padding: "50px"}}>let's chat! contact me at:</h2>
            <h2 style = {{color: "#FFFAE9", padding: "50px", textDecoration: "underline"}}>jw321@rice.edu</h2>

        </div>
    )

}




export {Header, Footer}