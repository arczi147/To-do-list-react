import styled, { css } from "styled-components";

export const Subsection = styled.div`
    align-items: center;
    padding: 10px;
    text-align: right;

    @media (max-width: 767px) {
        display: grid;
        grid-template-rows: 1fr;
    }
`;

export const Button = styled.button`
    background-color: white;
    color: teal;
    border: none;
    padding: 10px;
    transition: 0.5s;

    ${({ hideDone }) => hideDone && css`
        &:hover {
            color: rgb(0, 170, 170);
        }
    `}

    ${({ done }) => done && css`
        &:disabled {
            color: #ccc;
            transition: none;
        }
    `};
`;