import "./Margins.css"

const Header = () => {
    return(
        <div className="header">
            <h2 className = "words" style = {{marginRight: "auto" }}>home</h2>
            <h2 className = "words" >projects</h2>
            <h2 className = "words">git</h2>

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