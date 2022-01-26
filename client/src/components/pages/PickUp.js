import React from "react";
import { get, post } from "../../utilities";
import "./PickUp.css";
import { Button, Flex, Spacer } from '@chakra-ui/react';


const PickUp = () => {
  
  const getMessage = (value) => {
    get("/api/getmessage").then((newbody) => {
      console.log(newbody.sender_mail);
    });
  };


  return (
    <div className="pick">
      <h1>Pick up a message from anyone !</h1>
      <Button size='md' boxShadow='dark-lg' variant='beige' onClick={getMessage}>
        GO!
      </Button>
        <Spacer />

      <Button size='md' boxShadow='dark-lg' variant='dark_blue'><a href="/">Back</a></Button>

    </div>
  );
};

export default PickUp;
