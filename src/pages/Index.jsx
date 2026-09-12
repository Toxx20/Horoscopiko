import { Header } from "../layout/Header.jsx"
import { Container } from "../layout/Container.jsx"
import { Footer } from "../layout/Footer.jsx"

export function Index(){
    return <div className="body box-border">
        <Header></Header>
        <Container></Container>
        <Footer></Footer>
        </div>
}