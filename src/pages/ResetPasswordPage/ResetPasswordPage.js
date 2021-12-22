import ellipse1 from "./img/Ellipse4.svg";
import ellipse2 from "./img/Ellipse5.svg";
import styled from "styled-components";

const ResetPasswordPageContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0rem;
    font-family: "Montserrat Regular";
    
`
const LeftSide = styled.div`
    display: flex;
    width: 38%;
    flex-direction: column;
    align-content: center;
    align-items: center;
`

const Ellipse1 = styled.img`
    margin-left: auto;
    margin-bottom: auto;
    max-width: 390px;
    margin-top: 250px;
`
const Ellipse2 = styled.img`
    margin-right: auto;
    margin-top: auto;
    max-width: 590px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
 `;

 const InputFieldEmail= styled.input`{
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
const Button = styled.button`
    background: #E5E5E5;
    width: 283px;
    height: 58px;
    margin-left:auto;
    margin-top:81px;
    border: none;
    font-family: inherit;
    font-size: 30px;
    line-height: 37px;
    &:hover {background: rgba(144, 145, 142, 0.5);
    }
    font-weight: 300;
font-size: 30px;
line-height: 37px;

`;

function ResetPasswordPage() {
    return(
        <ResetPasswordPageContainer>
        <LeftSide> 
        <Ellipse2 src={ellipse2} alt="Logo"/>
        </LeftSide>
        <Form method="post">
            <InputFieldEmail type="text" placeholder="email"/>  
            <Button type="submit">reset password</Button> 
        </Form>
        <Ellipse1 src={ellipse1} alt="Logo"/>

        </ResetPasswordPageContainer>
    );
}

export default ResetPasswordPage;
