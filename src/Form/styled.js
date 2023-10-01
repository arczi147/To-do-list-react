import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        padding: 5px;
    }
`;

export const Field = styled.input`
    border: 2px solid ${({ theme }) => theme.color.silver};
    padding: 10px;
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    border: none;
    padding: 10px;
    transition: 0.5s;

    &:active {
        order: 1px solid ${({ theme }) => theme.color.black};
        transition: none;
    }

    &:hover {
        background-color: ${({ theme }) => theme.color.persianGreen};
        transform: scale(1.1);
    }
`;