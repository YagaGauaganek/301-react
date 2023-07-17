import React from 'react';
import './HornedBeast.css';

export default function HornedBeast(props) {
  return (
    <div className='beast'>
      <h2 className='beast-tittle'>{props.tittle}</h2>
      <img className='beast-image' src={props.imageURL} alt={props.keyword}></img>
      <p className='beast__description'>{props.description}</p>
    </div>
  )
}
