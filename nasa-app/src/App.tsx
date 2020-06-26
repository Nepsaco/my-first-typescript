import React, { useState, useEffect } from 'react';
import { Picture }from './Picture'
import './App.css';

const App: React.FC = () => {
  const [pictures, setPictures] = useState([])

  const fetchPictures = async () => {
    const response = await fetch(`${process.env.REACT_APP_APOD}`)
    const parsedResponse = await response.json()

    setPictures(parsedResponse)
  }

  useEffect(() => {
    fetchPictures()
  }, [pictures])

  return (
    <div className='App'>
      <Picture />
    </div>
  );
}

export default App
