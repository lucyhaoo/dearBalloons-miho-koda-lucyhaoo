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
        <div dangerouslySetInnerHTML={{__html: props.content}} />
      </FormControl>
      
      <FormControl>
        <FormLabel htmlFor='email'>Your Email address</FormLabel>
        <Input id='email' value = {gmail} type = "text" onChange = {getGmail} />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor='email'>Your Friend's Email address</FormLabel>
        <Input id='email' value = {gmail} type = "text" onChange = {getRecmail} />
      </FormControl>

      <FormControl>
        <FormLabel>Date</FormLabel>
        <Input selected={startDate} onChange={(date) => setStartDate(date)}  type = "date" />
        <FormHelperText>Select a date in the future!</FormHelperText>
      </FormControl>
    
      <Button
        type="submit"
        value="Submit"
        size='md' 
        variant='beige'
        onClick={sendMessage}
      >
        Submit
      </Button>
      

    </div>
  );
};

export default Friend;
