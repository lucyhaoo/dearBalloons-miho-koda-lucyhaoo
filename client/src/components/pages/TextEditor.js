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
import { Box } from '@chakra-ui/react'

import { Button, ButtonGroup } from '@chakra-ui/react';
import { Stack, HStack, VStack } from '@chakra-ui/react'


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
  
  // <TextEditor content={editorState} />

  
  
  return (
    <div className = "body" style={{backgroundColor: props.location.state.color}}>
      <h1>Write a Letter!</h1>
      <div className = "editor" >

        <Box bg='white' w='100%' p={2} border='2px' mt='100px' boxShadow='dark-lg'>
          <img src="../UI/text_editor.png" />
        </Box>
        
        <Box bg='white' w='100%' p={4} border='2px' boxShadow='dark-lg' >
          {linkPage ? (linkPage == "FutureSelf" ? <FutureSelf content={getValue()}/> : null) : <Editor
              editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={onEditorStateChange}
            />}
          {linkPage ? (linkPage == "Friend" ? <Friend content={getValue()}/> : null) : console.log("Second is running")}
          {linkPage ? (linkPage == "Random" ? <Random content={getValue()}/> : null) : console.log("third is running ")}        
        </Box>

        
      </div>
      
      
      <div className = "buttons" >
        <HStack spacing='24px'>
          {/* <Button size='md' boxShadow='dark-lg' variant='orange' onClick={button1}><a href="/FutureSelf">Send to your future self</a></Button> */}
          <Button size='md' boxShadow='dark-lg' variant='orange'>
            <Link to="/FutureSelf" state={{content: getValue()}}>Send to your future self</Link>
          </Button>
          <Button size='md' boxShadow='dark-lg' variant='beige' >
            <Link to="/Friend" state={{content: getValue()}}>Send to your friend</Link>
          </Button>
          <Button size='md' boxShadow='dark-lg' variant='light_blue'>
            <Link to="/Random" state={{content: getValue()}}>Send to anyone</Link>
          </Button>
          <Button size='md' boxShadow='dark-lg' variant='dark_blue'><a href="/">Back</a></Button>
        </HStack>
      </div>
     
  </div>
  
    
  );
}


export default TextEditor;