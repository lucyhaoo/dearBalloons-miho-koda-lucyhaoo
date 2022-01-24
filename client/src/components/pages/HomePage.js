import React from "react";
import { Button, ButtonGroup } from '@chakra-ui/react';
import bb from '../UI/beige_balloon.png';
import db from '../UI/dark_balloon.png';
import lb from '../UI/light_balloon.png';
import ob from '../UI/orange_balloon.png';
import welcome from '../UI/welcome.png';
import "./HomePage.css";



const HomePage = () => {
  return (
    <>
      <h1>
      <div className="welc">
          <img src={welcome} />
        </div>
      </h1>
      <ul>
        <Button size='md' variant='light_blue'>
        <a href="/TextEditor">Write to Someone!</a>
          </Button>
         
         <Button size='md' variant='dark_blue'>
            <a href="/PickUp">Pick Up a Message!</a>
          </Button>
          
      </ul>
  
      <div className="container">
        <div className="ob">
          <img src={ob} />
        </div>
        <div className="bb">
          <img src={bb} />
        </div>
        <div className="lb">
          <img src={lb} />
        </div>
        <div className="db">
          <img src={db} />
        </div>
        
      </div>
      

      
    </>
    

  );
};

export default HomePage;

