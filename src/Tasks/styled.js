import styled, { css } from "styled-components";

export const List = styled.ul`
    text-align: left;
    margin: 2px 0px;
    padding: 5px;
    line-height: 1.75;
    list-style: none;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    border-bottom: 1px solid rgb(226, 226, 226);
    margin-top: 10px;
    padding-bottom: 2px;

    ${({ hidden }) => hidden && css`
        display: none;
    `} 
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;    
    `}
`;

export const Button = styled.button`
    border: none;
    color: white;
    width: 25px;
    height: 25px;
    margin-right: 10px;
    margin-left: 10px;
    transition: 0.5s;

    ${({ toggleDone }) => toggleDone && css`
        background-color: rgb(26,123,30);

        &:hover {
            background-color: rgb(40,145,36);  
        }

        &:active {
            border: 2px solid black;
            transition: none;
        }
    `}

    ${({ remove }) => remove && css`
        float: right;
        background-color: rgb(236,41,56);

        &:hover {
            background-color: rgb(252,45,62);
        }

        &:active {
            border: 2px solid black;
            transition: none;
        }
    `};
`;