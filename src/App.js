import React from 'react';
import logo from './logo.svg';
import './App.css';
import Photo from './Photo';
import Name from './Name';
import Profile from './Profile';
import Animal from './Animal';

function App() {
  const myAnimal = new Animal(); 
  return (
    <>
      <Photo />
      <Name />
      <Profile />
    </>

  );
}

export default App;
