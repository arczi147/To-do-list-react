import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        padding: 5px;
    }
`;

export const Field = styled.input`
    border: 2px solid #ccc;
    padding: 10px;
`;

export const Button = styled.button`
    background-color: teal;
    color: white;
    border: none;
    padding: 10px;
    transition: 0.5s;

    &:active {
        order: 1px solid black;
        transition: none;
    }

    &:hover {
        background-color: rgb(0, 150, 150);
        transform: scale(1.1);
    }
`;