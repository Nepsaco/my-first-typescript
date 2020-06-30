import React from 'react'

interface PictureProps {
  picture: Picture
}

export const Picture: React.FC<PictureProps> = ({ picture })=> {
  return (
    <div>
      <img src={picture.hdurl} alt={picture.explanation}/>
      <h2>
        {picture.title}
      </h2>
      <p>{picture.copyright}</p>
    </div>
  )
}
