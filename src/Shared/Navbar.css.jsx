import styled from "styled-components";


export const Button = styled.button`
    background-color:${props => props.bgColor};
    color:${props => props.color};
    border:none;
    padding: 8px 30px;
    border-radius: 4px;
    cursor:pointer;

    &:hover{
        background-color: white;
        color:red;
    }
`

