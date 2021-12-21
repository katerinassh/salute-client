import React from "react";
import styled from "styled-components";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import logo from "./img/salute.svg";
import DropDown from "../../components/DropDown/DropDown";
import group from "./img/Group 7.svg"




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
    height: 1000px;

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
    width: 20%;
    margin-left: 100px;
    // margin-bottom: 100px;
`

const Group = styled.img`
    width: 500px;
    margin-left: 300px;
`

function ProfilePage() {
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
                </Menu>

                <Content>
                    <ProfileForm></ProfileForm>
                </Content>

                <Group src={group}/>
            </Div>

         </MainPageContainer>

    )
}


export default ProfilePage;