import React from 'react'; 
import './index.css';

const Word = (props) => {
  const { content } = props;
  return (
    <div className="list-content">{content}</div>
  )
}

export default Word;