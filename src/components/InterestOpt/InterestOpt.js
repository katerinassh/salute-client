import React from "react";
import styled from 'styled-components';
const a = ["late night", "chill vibes", "bring a drink", "hiking", "meet people", "long walks"];
const b = ["television", "advice", "fun", "storytelling", "podcasts", "celebrities", "TV series", "cinema"];
const c = ["disabled", "gen Z", "millenial", "slovak", "black", "asian", "LGBTQ+"];
const d = ["smth new", "specialty coffee", "italian", "vegeterian", "vegan", "fastfood", "tea", "sweet tooth", "homemade"];


const Container = styled.div`
    display: flex;
    font-family: "Montserrat Regular";
    font-weight: 300;
    flex-direction: column;

`

const InterestStyled = styled.button`
    font-family: Montserrat;
    font-weight: 300;
    font-size: 15px;
    line-height: 20px;
    min-width: 120px;
    height: 30px;
    background: white;
    &:focus {background: #CDFF64;
        color: white;
    }
    text-align: center;
    border: 2px solid #CDFF64;
    margin-right: 10px;
    margin-bottom: 10px;
`

const IntThemes = styled.div`
    display: flex;
    flex-direction: column;
`

function InterestOpt() {
    return(
        <div>
            <Container>
                <IntThemes>
                    <h3>hanging out</h3>
                    <div>{a.map(item => <InterestStyled>{item}</InterestStyled>)}</div>
                </IntThemes>
                <IntThemes>
                    <h3>entertainment</h3>
                    <div>{b.map(item => <InterestStyled>{item}</InterestStyled >)}</div>
                </IntThemes>
                <IntThemes>
                    <h3>identity</h3>
                    <div>{c.map(item => <InterestStyled>{item}</InterestStyled >)}</div>
                </IntThemes>
                <IntThemes>
                    <h3>food preferences</h3>
                    <div>{d.map(item => <InterestStyled>{item}</InterestStyled >)}</div>
                </IntThemes>
           </Container>
        </div>
    )
}

export default InterestOpt;