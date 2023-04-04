import { useEffect } from "react";
import { Table} from "./style";

export const  ListaCont = ({dados}) => {
    useEffect(() => {
    },[dados])

    return(
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    {dados?.map(itens => {
                        return(
                            <tr key={itens.id}>
                                <td>{itens.contato.nome}</td>
                                <td>{itens.contato.idade}</td>
                                <td>{itens.numero}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}
