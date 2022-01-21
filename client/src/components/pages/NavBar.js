import React, { useState, useEffect } from "react";

function NavBar(){
    return(
        <ul>
            <li><a href="/HomePage">HomePage</a></li>
            <li><a href="/TextEditor">TextEditor</a></li>
            <li><a href="/PickUp">PickUp</a></li>
        </ul>
    );
};

export default NavBar;