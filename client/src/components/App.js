import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
//import { Route, Link } from 'react-router-dom';
import NotFound from './pages/NotFound.js';
import Skeleton from './pages/Skeleton.js';
import HomePage from './pages/HomePage.js';
import TextEditor from './pages/TextEditor.js';
import Friend from './pages/Friend.js';
import Random from './pages/Random.js';
import FutureSelf from './pages/FutureSelf.js';
import PickUp from './pages/PickUp.js';
import '../utilities.css';
import { socket } from '../client-socket.js';
import NavBar from './pages/NavBar.js';
import { get, post } from '../utilities';

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
    <>
      <Router>
        <Skeleton path="/" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />
        <NotFound default />
      </Router>
      {/* <div className="main-page">
        {userId && (
          <NavBar />
        )}
        <Route exact path="/HomePage" component={HomePage} />
        <Route exact path="/TextEditor" component={TextEditor} />
        <Route exact path="/Friend" component={Friend} />
        <Route exact path="/FutureSelf" component={FutureSelf} />
        <Route exact path="/Random" component={Random} />
        <Route exact path="/PickUp" component={PickUp} /> 
        
      </div>  */}

    </>
  );
}


export default App;
