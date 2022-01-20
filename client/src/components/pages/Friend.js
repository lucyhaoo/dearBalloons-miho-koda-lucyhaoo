import React, { useState, useEffect } from "react";
import { get, post } from "../../utilities";

const Friend = (props) => {
    const [gmail, setGmail] = useState("");
    const getGmail = (val) => {
        setGmail(val.target.value);
        console.warn(val.target.value);
      }

    const [date, setDate] = useState("");
    const getDate = (val) => {
      setDate(val.target.value);
      console.warn(val.target.value);
    }

    const [recmail, setRecmail] = useState("");
    const getRecmail = (val) => {
      setRecmail(val.target.value);
      console.warn(val.target.value);
    }


      useEffect(() => {
        // console.log(props.content)
      })
  
    useEffect(() => {
      get("/api/whoami").then((user) => {
        if (user.email) {
          // they are registed in the database, and currently logged in.
          setData(user.email);
        }
      });
    }, []);

    const sendMessage = (value) => {
      const body = { sender_mail: gmail, recipient_mail: gmail, content: props.content, date: "2"};
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
      <input value = {date} type="text" onChange={getDate} />

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

export default Friend;
