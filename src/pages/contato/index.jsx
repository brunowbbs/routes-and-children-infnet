import {Link} from "react-router-dom"

// import Header from "../../components/header"
// import Footer from "../../components/footer"

import GlobalLayout from "../../layouts/global-layout"

export default function Contato(){
    return(
        <div>
            <GlobalLayout children={<>            
            <h1>Hello Contato</h1>
            <p>Essa é a tela de contato</p>

            <Link to="/">
                <p>Voltar</p>
            </Link></>}/>


        </div>
    )
}