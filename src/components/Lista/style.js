import styled from "styled-components";

export const Table = styled.table`
    border: 1px solid #000000;
    border-collapse: collapse;
    border-radius: 100px;
    margin: 10px auto;

    thead, tbody {
        border: 1px solid #000000;
        border-collapse: collapse;
        border-radius: 100px;
    }

    thead {
        background-color: #96D4D4;
        border-radius: 100px;
    }

    td, th {
        border: 1px solid #000000;
        text-align: center;
        border-color: #96D4D4;
    }

    td {
        padding: 5px;
    }

    th {
        font-weight: 600;
        font-size: 20px;
        padding: 10px;
        width: 350px;
    }
`;
