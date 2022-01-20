import React, { useState, useEffect } from "react";
import { get, post } from "../../utilities";

const Random = (props) => {
    const [data, setData] = useState("");
    const getData = (val) => {
        setData(val.target.value);
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

    /** 
     * Proptypes
     * @param {string} sender_mail 
     * @param {string} recipient_mail 
     * @param {string} content 
     * @param {string} date 
     */
      
    const addMessage = (value) => {
      console.log("work");
      const body = { sender_mail: gmail, recipient_mail: gmail, content: props.content, date: "2"};
      post("/api/postmessage", body);
      
    };

    


    return (
      <div>
        <h1>Send to a Random Stranger</h1>
        <h1>YOUR TEXT: </h1>
        <div dangerouslySetInnerHTML={{__html: props.content}} />
        <h1>YOUR EMAIL: </h1>
        <input value = {gmail} type = "text" onChange = {getGmail}/>
      

      <button onClick={addMessage}>
        submit
      </button>

      </div>
      

      
    );

}






export default Random;


