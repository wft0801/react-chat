import React from 'react'; 
import './index.css';

const Image = (props) => {
  const { content } = props;
  return (
    <img src={content} className="image" />
  )
}

export default Image;