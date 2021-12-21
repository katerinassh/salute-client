import React from "react";
import styled from "styled-components";
import InterestOpt from "../../components/InterestOpt/InterestOpt";
import logo from "./img/salute.svg";
import elipse1 from "./img/Group 5.svg";
import elipse2 from "./img/Ellipse 12.svg";



const InterPageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Montserrat Regular";
`
const Logo = styled.img`
    display: flex;
    margin-top: 30px;
    margin-bottom: 1200px;
    margin-left: 300px;
    width: 100px;
`

const Col1 = styled.div`
    width: 30%;
`
const Col2 = styled.div`
    width: 40%;
    margin-top: 100px;
`
const Heading = styled.div`
    font-size: 30px;
    text-align: center;
    margin-bottom: 30px;
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
    margin-right: 60px;
    border: none;
    font-family: inherit;
    font-size: 20px;
    line-height: 37px;
    &:hover {background: rgba(144, 145, 142, 0.5);
    }
`
const Elps1 = styled.img`
    height: 300px;
    display: flex;
    align-items: flex-end;
    margin-top: 50px;
`
const Elps2 = styled.img`
    height: 100px;
    margin-bottom: 800px;
    margin-left: 50px;
`


const Col3 = styled.div`
    width: 30%;
`

function InterestPage() {
    return(
        <InterPageContainer>
            <Col1>
                <Logo src={logo}/>
            </Col1>
            <Col2>
                <Heading>choose your interests</Heading>
                <InterestOpt/>
                <Button><Btn type="submit">sign up</Btn></Button>
                <Elps1 src={elipse1}/>
            </Col2>
            <Col3>
                <Elps2 src={elipse2}/>
            </Col3>
        </InterPageContainer>
    )
}


export default InterestPage;