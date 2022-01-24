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
          <a href="/TextEditor"><img src={ob} /></a>
        </div>
        <div className="bb">
          <a href="/TextEditor"><img src={bb} /></a>
        </div>
        <div className="lb">
          <a href="/TextEditor"><img src={lb} /></a>
        </div>
        <div className="db">
          <a href="/TextEditor"><img src={db} /></a>
        </div>
        
      </div>
      

      
    </>
    

  );
};

export default HomePage;

