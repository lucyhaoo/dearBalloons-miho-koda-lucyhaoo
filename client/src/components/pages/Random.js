import React, { useState, useEffect } from "react";
import { get, post } from "../../utilities";
import { Button, ButtonGroup } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react';
import "../../utilities.css";
import { navigate } from "@reach/router";

const Random = (props) => {
  const [gmail, setGmail] = useState("");
  const getGmail = (val) => {
      setGmail(val.target.value);
      console.warn(val.target.value);
    }
  const isError = gmail === '';


    useEffect(() => {
      get("/api/whoami").then((user) => {
        if (user.email) {
          // they are registed in the database, and currently logged in.
          setData(user.email);
        }
      });
    }, []);

    /** 
     * Proptypes
     * @param {string} sender_mail 
     * @param {string} recipient_mail 
     * @param {string} content 
     * @param {string} date 
     */
      
      const addMessage = (value) => {
        console.log("work");
        const body = {
          sender_mail: gmail,
          recipient_mail: gmail,
          content: props.location.state.content,
          date: "2"
        };
        console.log(body);
        post("/api/postmessage", body);
        navigate(`/SthElse`)
      };

    return (
      <div className="formContainer">
        <h1>Send to a Random Stranger</h1>

        <FormControl>
          <FormLabel>Your Text</FormLabel>
          <div dangerouslySetInnerHTML={{__html: props.location.state.content}} />
        </FormControl>
    

        <FormControl isInvalid={isError}>
          <FormLabel htmlFor='email'>Your Email address</FormLabel>
          <Input
            id='email'
            type='email'
            value={gmail}
            onChange={getGmail}
          />
          {!isError ? (
            <FormHelperText>
              Enter the Gmail you'd like to receive the newsletter on.
            </FormHelperText>
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
        </FormControl>

        <Button  size='md' variant='light_blue' onClick={addMessage}>
          submit
        </Button>
      </div>
    );

}






export default Random;


