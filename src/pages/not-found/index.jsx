import { Link } from "react-router-dom";
// import Header from "../../components/header";
// import Footer from "../../components/footer";

import GlobalLayout from "../../layouts/global-layout";

export default function NotFound(){
    return(
        <GlobalLayout>
            {/* <Header/> */}

            <h4>Oooops... Página não encontrada!</h4>
            <Link to="/"><p>Voltar para Home</p></Link>
            {/* <Footer/> */}
        </GlobalLayout>
    )
}