import React, { ChangeEvent, useState } from 'react';
import './App.css';
import {AppBar} from './AppBar'
import {AppBody} from './AppBody'
import {SquareButton} from './SquareButton'
import {TextInput} from './TextInput'

function App() {
  const [inputText, setInputText] = useState("Neue Aufgabe hinzufügen...")

  const updateTextInput = (event: ChangeEvent<HTMLInputElement>) => {
		setInputText(event.target.value)
	}

  return (
    <div className="App">
      <AppBar> Todo App </AppBar>
      <AppBody>
        <div className="Task-input">
          <div className="Task-input-text">
            <TextInput onChange={updateTextInput} value={inputText} ></TextInput>
            <SquareButton> Hinzufügen </SquareButton>
          </div>
          <div className="Task-input-filter">
            <input className="Cb-filter-tasks" type="checkbox"/>
            <div> Alle anzeigen</div>
          </div>
        </div>
        <div className="Task-list">
          <div className="firstTask">
            <input className="Cb-first-task" type="checkbox"/>
            <button className="Btn-first-task-one"> </button>
            <div>Input text</div>
            <button> Löschen </button>
          </div>
        </div>
      </AppBody>
    </div>
  );
}

export default App;
