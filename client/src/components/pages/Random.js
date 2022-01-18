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

    return (
    <div>
      <h1>Send to a Random Stranger</h1>
      <h1>YOUR TEXT: </h1>
      <div dangerouslySetInnerHTML={{__html: props.content}} />
      <h1>YOUR EMAIL: </h1>
      <input value = {data} type = "text" onChange = {getData}/>
    </div>
  );
};

export default Random;
