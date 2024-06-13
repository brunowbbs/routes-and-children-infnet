import Header from "../../components/header"
import Footer from "../../components/footer"


export default function GlobalLayout(props){
    return(
        <div>
            <Header/>
                {props.children}
            <Footer/>
        </div>
    )
}