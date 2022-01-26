import React, { useState } from 'react';
import { get, post } from "../../utilities";
import "./PickUp.css";
import { Button, Flex, Spacer } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

const PickUp = () => {
  const [message, setMessage] = useState('');
  const getMessage = async () => {
    try {
      const response = await get("/api/getmessage");
      setMessage(response);
    } catch (e) {
      setMessage({content: "No message is left here :((((((", sender_mail: ""});
    }ß
  };


  return (
    <div className="pick">
      <h1>Pick up a message from anyone !</h1>
      <Button size='md' boxShadow='dark-lg' variant='beige' onClick={getMessage}>
        GO!
      </Button>
        <Spacer />
      <Button size='md' boxShadow='dark-lg' variant='light_blue'><a href="/">Back</a></Button>

      <Box bg='dark_blue' w='50%' p={4}>
        {message.content + message.sender_mail}
      </Box>
ß
    </div>
  );
};

export default PickUp;
