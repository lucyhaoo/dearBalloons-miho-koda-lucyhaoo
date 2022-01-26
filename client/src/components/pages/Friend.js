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


const Friend = (props) => {
    const [gmail, setGmail] = useState("");
    const getGmail = (val) => {
        setGmail(val.target.value);
        console.warn(val.target.value);
      }
    const isError = gmail === '';

    const [startDate, setStartDate] = useState(new Date());

    const [recmail, setRecmail] = useState("");
    const getRecmail = (val) => {
      setRecmail(val.target.value);
      console.warn(val.target.value);
    }
  
    useEffect(() => {
      get("/api/whoami").then((user) => {
        if (user.email) {
          // they are registed in the database, and currently logged in.
          setData(user.email);
        }
      });
    }, []);

    const sendMessage = (value) => {
      const body = {
        sender_mail: gmail, 
        recipient_mail: gmail, 
        content: props.content, 
        date: startDate};
      post("/api/sendEmail", body)
    }


    return (
    <div className="formContainer">
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
            Enter the Gmail you'd like to send the letter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={isError}>
        <FormLabel htmlFor='email'>Their Email address</FormLabel>
        <Input
          id='email'
          type='email'
          value={recmail}
          onChange={setRecmail}
        />
        {!isError ? (
          <FormHelperText>
            Enter the Gmail you'd like to receive the letter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>


      <FormControl isInvalid={isError}>
        <FormLabel>Date</FormLabel>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

        {!isError ? (
          <FormHelperText>
             Select a date in the future! 
          </FormHelperText>
        ) : (
          <FormErrorMessage>Date is required.</FormErrorMessage>
        )}
      </FormControl>
    
      <Button
        type="submit"
        value="Submit"
        size='md' 
        variant='beige'
        onClick={sendMessage}
      >
        <a href="/SthElse">
        submit
        </a>
      </Button>
      

    </div>
  );
};

export default Friend;
