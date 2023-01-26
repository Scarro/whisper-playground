import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const SaySomething = (props) => {
  const [backendMessage, setBackendMessage] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    // axios.get('http://flask-server:8000/api')
    axios.get('/api')
      .then(response => {
        setBackendMessage(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }

  return (
    <div className={props.clase.buttonsSection}>
      <Button onClick={handleClick}>Greetings</Button>
      {isLoading && <p>Loading...</p>}
      {backendMessage && <p>{props.message} {backendMessage}</p>}
    </div>
  );
}

export default SaySomething;
