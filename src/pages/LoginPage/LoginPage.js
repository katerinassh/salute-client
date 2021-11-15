import styled from "styled-components";
import LoginForm from "../../components/LoginForm/LoginForm";
import component from "./img/Component.svg";

const LoginPageContainer = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0rem;
    font-family: "Montserrat Regular";
`

const Col1 = styled.div`
    width: 13%;
`

const Col3 = styled.div`
    display: flex;
    width: 65%;
`

const Image = styled.img`
    margin-top: 302px;
    height: 477px;
    margin-left: auto;
    max-width:540px;
`

function LoginPage() {
    return(
        <LoginPageContainer>

        <Col1></Col1>
            <LoginForm />
        <Col3>
            <Image src={component}/>
        </Col3>
        </LoginPageContainer>
    )
}

export default LoginPage;