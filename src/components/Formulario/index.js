import axios from "axios";
import { useState } from "react";
import Swal from 'sweetalert2';
import { Botao, Div, FormularioContato, H6, InputNumber, InputText, Label, TextArea } from "./style";


export const Formulario = () => {
    const [data, setData] = useState({});

    function handleSubmit() {
        axios({
            method: 'post',
            baseURL: 'http://localhost:3333/contato/criar',
            data: data
        })
        .then((result) => {
            
        })
        .catch((e) =>{
            Swal.fire({
                title: "Erro",
                text: 'Não foi possivel salvar o contato.',
                html: <p>Valide as informações e tente novamente</p>,
                icon: 'error',
                confirmButtonText: "ok"                
            })
        })
    }
    
    return(
        <FormularioContato onSubmit={handleSubmit}>
            <Div> 
                <Label>Nome:</Label> <br/>
                <InputText 
                    type="text" 
                    required="required"
                    placeholder="João da Silva Sauro"
                    onChange={(e) => setData({...data, nome: e.target.value})}
                />
            </Div>
            <Div>
                <Label>Idade:</Label> <br/>
                <InputText 
                    type="text" 
                    required="required"
                    placeholder="15"
                    onChange={(e) => setData({...data, idade: e.target.value})}
                />
            </Div>
            <div>
                <Div>
                    <Label>DDD:</Label> <br/>
                    <InputNumber 
                        type="number" 
                        min='0' 
                        placeholder="031"
                        onChange={(e) => setData({...data, ddd: e.target.value})}
                    />
                </Div>
                <Div>
                    <Label>Telefone(s):</Label> <br/>
                    <H6>Obs.: Se tiver mais de um número separar por ';'.</H6>
                    <TextArea 
                        type="tel" 
                        placeholder="988888888;999999999;111111111" 
                        rows='7'
                        cols='39'
                        required="required" 
                        onChange={(e) => setData({...data, numero: e.target.value})}
                    />
                </Div>
            </div>
            <Div>
                <Botao>Salvar</Botao>
            </Div>
        </FormularioContato>
    )
}
