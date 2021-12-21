import React from "react";
import styled from 'styled-components';
import component from "./img/Group 5 (1).svg";


const Cont = styled.div`
    margin: 20px;
    margin-right: 300px;
    margin-left: 300px;
    margin-top: 100px;

`
const Form = styled.form`
    display: flex;
    width: auto;
    align-content: center;
    margin-top: 50px;
 `;


const InputFieldEmail= styled.input`{
    font-family: inherit;
    height: 30px;
    width: 350px;
    border: none;
    border-bottom: 1px solid rgb(2, 2, 2);
    background: transparent;
    outline:0;
    font-size:15px;
    line-height: 37px;
    &::placeholder {
        color: #181818;
      }
    &:focus::placeholder {
        color: transparent;
    }

`;

const Button = styled.button`
    background: #FFFFFF;
    width: 110px;
    height: 30px;
    margin-left: 30px;
    font-family: inherit;
    font-size: 15px;
    line-height: normal;
    border: 2px solid #CDFF64;
    &:hover {background: #CDFF64; color: white;
    }
`;

const Div = styled.div`
    font-family: inherit;
    font-size: 30px;

`

const H5 = styled.h5`
    font-family: inherit;
    font-size: 15px;

`
const Img = styled.img`
    width: 400px;
    margin-top: 80px;
    padding-left: 50px;
`

function InvitForm() {
    return(
        <Cont>
            <Div>
                invite your friends
                <H5>invitations available:   2</H5>   
            </Div>


            <Form method="post">
                <InputFieldEmail type="email" placeholder="their_email@smth.com"/>
                <Button type="submit">send invite</Button>   
            </Form>

            <Img src={component}></Img>

        </Cont>
    )
}

export default InvitForm;