import React, { useState, useEffect } from "react";
import { get, post } from "../../utilities";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, ButtonGroup } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react';
import "../../utilities.css";


const FutureSelf = (props) => {
    console.log(props.location);
    const [gmail, setGmail] = useState("");
    const getGmail = (val) => {
        setGmail(val.target.value);
        console.warn(val.target.value);
      }
    const isError = gmail === '';

    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {
      get("/api/whoami").then((user) => {
        if (user.email) {
          // they are registed in the database, and currently logged in.
          setGmail(user.email);
        }
      });
    }, []);

    const sendMessage = (value) => {
      const body = { 
        sender_mail: gmail, 
        recipient_mail: gmail, 
        content: props.content, 
        date: startDate
      };
      post("/api/sendEmail", body)
    }
  


    return (
    <div className="formContainer">
      <h1> Send a letter to your future self</h1>
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
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={isError}>
        <FormLabel>Date</FormLabel>
        <Input selected={startDate} onChange={(date) => setStartDate(date)}  type = "date" />

        {!isError ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Date is required.</FormErrorMessage>
        )}
      </FormControl>
  

      <Button
        type="submit"
        value="Submit"
        onClick={sendMessage}
        size='md' 
        variant='orange'
      >
        <a href="/SthElse">
        Submit
        </a>
      </Button>





      
    </div>



  );
};
export default FutureSelf;

