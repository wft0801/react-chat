import React from 'react'; 
import Word from '../word';
import Image from '../image';
import ContextMenu from '../contextMenu';

import './index.css';

const ListItem = (props) => {
  const { avatar, content, mode, type } = props;

  const showTypeContent = (type) => {
    return (
      <>
        {type === 'word' &&  <Word content={content} />}
        {type === 'image' &&  <Image content={content} />}
      </>
    )
  }

  return (
    <>
      { mode === 'left' && 
        (
          <div className='list-item'>
            <div className="avatar">{avatar}</div>
            {showTypeContent(type)}
          </div>
        )
      }
      {
        mode === 'right' && 
        (
          <div className='list-item list-item-right'>
            {showTypeContent(type)}
            <div className="avatar">{avatar}</div>
          </div>
        )
      }
      {
        mode === 'withdraw' && 
        (
          <div className="withdraw">{content}</div>
        )
      }
      <ContextMenu />
    </>
  )
}

export default ListItem;