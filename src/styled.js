import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
    padding: 30px;

    &.active {
    font-weight: bold;
    }
`;

export const Navigation = styled.ul`
    background-color: ${({ theme }) => theme.color.teal};
    text-align: center;
    margin: 0 auto;
    padding: 15px;
`;

export const NavigationList = styled.li`
    list-style-type: none;
    display: inline-block;;
`;