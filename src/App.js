import React, { useState, useEffect } from 'react';
import ListItem from './components/ListItem/index';
import { listData } from './static/listData';

import './App.css';

const App = () => {
  const [list, setList] = useState(listData);
  const [value, setValue] = useState('');
  useEffect(() => {
    var div = document.getElementById('chat');
    div.scrollTop = div.scrollHeight;
  }, [list])

  const onPostMessage = () => {
    const newInfo = {
      type: 'word',
      avatar: '乙',
      mode: 'right',
      content: value
    }
    const newListData = [].concat(list, newInfo);
    
    setList(newListData);
  }
  const inputChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div className="chat-container">
      <header className="chat-header">
        聊天记录
      </header>
      <div className="chat-content" id="chat">
        {
          list.map((item, index) => <ListItem {...item} key={index} />)
        }
      </div>
      <div className="input-base">
        <input type="text" value={value} onChange={inputChange} />
        <button onClick={onPostMessage}>发送</button>
      </div>
    </div>
  );
}

export default App;
