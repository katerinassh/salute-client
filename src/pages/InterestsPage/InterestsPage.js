import React from "react";
import styled from "styled-components";
import InterestOpt from "../../components/InterestOpt/InterestOpt";
import logo from "./img/salute.svg";
import DropDown from "../../components/DropDown/DropDown";



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
    height: 900px;

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
    list-style: none;
`

const Elem1 = styled.li`
    font-size: 25px;
    margin-bottom: 40px;
    &::before {
        content: "•";
        color: #FF295D;
        display: inline-block;
        width: 1em;
        margin-left: -1em
    }
`

const Elem2 = styled.li`
    font-size: 25px;
    margin-bottom: 40px;
    &::before {
        content: "•";
        color: #CDFF64;
        display: inline-block;
        width: 1em;
        margin-left: -1em
    }
`

const Elem3 = styled.li`
    font-size: 25px;
    margin-bottom: 40px;
    &::before {
        content: "•";
        color: #FF8A00;
        display: inline-block;
        width: 1em;
        margin-left: -1em
    }
`

const Content = styled.div`
    width: 45%;
    margin-left: 200px;
    margin-bottom: 100px;
`
const Heading = styled.div`
    font-size: 30px;
    text-align: center;
    margin-bottom: 30px;
    margin-top: 75px;
`
const Button = styled.div`
    display: flex;
    justify-content: right;
`

const Btn = styled.button`
    background: #E5E5E5;
    width: 150px;
    height: 40px;
    margin-top:54px;
    margin-right: 30px;
    border: none;
    font-family: inherit;
    font-size: 20px;
    line-height: 37px;
    &:hover {background: rgba(144, 145, 142, 0.5);
    }
`

function InvitationsPage() {
    return(
        <MainPageContainer>
            <Header>
                <Logo src={logo}/>
                <DropDown/>
            </Header>

            <Div>
                <Menu>
                    <Ul>
                        <Elem1><As href="/people">people</As></Elem1>
                        <Elem2><As href="/chats">chats</As></Elem2>
                        <Elem3><As href="/interests">interests</As></Elem3>
                    </Ul>
                    {/* <InvitForm></InvitForm> */}
                </Menu>

                <Content>
                    <Heading>choose your interests</Heading>
                    <InterestOpt></InterestOpt>
                    <Button><Btn type="save">sign up</Btn></Button>
                </Content>
            </Div>

         </MainPageContainer>

    )
}


export default InvitationsPage;