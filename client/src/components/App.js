import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
import NotFound from './pages/NotFound.js';
import Skeleton from './pages/Skeleton.js';
import HomePage from './pages/HomePage.js';
import TextEditor from './pages/TextEditor.js';
import Friend from './pages/Friend.js';
import Random from './pages/Random.js';
import FutureSelf from './pages/FutureSelf.js';
import PickUp from './pages/PickUp.js';
import SthElse from './pages/SthElse.js';
import '../utilities.css';
import { socket } from '../client-socket.js';
import { get, post } from '../utilities';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import theme from "./pages/theme.js";

/**
 * Define the "App" component
 */
function App() {
  const [userId, setUserId] = useState(undefined);

  useEffect(() => {
    get('/api/whoami').then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
      }
    });
  }, []);

  const handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post('/api/login', { token: userToken }).then((user) => {
      setUserId(user._id);
      post('/api/initsocket', { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post('/api/logout');
  };


  return (
    <ChakraProvider theme={theme}>      
      <> 
        <Router>
          <Skeleton path="/" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />
          <NotFound default />

          <HomePage exact path="/HomePage" />
          <TextEditor exact path="/TextEditor" />
          <Friend exact path="/Friend" />
          <FutureSelf exact path="/FutureSelf" />
          <Random exact path="/Random" />
          <PickUp exact path="/PickUp" />
          <SthElse excat path="/SthElse" /> 
          
        </Router>
        <div className="main-page">
          {userId && (
            <HomePage />
          )}
        </div>
      </>
    </ChakraProvider>
  );
}


export default App;
