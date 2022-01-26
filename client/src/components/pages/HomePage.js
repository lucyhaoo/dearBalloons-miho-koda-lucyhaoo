import React from "react";
import { Button, ButtonGroup, Text } from '@chakra-ui/react';
import GoogleLogin, { GoogleLogout } from "react-google-login";
import BeigeBalloon from '../UI/beige_balloon.png';
import DarkBalloon from '../UI/dark_balloon.png';
import LightBallon from '../UI/light_balloon.png';
import OrangeBallon from '../UI/orange_balloon.png';
import Welcome from '../UI/welcome.png';
import "./HomePage.css";
import "../../utilities.css";
import { Link } from '@reach/router';


const GOOGLE_CLIENT_ID = "104820923294-urq2f2ldknf1fhfrp4537sratgfad5vn.apps.googleusercontent.com";

const HomePage = ({ userId, handleLogin, handleLogout }) => {

  const authButton = userId ? (
    <GoogleLogout
      clientId={GOOGLE_CLIENT_ID}
      buttonText="Logout"
      onLogoutSuccess={handleLogout}
      onFailure={(err) => console.log(err)}
    />
  ) : (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      buttonText="Login"
      onSuccess={handleLogin}
      onFailure={(err) => console.log(err)}
    />
  )

  return (
    <>
      {authButton}
      <div className="welcome">
          <img src={Welcome} />

        </div>
      <ul>

          
      </ul>
  
      <div className="balloonsContainer">
        <div className="orangeBalloon">
          <Link to="/TextEditor" state={{ color: "#f77c6c" }}><img src={OrangeBallon} /></Link>
        </div>
        <div className="beigeBalloon">
          <Link to="/TextEditor" state={{ color: '#f7cbb0'}}><img src={BeigeBalloon} /></Link>
        </div>
        <div className="lightBalloon">
          <Link to="/TextEditor" state={{ color: '#afcfcc'}}><img src={LightBallon} /></Link>
        </div>
        <div className="darkBalloon">
          <Link to="/TextEditor" state={{ color: '#066f84'}}><img src={DarkBalloon} /></Link>
        </div>
        
      </div>

         <Button size='md' variant='dark_blue'>
            <a href="/PickUp">Pick Up a Message!</a>
          </Button>
      

      
    </>
    

  );
};

export default HomePage;

