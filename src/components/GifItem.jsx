import React from 'react';

export const GifItem = ({title,imageUrl}) => {
  return (
    <div className='card'>
        <img src={imageUrl} />
        <p>{title}</p>
    </div>
  )
}
