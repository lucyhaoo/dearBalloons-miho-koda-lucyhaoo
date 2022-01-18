import React, { useState, useEffect } from "react";
import { get, post } from "../../utilities";

const Friend = (props) => {
    const [data, setData] = useState("");
    const getData = (val) => {
        setData(val.target.value);
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

    return (
    <div>
      <h1>Send to friend</h1>
      <h1>YOUR TEXT: </h1>
      <div dangerouslySetInnerHTML={{__html: props.content}} />
      <h1>YOUR EMAIL: </h1>
      <input value = {data} type = "text" onChange = {getData}/>
      <h1>THEIR EMAIL: </h1>
      <input type="text" />
      <h1>DATE: </h1>
      <input type="text" />
    </div>
  );
};

export default Friend;
