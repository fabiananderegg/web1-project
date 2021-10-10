//import React, { ChangeEvent, useState } from 'react';
import './App.css';
import {AppBar} from './AppBar'
import {AppBody} from './AppBody'
import {TaskInput} from './TaskInput'
import {SquareButton} from './SquareButton'
//import {TextInput} from './TextInput'
//import {CbText} from './CheckBoxWithText'

function App() {

  return (
    <div className="App">
      <AppBar> Todo App </AppBar>
      <AppBody>
        <TaskInput></TaskInput>
        <div className="Task-list">
          <div className="firstTask">
            <input className="Cb-first-task" type="checkbox"/>
            <button className="Btn-first-task-one"> 
              <span role="img">{'\u1f5f2'}</span>
            </button>
            <div> Input text </div>
            <SquareButton> Löschen </SquareButton>
          </div>
        </div>
      </AppBody>
    </div>
  );
}

export default App;
