import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"; 

function NavBar(){
    return(
        <ul>
            <li><Link to="/HomePage">HomePage</Link></li>
            <li><Link to="/TextEditor">TextEditor</Link></li>
            <li><Link to="/PickUp">PickUp</Link></li>
        </ul>
    );
};

export default NavBar;