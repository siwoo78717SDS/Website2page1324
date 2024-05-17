import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [hobby, setHobby] = useState('');
  const [age, setAge] = useState('');
  const [catImage, setCatImage] = useState('');

  const handleWelcome = () => {
    alert('Welcome!');
  };

  const handleName = () => {
    const userName = prompt("What's your name?");
    setName(userName);
  };

  const handleHobby = () => {
    const userHobby = prompt("What's your favorite hobby?");
    setHobby(userHobby);
  };

  const handleGenerateCatImage = () => {
    if (hobby) {
      setCatImage(`https://cataas.com/cat/says/${encodeURIComponent(hobby)}`);
    } else {
      alert('Please enter your favorite hobby first!');
    }
  };

  const handleAge = () => {
    const userAge = prompt("How old are you?");
    setAge(userAge);
  };
