import React, { useState, useEffect } from "react";
import { get, post } from "../../utilities";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, ButtonGroup } from '@chakra-ui/react';


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
    <div>
      <h1>Send to friend</h1>

      <h1>YOUR TEXT: </h1>
      <div dangerouslySetInnerHTML={{__html: props.content}} />

      <h1>YOUR EMAIL: </h1>
      <input value = {gmail} type = "text" onChange = {getGmail}/>

      <h1>THEIR EMAIL: </h1>
      <input value = {recmail} type="text" onChange = {getRecmail}/>
      
      <h1>DATE: </h1>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

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
