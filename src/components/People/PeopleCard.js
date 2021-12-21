import React from "react";
import styled from "styled-components";
import User1 from "./img/User1.jpg" 


const Users = [{
    "name": "Jhon", 
    "location" : "9 km away",
    "interests": ["engineering", "coffee", "vegan", "swimming","art"], 
    "photo": User1
}, {"name": "Zendaya", 
    "location" : "1 km away",
    "interests": ["engineering", "coffee", "vegan", "swimming","art"], 
    "photo": User1}]


const Photo = styled.img`
    width: 50px;
    height: 50px;
     border-radius: 50%;

`
const User = ({ name, location, interests, photo }) => (
    <div>
      <Photo src={photo}/>
      <div>
        <p>{name}</p>
        <p>{location}</p>
        <div>{interests.map(item =><h3>{item}</h3>)}</div>
      </div>
    </div>
  );
//<div>{d.map(item => <InterestStyled>{item}</InterestStyled >)}</div>


function PeopleCard() {
 
    return(
        <div>
            {
                Users.map(user=> <User name={user.name}
                                        photo={user.photo}
                                        location={user.location}
                                        interests={user.interests}

                    />)
            }
        </div>
    )
}

export default PeopleCard;