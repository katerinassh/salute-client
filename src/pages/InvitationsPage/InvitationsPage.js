import React from "react";
import styled from "styled-components";
import InvitForm from "../../components/InvitForm/InvitForm";
import logo from "./img/salute.svg";
import icon from "./img/Group 4.svg";



const MainPageContainer = styled.div`
    display: flex;
    font-family: "Montserrat Regular";
    flex-direction: column;
`


const Header = styled.div`
    min-hight: 500px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid black;
`
const Logo = styled.img`
    display: flex;
    margin-top: 20px;
    margin-left: 140px;
    width: 100px;
`
const Icon = styled.img`
    display: flex;
    margin-top: 20px;
    margin-right: 50px;
    width: 50px;
`
const Div = styled.div`
    display: flex;
    justify-content: stetch;

`

const Menu = styled.div`
    height: 800px;

    width: 25%;
    border-right: 1px solid black;
    margin-right: 0px;
    display: flex;
    justify-content: center;
`
const As = styled.a`
  text-decoration: none;
  color: inherit;
`
const Ul = styled.ul`
    margin-top: 70px;       
`

const Elem = styled.li`
    font-size: 25px;
    margin-bottom: 40px;
`

function InvitationsPage() {
    return(
        <MainPageContainer>
            <Header>
                <Logo src={logo}/>
                <Icon src={icon}/>
            </Header>

            <Div>
                <Menu>
                    <Ul>
                        <Elem><As href="/people">people</As></Elem>
                        <Elem><As href="/chats">chats</As></Elem>
                        <Elem><As href="/interests">interests</As></Elem>
                    </Ul>
                    {/* <InvitForm></InvitForm> */}
                </Menu>

                <InvitForm></InvitForm>
            </Div>

         </MainPageContainer>

    )
}


export default InvitationsPage;