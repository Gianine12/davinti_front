import { Formulario } from "../../components/Formulario"
import NavBar from "../../components/NavBar"
import { ContatoPrincipal } from "./styles"

export const Contato = () => {
    return(
        <ContatoPrincipal>
            <NavBar/>
            <h1>Cadastro de Contatos</h1>
            <Formulario/>
        </ContatoPrincipal>
    )
}
