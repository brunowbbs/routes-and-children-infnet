import { Link } from "react-router-dom"
import "./styles.css"

export default function Header(){
    return(
        <header className="header">
            <h1>Logo do sistema</h1>

            <ul>
                <Link to="/" className="link" ><li>Home</li></Link>
                <Link to="/contato" className="link"><li>Contato</li></Link>
            </ul>
        </header>
    )
}