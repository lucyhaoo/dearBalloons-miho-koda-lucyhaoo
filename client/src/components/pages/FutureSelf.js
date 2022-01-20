import React, { useState, useEffect } from "react";
import { get, post } from "../../utilities";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const FutureSelf = (props) => {
    const [gmail, setGmail] = useState("");
    const getGmail = (val) => {
        setGmail(val.target.value);
        console.warn(val.target.value);
      }

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
      post("/api/sendEmail", body).then((ayo) =>{
        loadPage();
      });
    }
    const loadPage = () =>{
      document.location.href = "test.js";

     }



    return (
    <div>
      <h1>SEND TO FUTURE SELF</h1>

      <h1>YOUR TEXT: </h1>
      <div dangerouslySetInnerHTML={{__html: props.content}} />

      <h1>YOUR EMAIL: </h1>
      <input value = {gmail} type = "text" onChange = {getGmail}/>
      
      <h1>DATE: </h1>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

      <button
        type="submit"
        value="Submit"
        onClick={sendMessage}
      >
        Submit
      </button>
    </div>
  );
};

export default FutureSelf;

