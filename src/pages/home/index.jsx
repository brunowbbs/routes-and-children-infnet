import {Link} from "react-router-dom"

// import Header from "../../components/header"
// import Footer from "../../components/footer"

import GlobalLayout from "../../layouts/global-layout"
// import Batata from "../../components/outros"

import Batata, {Box, Card} from "../../components/outros"


export default function Home(){
    return(
            <GlobalLayout>
                {/* <Header/> */}
                <h1>Hello Home</h1>
                <p>Esse texto é da página Home</p>

                {/* UTILIZAR EM CASOS MUITO ISOLADOS - EVITAR */}
                {/* <a href="http://www.google.com.br">Ir para o google</a> */}


                <Link to="/contato">
                    <p>Navegar para a pagina de contato</p>
                </Link>

                <Box/>
                <Card/>
                <Batata/>
            </GlobalLayout>
        
    )
}


// Single Page Application