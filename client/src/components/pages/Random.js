import React, { useState, useEffect } from "react";

const Random = () => {
    const [data, setData] = useState("");
    const getData = (val) => {
        setData(val.target.value);
        console.warn(val.target.value);
      }


    return (
    <div>
      <h1>Send to a Random Stranger</h1>

      <h1>YOUR EMAIL: </h1>
      <input type="text" />
    </div>
  );
};

export default Random;
