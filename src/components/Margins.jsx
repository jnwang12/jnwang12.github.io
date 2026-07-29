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
            <div className="aligning">
                <h2 style={{color: "#FFFAE9", padding: "50px"}}>let's chat! contact me at:</h2>
                <h2 style = {{color: "#FFFAE9", textDecoration: "underline"}}>jw321@rice.edu</h2>
            </div>
            <div>
                <h2 style={{color: "#FFFAE9"}}>made with ♡ by joy!!</h2>
            </div>
        </div>
        
    )

}




export {Header, Footer}