import { Cart, Container, Header, Location, Logo, NavBar } from "./styles";
import logo from "../../assets/Logo.jpg"
import { MapPinIcon, ShoppingCartSimpleIcon } from "@phosphor-icons/react";

export function Home(){
    return(
        <Container>
            <Header>
                <Logo src={logo}/>

                <NavBar>
                    <Location>
                        <MapPinIcon size={22} weight="fill" />
                        <span>São Paulo, SP</span>
                    </Location>

                    <Cart>
                        <ShoppingCartSimpleIcon size={22} weight="fill" />
                    </Cart>
                </NavBar>
            </Header>
        </Container>
    )
}