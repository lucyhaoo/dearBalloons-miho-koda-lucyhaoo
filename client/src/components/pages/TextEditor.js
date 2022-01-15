import React, { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import FutureSelf from "./FutureSelf.js";
import {Link} from "react-router-dom"; 



const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [linkPage, setLinkPage] = useState(null);
  
  const getValue = () => {
    return draftToHtml(convertToRaw(editorState.getCurrentContent()));
  }

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);  
  };

  useEffect(() => {
    console.log(getValue());
  }, [editorState]);
  
  <TextEditor content={editorState} />

  const button1 = () => {
    console.log("button1 is running")
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    setLinkPage("FutureSelf");
  };
  const button2 = () => {
    console.log("button2 is running")
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    setLinkPage("FutureSelf");
  };
  const button3 = () => {
    console.log("button3 is running")
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    setLinkPage("FutureSelf");
  };
  
  
  
  return (
    <div>
      <h1>THIS IS TEXT EDITOR</h1>
      {linkPage ? (linkPage == "FutureSelf" ? <FutureSelf content={getValue()}/> : null) : <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      />}
      
        <button onClick={button1}>Send to your future self</button>
        <button onClick={button2}>Send to your friend</button>
        <button onClick={button3}>Send to anyone</button>
     



    </div>
    
  );
}


export default TextEditor;