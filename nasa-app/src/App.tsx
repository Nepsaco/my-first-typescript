import React, { useState, useEffect } from 'react';
import { Picture }from './Picture'
import './App.css';
const testPicture = {
  "copyright": "Somak Raychaudhury",
  "date": "2020-06-26",
  "explanation": "Want to watch a solar eclipse safely? Try looking down instead of up, though you might discover you have a plethora of images to choose from. For example, during the June 21st solar eclipse this confusing display appeared under a shady bamboo grove in Pune, India. Small gaps between close knit leaves on the tall plants effectively created a network of randomly placed pinholes. Each one projected a separate image of the eclipsed Sun. The snapshot was taken close to the time of maximum eclipse in Pune when the Moon covered about 60 percent of the Sun's diameter. But an annular eclipse, the Moon in silhouette completely surrounded by a bright solar disk at maximum, could be seen aong a narrow path where the Moon's dark shadow crossed central Africa, south Asia, and Ch",
  "hdurl": "https://apod.nasa.gov/apod/image/2006/Eclipse-under-bamboos.jpg",
  "media_type": "image",
  "service_version": "v1",
  "title": "Eclipse under the Bamboo",
  "url": "https://apod.nasa.gov/apod/image/2006/Eclipse-under-bamboos1024c.jpg"
}
const App: React.FC = () => {
  const [picture, setPicture] = useState(testPicture)

  const fetchpicture = async () => {
    const response = await fetch(`${process.env.REACT_APP_APOD}`)
    const parsedResponse = await response.json()

    setPicture(parsedResponse)
  }

  useEffect(() => {
    /* fetchpicture() */
  }, [])

  return (
    <div className='App'>
      <Picture picture={picture}/>
    </div>
  );
}

export default App
