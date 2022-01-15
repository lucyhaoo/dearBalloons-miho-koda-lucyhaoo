import React, { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

import {Link} from "react-router-dom"; 



const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  
  const getValue = () => {
    return draftToHtml(convertToRaw(editorState.getCurrentContent()));
  }

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);  
  };

  useEffect(() => {
    console.log(getValue());
  }, [editorState]);

  
  return (
    <div>
      <h1>THIS IS TEXT EDITOR</h1>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      />

      <Link to="/FutureSelf">      
        <button>Send to your future self</button>
      </Link>
      <Link to="/Friend">
        <button>Send to your friend</button>
      </Link>
      <Link to="/Random">
        <button>Send to anyone</button>
      </Link>
     

    </div>
    
  );
}


export default TextEditor;