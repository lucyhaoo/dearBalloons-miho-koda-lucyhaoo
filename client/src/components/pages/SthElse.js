import React from "react";
import "./SthElse.css";
import { Button, ButtonGroup } from '@chakra-ui/react';


const SthElse = () => {
  return (
    <div>
        <p>You message is sent successfully! Send Something Else!</p>
        <Button size='xl' variant='orange'><a href="/">Go back to homepage!</a></Button>
     
    </div>
  );
};

export default SthElse;
