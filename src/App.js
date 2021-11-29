import React, { useState } from 'react';
import './App.css';
import TodoListTemplate from './TodoListTemplate';

function App() {

  let [일정,일정변경] = useState([
    {content : '쇼핑하기', checked : true},
    {content : '수영하기', checked : false},
    {content : '헬스장가기', checked : true},]);
  let [입력값, 입력값변경] = useState('');
  
  return (
    <div className="App">
      <div className="container">
        <TodoListTemplate 일정={일정} 일정변경={일정변경} 입력값={입력값} 입력값변경={입력값변경}/>
      </div>
    </div>
  );
}

export default App;
