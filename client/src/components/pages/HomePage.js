import React from "react";
import { Button, ButtonGroup } from '@chakra-ui/react';
import BeigeBalloon from '../UI/beige_balloon.png';
import DarkBalloon from '../UI/dark_balloon.png';
import LightBallon from '../UI/light_balloon.png';
import OrangeBallon from '../UI/orange_balloon.png';
import Welcome from '../UI/welcome.png';
import "./HomePage.css";



const HomePage = () => {
  return (
    <>
      <h1>
      <div className="welcome">
          <img src={Welcome} />
        </div>
      </h1>
      <ul>
        <h1>Click on a balloon to write to someone!</h1>
         
         <Button size='md' variant='dark_blue'>
            <a href="/PickUp">Pick Up a Message!</a>
          </Button>
          
      </ul>
  
      <div className="balloonsContainer">
        <div className="orangeBalloon">
          <a href="/TextEditor"><img src={OrangeBallon} /></a>
        </div>
        <div className="beigeBalloon">
          <a href="/TextEditor"><img src={BeigeBalloon} /></a>
        </div>
        <div className="lightBalloon">
          <a href="/TextEditor"><img src={LightBallon} /></a>
        </div>
        <div className="darkBalloon">
          <a href="/TextEditor"><img src={DarkBalloon} /></a>
        </div>
        
      </div>
      

      
    </>
    

  );
};

export default HomePage;

