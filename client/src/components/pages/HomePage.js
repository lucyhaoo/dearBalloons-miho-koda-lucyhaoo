import React, { useState, useEffect } from "react";
import TextEditor from "./TextEditor.js";
import {Route, Link} from "react-router-dom";


const HomePage = () => {
    return (
        <div>
            <h1>this is HomePage</h1> 
            
            <TextEditor />
        </div>

    );
  };
  
  export default HomePage;
  