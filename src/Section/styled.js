import styled from "styled-components";

export const Unit = styled.section`
    margin: 10px 0;
    background-color: white;
    box-shadow: 0px 0px 10px 0px #aaa;
`;

export const HeaderArea = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Header = styled.h2`
    font-size: 25px;
    margin: 0px;
    padding: 15px;

    @media (max-width: 767px)  {
        padding-bottom: 0px;
    }
`;

export const Field = styled.div`
    padding: 15px;
    border-top: 1px solid #ccc;
`;