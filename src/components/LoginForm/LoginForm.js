import React from "react";
import styled from 'styled-components';
import Ellipse2 from "../../components/LoginForm/img/Ellipse2.svg";
import logo from "../../components/LoginForm/img/salute.svg";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width:100%;
    margin-top: 101px;
 `;

const ImageEllipse2 = styled.img`
    width: 100%; 
    max-width: 216px;
    margin-top: 79px;
    height: auto;
`;

const Logo = styled.img`
    margin-top: 71px;
    width: 100%;
    max-width: 289px;
    height: auto;
`;

const Col2 = styled.div`
    display: flex;
    width: 22%;
    flex-direction: column;
    align-content: center;
    align-items: center;

`;

const ForgotPasswordLink = styled.a`
    margin-left:auto;
    margin-top: 24px;
    font-size: 20px;
    line-height: 24px;
    text-decoration: none;
    color: #525252;
    &:hover{
        text-decoration: underline;
    }
`;

const InputFieldLogin= styled.input`{
    font-family: inherit;
    height: 50px;
    border: none;
    border-bottom: 2px solid rgb(2, 2, 2);
    background: transparent;
    outline:0;
    font-size:30px;
    line-height: 37px;
    &::placeholder {
        color: #181818;
      }
    &:focus::placeholder {
        color: transparent;
    }

`;

const InputFieldPassword = styled(InputFieldLogin) `
    margin-top: 40px;
`;

const Button = styled.button`
    background: #E5E5E5;
    width: 175px;
    height: 58px;
    margin-left:auto;
    margin-top:54px;
    border: none;
    font-family: inherit;
    font-size: 30px;
    line-height: 37px;
    &:hover {background: rgba(144, 145, 142, 0.5);
    }
`;

function LoginForm() {
    return(
        <Col2>
        <ImageEllipse2 className="image" src={Ellipse2} alt="Ellipse2"/>
        <Logo className="logo" src={logo} alt="Logo"/>

        <Form method="post">
            <InputFieldLogin type="text" placeholder="login"/>   
            <InputFieldPassword type="password" placeholder="password"/>
            <ForgotPasswordLink href="#">forgot password?</ForgotPasswordLink>
        </Form>

        <Button type="submit">log in</Button>
        </Col2>
    )
}

export default LoginForm;