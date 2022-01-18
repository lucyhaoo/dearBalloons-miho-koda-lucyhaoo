import React, { useState, useEffect } from 'react';
import { get, post } from '../../utilities';

function FutureSelf(props) {
  const [gmail, setGmail] = useState('');
  const getGmail = (val) => {
    setGmail(val.target.value);
    console.warn(val.target.value);
  };

  const [date, setDate] = useState('');
  const getDate = (val) => {
    setDate(val.target.value);
    console.warn(val.target.value);
  };

  useEffect(() => {
    get('/api/whoami').then((user) => {
      if (user.email) {
        // they are registed in the database, and currently logged in.
        setGmail(user.email);
      }
    });
  }, []);

  const [value, setValue] = useState('');
  // called when the user hits "Submit" for a new post
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit && props.onSubmit(value);
    setValue('');
  };

  return (
    <div>
      <h1>SEND TO FUTURE SELF</h1>
      <h1>YOUR TEXT: </h1>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />

      <h1>YOUR EMAIL: </h1>
      <input value={gmail} type="text" onChange={getGmail} />
      <h1>DATE: </h1>
      <input value={date} type="text" onChange={getDate} />

      <button
        type="submit"
        value="Submit"
        onClick={handleSubmit}
      >
        Submit
      </button>

    </div>
  );
}

/**
 * Proptypes
 * @param {string} sender_gamil
 * @param {string} content
 * @param {string} recipient_email
 */
function NewMessage(props) {
  const addMessage = (value) => {
    const body = {
      sender_mail: gmail, reciepient_mail: gmail, content: props.content, date,
    };
    post('/api/message', body).then((message) => {
      // display this comment on the screen
      props.addNewMessage(message);
    });
  };

  return <NewPostInput defaultText="New Message" onSubmit={addMessage} />;
}

export default FutureSelf;
