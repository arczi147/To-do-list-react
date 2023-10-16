import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

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
    border-bottom: 1px solid ${({ theme }) => theme.color.mercury};
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
    color: ${({ theme }) => theme.color.white};
    width: 25px;
    height: 25px;
    margin-right: 10px;
    margin-left: 10px;
    transition: 0.5s;

    ${({ toggleDone }) => toggleDone && css`
        background-color: ${({ theme }) => theme.color.forestGreen};

        &:hover {
            background-color: ${({ theme }) => theme.color.brighterForestGreen};  
        }

        &:active {
            border: 2px solid ${({ theme }) => theme.color.black};
            transition: none;
        }
    `}

    ${({ remove }) => remove && css`
        float: right;
        background-color: ${({ theme }) => theme.color.alizarinCrimson};

        &:hover {
            background-color: ${({ theme }) => theme.color.redOrange};
        }

        &:active {
            border: 2px solid ${({ theme }) => theme.color.black};
            transition: none;
        }
    `};
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.color.teal};
`;