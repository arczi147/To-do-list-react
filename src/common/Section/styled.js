import styled from "styled-components";

export const StyledSection = styled.section`
    margin: 10px 0;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.color.silverChalice};
`;

export const Header = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    font-size: 25px;
    margin: 0px;
    padding: 15px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px)  {
        padding-bottom: 0px;
    }
`;

export const Field = styled.div`
    padding: 15px;
    border-top: 1px solid ${({ theme }) => theme.color.silver};
`;