import { useEffect, useState } from "react"
import { ListaCont } from "../../components/Lista"
import NavBar from "../../components/NavBar"
import { Pesquisa } from "../../components/Pesquisar"
import { ListaPrincipal } from "./style"
import axios from "axios"

export const ListaContato = ({}) => {
    const [dados, setDados] = useState();
    const [aux, setAux] = useState();

    const handlePesquisa = (data) => {
        let nome_pesquisado = aux.filter((item) => item.contato.nome.includes(data));

        if(nome_pesquisado === '' || data === ''){
            setAux(dados);
        }else{
            setAux(nome_pesquisado);
        }
    }

    useEffect(() => {
        axios.get('http://localhost:3333/contato')
        .then((result) => {
            setDados(result.data);
            setAux(result.data);
        })
        .catch((e) => {
            console.log(e)
        })
    },[])

    return(
        <ListaPrincipal>
            <NavBar/>
            <Pesquisa
                handlePesquisa={handlePesquisa}
            />
            <ListaCont
                dados={aux}
            />
        </ListaPrincipal>
    )
}
