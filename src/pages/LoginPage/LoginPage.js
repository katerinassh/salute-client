import styled from "styled-components";
import LoginForm from "../../components/LoginForm/LoginForm";
import component from "./img/Component 1.svg";

const LoginPageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Montserrat Regular";
    transform: scale(75%);
`

const Col1 = styled.div`
    width: 0px;
`

const Col3 = styled.div`
    display: flex;
    width: 65%;
`

const Image = styled.img`
    margin-left: auto;
    justify-content: flex-end;
`

function LoginPage() {
    return(
        <LoginPageContainer>

        <Col1></Col1>
            <LoginForm/>
        <Col3>
            <Image src={component}/>
        </Col3>
        </LoginPageContainer>
    )
}

export default LoginPage;