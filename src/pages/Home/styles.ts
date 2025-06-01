import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 0 10%;
`

export const Header = styled.header`
    width: 100%;
    height: 6.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Logo = styled.img`
    height: 2.5rem;
`

export const NavBar = styled.nav`
    width: auto;
    height: 2.5rem;
    display: flex;
    align-items: center;
    gap: 12px;
`

export const Location = styled.div`
    flex: 1;
    background: ${props => props.theme["purple-light"]};
    border-radius: 6px;
    display: flex;
    align-items: center;
    padding: 8px;
    gap: 4px;

    span {
        font-family: "Roboto";
        font-size: 14px;
        color: ${props => props.theme["purple-dark"]};
    }

    svg {
        color: ${props => props.theme["purple"]};
    }
`

export const Cart = styled.div`
    width: 2.5rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme["yellow-light"]};
    border-radius: 6px;

    svg {
        color: ${props => props.theme["yellow-dark"]};
    }
`