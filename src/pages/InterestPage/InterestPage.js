import React from "react";
import styled from 'styled-components';
const a = ["late night", "chill vibes", "bring a drink", "hiking", "meet people", "try now"];

const Container = styled.div`
    display: flex;
    font-family: "Montserrat Regular";
    
`
const InterestStyled = styled.h1`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    line-height: 37px;
    width: 189px;
    height: 41px;
    &:hover {background: #CDFF64;
        color: white;
    }
    text-align:center;
    border: 2px solid #CDFF64;
    margin-right: 10px;

`

function InterstPage() {
    return(
        <div>
            <Container>
           {a.map(item => <InterestStyled >{item}</InterestStyled >)}
           </Container>
        </div>
    )
}

export default InterstPage;