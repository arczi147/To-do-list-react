import styled from "styled-components";

export const StyledButtons = styled.div`
    align-items: center;
    padding: 10px;
    text-align: right;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: grid;
        grid-template-rows: 1fr;
    }
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.teal};
    border: none;
    padding: 10px;
    transition: 0.5s;

    &:hover {
        color: ${({ theme }) => theme.color.brighterPersianGreen};
    }

    &:disabled {
        color: ${({ theme }) => theme.color.silver};
        transition: none;
    }
`;