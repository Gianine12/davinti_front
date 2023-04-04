import styled from "styled-components";

export const FormularioContato = styled.form`
    border: 1px solid black;
    width: 450px;
    padding: 10px;
    border-radius: 5px;
    margin: auto;
    box-shadow: 10px 5px 5px #A1A1A1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const Label = styled.label`
    font-size: 20px;
`;

export const InputText = styled.input`
    width: 300px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid black;
    box-shadow: 5px 5px 5px #A1A1A1;
`;

export const InputNumber = styled.input`
    width: 100px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid black;
    box-shadow: 5px 5px 5px #A1A1A1;
`;

export const TextArea = styled.textarea`
    padding: 5px;
    border-radius: 5px;
    border: 1px solid black;
    box-shadow: 5px 5px 5px #A1A1A1;
`

export const H6 = styled.h6`
    color: red;
`

export const Botao = styled.button`
    padding: 5px;
    font-size: 15px;
    border: none;
    border-radius: 5px;
    height: 40px;
    width: 80px;
    cursor: pointer;
    background: #177DFF;
    color:#FFF;

    :hover {
        background: #1BA015;
        color:#fff;
        border: none;
    };
`;

export const Div = styled.div`
    margin: 10px;
`;
