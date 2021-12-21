import { slotShouldForwardProp } from "@mui/material/styles/styled";
import React from "react";
import styled from "styled-components";
import User1 from "./img/User1.jpg"
import User2 from "./img/User2.jpg"
import User3 from "./img/User3.jpg" 
import User4 from "./img/User4.jpg" 
import User5 from "./img/User5.jpg" 
import User6 from "./img/User6.jpg" 
import send from "./img/send 1.svg" 



const Users = [{
    "name": "Sasha", 
    "location" : "1 km away",
    "interests": ["engineering", "coffee", "vegan", "swimming","art"], 
    "photo": User2
}, {"name": "Vika", 
    "location" : "1 km away",
    "interests": ["coffee", "podcasts", "chill vibes", "sweet tooth"], 
    "photo": User1}, {"name": "Misha", 
    "location" : "3 km away",
    "interests": ["gen Z", "TV series", "coffee", "long walks", "late night"], 
    "photo": User3},  {"name": "Valya", 
    "location" : "5 km away",
    "interests": ["TV series", "coffee", "long walks", "late night"], 
    "photo": User4},  {"name": "Olia", 
    "location" : "6 km away",
    "interests": ["sweet tooth", "podcasts", "art", "coffee"], 
    "photo": User5}, {"name": "Vsevolod", 
    "location" : "6 km away",
    "interests": ["engineering", "vegan", "coffee", "long walks", "chill vibes"], 
    "photo": User6}]


const Photo = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 30px;
`

const Frame = styled.div`
    font-family: "Montserrat Regular";
    border: 4px solid rgb(255, 41, 93, 0.5);
    padding: 20px;
    margin: 20px;
    width: 380px;
    height: 200px;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
`
const Bottom = styled.div`
    display: flex;
    align-items: center;
    width: 380px;


`
const Item = styled.div`
    display: flex;
    font-size: 15px;
    justify-content: center;
    border: 1px solid rgba(144, 145, 142, 0.5);
    margin: 10px;
    padding: 10px;

`
const DivB = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Div = styled.div`
    width: 1000px;
    display: flex;
    flex-wrap: wrap;

`
const Send = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 30px;
    margin-left: 140px;

`

const User = ({ name, location, interests, photo }) => (
    <Frame>
        <Top>
            <Photo src={photo}/>
            <div>
                <p>{name}</p>
                <p>{location}</p>
            </div>
            <Send src={send}/>
        </Top>


      <Bottom>
        <DivB>{interests.map(item =><Item>{item}</Item>)}</DivB>
      </Bottom>
    </Frame>
  );

const Us = styled.div`
    display: flex;
`

function PeopleCard() {
 
    return(
        <Div>
            {
                Users.map(user=> <Us><User name={user.name}
                                        photo={user.photo}
                                        location={user.location}
                                        interests={user.interests}

                    /></Us>)
            }
        </Div>
    )
}

export default PeopleCard;