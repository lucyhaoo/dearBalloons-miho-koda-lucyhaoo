import React from "react";
import { get, post } from "../../utilities";


const PickUp = () => {

  const getMessage = (value) => {
    get("/api/getmessage").then((newbody) => {
      document.getElementById("like").innerHTML = newbody.content;
    });
  };



  return (
    <div id = "like">
      <button onClick={getMessage}>Click Here to Pick Up a Message from a Stranger</button>
    </div>
  );
};

export default PickUp;
