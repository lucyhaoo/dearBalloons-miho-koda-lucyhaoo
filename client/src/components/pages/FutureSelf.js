import React, { useState, useEffect } from "react";

const FutureSelf = () => {
    const [data, setData] = useState("");
    const getData = (val) => {
        setData(val.target.value);
        console.warn(val.target.value);
      }
  
    return (
    <div>
      <h1>SEND TO FUTURE SELF</h1>

      <h1>YOUR EMAIL: </h1>
      <input type="text" onChange={getData}/>
      <h1>DATE: </h1>
      <input type="text" />


    </div>
  );
};

export default FutureSelf;
