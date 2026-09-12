import { Header } from "../layout/Header.jsx"
import { Footer } from "../layout/Footer.jsx"
import { ContainerView } from "../layout/ContanerView.jsx"


export function View(){
    return <div className="body box-border">
        <Header></Header>
        <ContainerView></ContainerView>
        <Footer></Footer>
    </div>
}