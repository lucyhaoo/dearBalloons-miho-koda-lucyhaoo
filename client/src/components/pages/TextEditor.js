import React, { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import { Link } from '@reach/router';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import FutureSelf from "./FutureSelf.js";
import Friend from "./Friend.js";
import Random from "./Random.js";
import HomePage from "./HomePage.js"
import "./TextEditor.css";


import { Button, ButtonGroup } from '@chakra-ui/react';


const TextEditor = (props) => {

  console.log(props.location.state.color);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [linkPage, setLinkPage] = useState(null);
  
  const getValue = () => {
    return draftToHtml(convertToRaw(editorState.getCurrentContent()));
  }

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);  
  };

  useEffect(() => {
    //console.log(getValue());
  }, [editorState]);
  
  <TextEditor content={editorState} />

  const button1 = () => {
    //console.log("button1 is running")
    //console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    setLinkPage("FutureSelf");
  };
  const button2 = () => {
    //console.log("button2 is running")
    //console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    setLinkPage("Friend");
  };
  const button3 = () => {
    //console.log("button3 is running")
    //console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    setLinkPage("Random");
  };
  
  
  
  return (
    <div style={{backgroundColor: props.location.state.color}}>
      <div className = "editor" >
        <h1>THIS IS TEXT EDITOR</h1>
        {linkPage ? (linkPage == "FutureSelf" ? <FutureSelf content={getValue()}/> : null) : <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
        />}
        {linkPage ? (linkPage == "Friend" ? <Friend content={getValue()}/> : null) : console.log("Second is running")}
        {linkPage ? (linkPage == "Random" ? <Random content={getValue()}/> : null) : console.log("third is running ")}
      </div>
      

        <Button size='md' variant='orange' onClick={button1}><a href="/FutureSelf">Send to your future self</a></Button>
        <Button size='md' variant='beige' onClick={button2}><a href="/Friend">Send to your friend</a></Button>
        <Button size='md' variant='light_blue'onClick={button3}><a href="/Random">Send to anyone</a></Button>
        <Button size='md' variant='dark_blue'><a href="/HomePage">Back</a></Button>
 
     
  </div>
  
    
  );
}


export default TextEditor;