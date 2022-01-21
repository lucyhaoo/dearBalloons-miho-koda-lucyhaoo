import React from "react";
import { get, post } from "../../utilities";


const PickUp = () => {

  const getMessage = (value) => {
    get("/api/getmessage").then((newbody) => {
      console.log(newbody.sender_mail);
    });
  };


  return (
    <div>
      <h1>Pick up a message from anyone</h1>
      <button onClick={getMessage}>test</button>
      <button><a href="/HomePage">Back</a></button>
    </div>
  );
};

export default PickUp;
