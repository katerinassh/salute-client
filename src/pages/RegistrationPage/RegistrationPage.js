import styled from "styled-components";
import RegistarationForm from "../../components/RegistrationForm/RegistrationForm";
// import logo from "./img/salute.svg";
import elipse1 from "./img/Group 4.svg";
import elipse2 from "./img/Group 3.svg";


const RegPageContainer = styled.div`
    display: flex;
    font-family: "Montserrat Regular";
`
const Elps1 = styled.img`
    margin-left: auto;
    height: 400px;
    display: flex;
    align-items: flex-start;
`

const Col1 = styled.div`
    display: flex;
    width: 30%;
`

const Col2 = styled.div`
    display: flex;
    justify-content: center;
    width: 40%;
`

const Elps2 = styled.img`
    margin-left: auto;

`

const Col3 = styled.div`
    display: flex;
    justify-content: right;
    width: 30%;
`


function RegistrationPage() {
    return(
        <RegPageContainer>

            <Col1>
                <Elps1 src={elipse1}/>
            </Col1>

            <Col2>
                <RegistarationForm/>
            </Col2>

            <Col3>
                <Elps2 src={elipse2}/>
            </Col3>

        </RegPageContainer>
    )
}

export default RegistrationPage;