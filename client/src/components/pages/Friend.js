import React, { useState, useEffect } from "react";

const Friend = (props) => {
    const [data, setData] = useState("");
    const getData = (val) => {
        setData(val.target.value);
        console.warn(val.target.value);
      }
      
      useEffect(() => {
        // console.log(props.content)
      })
  
    return (
    <div>
      <h1>Send to friend</h1>

      <h1>YOUR EMAIL: </h1>
      <input type="text" />
      <h1>THEIR EMAIL: </h1>
      <input type="text" />
      <h1>DATE: </h1>
      <input type="text" />
    </div>
  );
};

export default Friend;
