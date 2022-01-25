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
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser !== null && typeof loggedInUser !== 'undefined' && loggedInUser !== 'undefined') {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
    const loggedInUserId = localStorage.getItem("userId");
    if (loggedInUserId !== null && typeof loggedInUserId !== 'undefined' && loggedInUserId !== 'undefined') {
      const foundUserId = JSON.parse(loggedInUserId);
      setUserId(foundUserId);
    }
  }, []);

  const useStickyState = (defaultValue, key) => {
    const [value, setValue] = React.useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      console.log(stickyValue);
      return (stickyValue !== null && typeof stickyValue !== 'undefined' && stickyValue !== 'undefined')
        ? JSON.parse(stickyValue)
        : defaultValue;
    });

    React.useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }

  const [userId, setUserId] = useStickyState('', 'userId');
  const [user, setUser] = useStickyState({}, 'user');

  const handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post('/api/login', { token: userToken }).then((user) => {
      setUserId(user._id);
      setUser(user);
      post('/api/initsocket', { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    console.log(user);
    setUserId(undefined);
    window.localStorage.removeItem('userId');
    window.localStorage.clear();
    console.log('cleared');
    post('/api/logout');
  };


  return (
    <ChakraProvider theme={theme}>      
      <> 
        <Router>
          {/* <Skeleton path="/" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} /> */}
          <NotFound default />

          <HomePage exact path="/" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId}/>
          <TextEditor exact path="/TextEditor" />
          <Friend exact path="/Friend" />
          <FutureSelf exact path="/FutureSelf" />
          <Random exact path="/Random" />
          <PickUp exact path="/PickUp" />
          <SthElse excat path="/SthElse" /> 
          
        </Router>
        {/* <div className="main-page">
          {userId && (
            <HomePage />
          )}
        </div> */}
      </>
    </ChakraProvider>
  );
}


export default App;
